const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const chromePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
];

const executablePath = chromePaths.find((p) => fs.existsSync(p));
const mobileDir = path.join(__dirname, '..', 'previews', 'mobile');
const artifactDir = path.resolve('C:\\Users\\LENOVO\\.gemini\\antigravity-ide\\brain\\8bf9b6b8-645c-471c-8a95-ffdf83c40559');

if (!fs.existsSync(mobileDir)) {
  fs.mkdirSync(mobileDir, { recursive: true });
}

async function captureMobile() {
  const browser = await puppeteer.launch({
    executablePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars'],
  });

  const page = await browser.newPage();
  // Standard modern mobile viewport (390px x 844px, 2x scale)
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });

  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1500));

  // Capture Mobile Navbar first
  console.log('Capturing Mobile Navbar ...');
  const navOutPath = path.join(mobileDir, 'mobile_01_navbar.png');
  await page.screenshot({
    path: navOutPath,
    clip: { x: 0, y: 0, width: 390, height: 90 }
  });
  fs.copyFileSync(navOutPath, path.join(artifactDir, 'mobile_01_navbar.png'));
  console.log(`Captured Mobile Navbar -> ${navOutPath}`);

  // Hide header for clean section captures
  await page.evaluate(() => {
    const nav = document.querySelector('header');
    if (nav) nav.style.display = 'none';
  });

  const sections = [
    { selector: '#hero', name: 'mobile_02_hero.png', title: 'Mobile Hero' },
    { selector: '#work', name: 'mobile_03_proyek.png', title: 'Mobile Proyek' },
    { selector: '#why-hire', name: 'mobile_04_nilai_tambah.png', title: 'Mobile Nilai Tambah' },
    { selector: '#expertise', name: 'mobile_05_keahlian.png', title: 'Mobile Keahlian' },
    { selector: '#experience', name: 'mobile_06_pengalaman.png', title: 'Mobile Pengalaman' },
    { selector: '#about', name: 'mobile_07_tentang.png', title: 'Mobile Tentang' },
    { selector: '#contact', name: 'mobile_08_kontak.png', title: 'Mobile Kontak' },
    { selector: 'footer', name: 'mobile_09_footer.png', title: 'Mobile Footer' },
  ];

  for (const s of sections) {
    const el = await page.$(s.selector);
    if (el) {
      await el.evaluate((node) => node.scrollIntoView({ behavior: 'instant', block: 'center' }));
      await new Promise((r) => setTimeout(r, 400));
      const outPath = path.join(mobileDir, s.name);
      await el.screenshot({ path: outPath, type: 'png' });
      fs.copyFileSync(outPath, path.join(artifactDir, s.name));
      console.log(`Captured ${s.title} -> ${outPath}`);
    } else {
      console.warn(`Element ${s.selector} not found!`);
    }
  }

  // Also capture mobile full page
  await page.evaluate(() => {
    const nav = document.querySelector('header');
    if (nav) nav.style.display = '';
  });
  await new Promise((r) => setTimeout(r, 400));
  const fullMobilePath = path.join(mobileDir, 'mobile_00_full_page.png');
  await page.screenshot({ path: fullMobilePath, fullPage: true });
  fs.copyFileSync(fullMobilePath, path.join(artifactDir, 'mobile_00_full_page.png'));
  console.log(`Captured Mobile Full Page -> ${fullMobilePath}`);

  await browser.close();
  console.log('Mobile captures completed successfully!');
}

captureMobile().catch(console.error);
