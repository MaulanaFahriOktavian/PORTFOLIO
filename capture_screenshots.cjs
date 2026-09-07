const { spawn } = require('child_process');
const fs = require('fs');

const viewports = [
  { name: 'desktop_1440', width: 1440, height: 900, mobile: false, port: 9230 },
  { name: 'laptop_1280', width: 1280, height: 800, mobile: false, port: 9231 },
  { name: 'mobile_375', width: 375, height: 812, mobile: true, port: 9232 },
];

async function capture({ name, width, height, mobile, port }) {
  return new Promise((resolve, reject) => {
    const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
      '--headless',
      `--remote-debugging-port=${port}`,
      '--disable-gpu',
      'http://localhost:5174/'
    ]);

    setTimeout(async () => {
      try {
        const res = await fetch(`http://localhost:${port}/json`);
        const tabs = await res.json();
        const pageTab = tabs.find(t => t.url.includes('5174'));
        if (!pageTab) { edge.kill(); reject('no page tab'); return; }

        const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
        ws.onopen = () => {
          ws.send(JSON.stringify({
            id: 1,
            method: 'Emulation.setDeviceMetricsOverride',
            params: { width, height, deviceScaleFactor: mobile ? 2 : 1.5, mobile }
          }));
        };

        ws.onmessage = (msg) => {
          const data = JSON.parse(msg.data);
          if (data.id === 1) {
            setTimeout(() => {
              ws.send(JSON.stringify({
                id: 2,
                method: 'Page.captureScreenshot',
                params: { format: 'png', captureBeyondViewport: false }
              }));
            }, 1500);
          } else if (data.id === 2) {
            const b64 = data.result?.data;
            if (b64) {
              const out = `d:/Portfolio/${name}_new.png`;
              const artOut = `C:/Users/LENOVO/.gemini/antigravity-ide/brain/7b4c615d-0cb4-4d51-bca4-f1bac9e4d293/${name}_new.png`;
              fs.writeFileSync(out, Buffer.from(b64, 'base64'));
              fs.writeFileSync(artOut, Buffer.from(b64, 'base64'));
              console.log(`Saved ${name}_new.png`);
            }
            ws.close();
            edge.kill();
            resolve();
          }
        };
      } catch (e) {
        edge.kill();
        reject(e);
      }
    }, 3000);
  });
}

(async () => {
  for (const vp of viewports) {
    await capture(vp);
  }
  console.log('All screenshots captured.');
})();
