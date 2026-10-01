const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const chromePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
];

const executablePath = chromePaths.find((p) => fs.existsSync(p));
if (!executablePath) {
  console.error('No Chrome or Edge executable found!');
  process.exit(1);
}

const previewDir = path.join(__dirname, '..', 'previews');
const artifactDir = path.resolve('C:\\Users\\LENOVO\\.gemini\\antigravity-ide\\brain\\8bf9b6b8-645c-471c-8a95-ffdf83c40559');

if (!fs.existsSync(previewDir)) {
  fs.mkdirSync(previewDir, { recursive: true });
}

async function capture() {
  console.log('Launching browser with:', executablePath);
  const browser = await puppeteer.launch({
    executablePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars', '--disable-web-security'],
  });

  const page = await browser.newPage();
  // Set unified width (1280px) with high-DPI (deviceScaleFactor: 2) for crisp quality
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });

  console.log('Navigating to http://localhost:5173 ...');
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait a moment for layout and 3D illustrations
  await new Promise((r) => setTimeout(r, 2000));

  // Capture Navbar first (cleanly at top of page)
  console.log('Capturing Navbar ...');
  const navbarOutPath = path.join(previewDir, '01_navbar.png');
  await page.screenshot({
    path: navbarOutPath,
    clip: { x: 0, y: 0, width: 1280, height: 110 }
  });
  fs.copyFileSync(navbarOutPath, path.join(artifactDir, '01_navbar.png'));
  console.log(`Captured Navbar -> ${navbarOutPath}`);

  // Hide the floating navbar temporarily for clean section-only captures
  await page.evaluate(() => {
    const nav = document.querySelector('header');
    if (nav) nav.style.display = 'none';
  });

  const sections = [
    { selector: '#hero', name: '02_hero_section.png', title: 'Hero Section' },
    { selector: '#work', name: '03_karya_proyek.png', title: 'Karya & Proyek Terpilih' },
    { selector: '#why-hire', name: '04_komitmen_nilai_tambah.png', title: 'Komitmen & Nilai Tambah' },
    { selector: '#expertise', name: '05_keahlian_teknologi.png', title: 'Keahlian & Teknologi' },
    { selector: '#experience', name: '06_pengalaman_rekam_jejak.png', title: 'Pengalaman & Rekam Jejak' },
    { selector: '#about', name: '07_tentang_saya.png', title: 'Tentang Saya' },
    { selector: '#contact', name: '08_kontak_kolaborasi.png', title: 'Kontak & Kolaborasi' },
    { selector: 'footer', name: '09_footer.png', title: 'Footer' },
  ];

  for (const s of sections) {
    const el = await page.$(s.selector);
    if (el) {
      // Scroll into view so Framer Motion triggers in-view elements
      await el.evaluate((node) => node.scrollIntoView({ behavior: 'instant', block: 'center' }));
      await new Promise((r) => setTimeout(r, 600));

      const outPath = path.join(previewDir, s.name);
      await el.screenshot({ path: outPath, type: 'png' });
      console.log(`Captured ${s.title} -> ${outPath}`);

      // Also copy to artifact directory for embedding
      const artifactOut = path.join(artifactDir, s.name);
      fs.copyFileSync(outPath, artifactOut);
    } else {
      console.warn(`Element ${s.selector} not found!`);
    }
  }

  // Also capture complete full page with navbar visible
  await page.evaluate(() => {
    const nav = document.querySelector('header');
    if (nav) nav.style.display = '';
  });
  await new Promise((r) => setTimeout(r, 500));
  const fullPagePath = path.join(previewDir, '00_full_landing_page.png');
  await page.screenshot({ path: fullPagePath, fullPage: true });
  fs.copyFileSync(fullPagePath, path.join(artifactDir, '00_full_landing_page.png'));
  console.log(`Captured Full Landing Page -> ${fullPagePath}`);

  await browser.close();
  console.log('All desktop section screenshots captured successfully!');
}

capture().catch((err) => {
  console.error('Error during capture:', err);
  process.exit(1);
});
