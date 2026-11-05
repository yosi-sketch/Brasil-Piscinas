const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '../public/logo.png');

async function generateAll() {
  if (!fs.existsSync(src)) {
    console.error('Source logo not found at', src);
    return;
  }

  console.log('Generating Brasil Piscinas assets from', src);

  // 1. Icon 512x512
  const img512 = await sharp(src)
    .resize(460, 460, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 26,
      bottom: 26,
      left: 26,
      right: 26,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(__dirname, '../public/icon.png'), img512);
  fs.writeFileSync(path.join(__dirname, '../public/icon-512x512.png'), img512);
  fs.writeFileSync(path.join(__dirname, '../app/icon.png'), img512);

  // 192x192
  const img192 = await sharp(img512).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/icon-192x192.png'), img192);

  // 180x180 Apple icon
  const apple180 = await sharp(img512).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/apple-icon.png'), apple180);
  fs.writeFileSync(path.join(__dirname, '../app/apple-icon.png'), apple180);

  // 48x48, 32x32, 16x16
  const img48 = await sharp(img512).resize(48, 48).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/icon-48x48.png'), img48);

  const img32 = await sharp(img512).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/icon-32x32.png'), img32);

  const img16 = await sharp(img512).resize(16, 16).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/icon-16x16.png'), img16);

  // Favicon.ico
  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), img32);
  fs.writeFileSync(path.join(__dirname, '../app/favicon.ico'), img32);

  // OG Image (1200x630)
  const bgNavy = await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 0, g: 26, b: 66, alpha: 1 }
    }
  }).png().toBuffer();

  const logoResized = await sharp(src)
    .resize(600, 440, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const ogComposite = await sharp(bgNavy)
    .composite([{ input: logoResized, gravity: 'center' }])
    .jpeg({ quality: 90 })
    .toBuffer();

  fs.writeFileSync(path.join(__dirname, '../public/og-image.jpg'), ogComposite);

  console.log('Brasil Piscinas assets generated successfully!');
}

generateAll().catch(console.error);
