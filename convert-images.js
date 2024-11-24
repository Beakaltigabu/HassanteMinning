const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const baseInputDir = 'assets/images/minerals';
const baseOutputDir = 'assets/images/webp';

// Create base output directory
if (!fs.existsSync(baseOutputDir)) {
    fs.mkdirSync(baseOutputDir, { recursive: true });
}

// Process all mineral categories
const categories = ['IronOre', 'lithium', 'gold', 'copper', 'amethyst', 'chromite'];

categories.forEach(category => {
    const inputDir = path.join(baseInputDir, category);
    const outputDir = path.join(baseOutputDir, category);

    // Create category output directory
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Process all images in category folder
    fs.readdirSync(inputDir).forEach(file => {
        if (file.match(/\.(jpg|jpeg|png)$/)) {
            sharp(path.join(inputDir, file))
                .webp({ quality: 80 })
                .toFile(path.join(outputDir, `${file.split('.')[0]}.webp`))
                .then(info => console.log(`Converted ${category}/${file}`))
                .catch(err => console.error(`Error converting ${category}/${file}:`, err));
        }
    });
});
