const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const files = [
  'public/parts/air-filter.png',
  'public/hero/heroTahalka.png',
  'public/parts/brake-pads.png',
  'public/bikes/bikes-hero.png',
  'public/bikes/TVS-Raider-125-motor.png',
  'public/hero/mainhero.png'
]

async function convert() {
  for (const f of files) {
    try {
      const out = f.replace(/\.(png|jpg|jpeg)$/i, '.webp')
      await sharp(f).webp({ quality: 75 }).toFile(out)
      console.log('converted', f, '->', out)
    } catch (err) {
      console.error('error converting', f, err.message)
    }
  }
}

convert()
