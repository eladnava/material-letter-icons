var fs = require('fs');
var log = require('npmlog');
var async = require('async');
var svg2png = require('svg2png');
var config = require('../config');
var colors = require('material-colors');

// Root package directory
var rootDir = __dirname + '/../';

// Material Design color variables
var colorKeys = Object.keys(colors), currentColorIndex = 0;

// Randomize colors array
colorKeys.sort(function() {
  return .5 - Math.random();
});

// Load base icon SVG file as UTF-8 string
var baseSVG = fs.readFileSync(rootDir + config.src.svg.basePath, {encoding: 'utf8'});

// Main generator function
exports.generateIcons = function(input, cb) {
    // Convert alphabet letters to char array
    var letters = config.generator.alphabet.split('');
    
    // Developer provided custom chars/letters via CLI option?
    if (input.chars) {
        // Override letters with custom chars (convert to char array)
        letters = input.chars.split('');
    }
    
    // Generate each letter icon "synchronously"
    async.eachSeries(letters, function(letter, cbAsync) {
        // Log current letter
        log.info('material-letter-icons', 'Generating icon: ' + letter);
        
        // Generate an icon for the current letter
        generateLetterIcon(letter, function(err) {
            // Handle errors
            if (err) {
                return cbAsync(err);
            }
            
            // Continue to next letter
            return cbAsync();
        });
    }, function done(err) {  
        // Handle errors
        if (err) {
            return cb(err);
        }
        
        // Call parent callback
        cb();
    });
}

// Generates icons for a single letter
function generateLetterIcon(letter, cb) {
    // Derive SVG from base letter SVG
    var letterSVG = baseSVG;
    
    // Get a random Material Design color
    var color = getRandomLetterColor();
    
    // Substitude placeholders for color and letter
    letterSVG = letterSVG.replace('{c}', color);
    letterSVG = letterSVG.replace('{x}', letter);
    
    // Get filesystem-friendly file name for letter
    var fileName = getIconFilename(letter);
    
    // Define SVG/PNG output path
    var outputSVGPath = rootDir + config.dist.path + config.dist.svg.outputPath + fileName + '.svg';
    var outputPNGPath = rootDir + config.dist.path + config.dist.png.outputPath + fileName + '.png';
    
    // Export the letter as an SVG file
    fs.writeFileSync(outputSVGPath, letterSVG);
    
    // Convert the SVG file into a PNG file using svg2png
    svg2png(new Buffer(letterSVG), config.dist.png.dimensions)
    .then(function (buffer) {
        // Write to disk
        fs.writeFileSync(outputPNGPath, buffer);

        // Success
        cb();
    }).catch(function (err) {
        // Report error
        return cb(err);
    });
}

// Returns a filesystem-friendly filename (without extension)
function getIconFilename(letter) {
    // Not alphanumeric?
    if (!letter.match(/^[0-9a-zA-Z]$/)) {
        // Return charcode instead
        return 'ASCII-' + letter.charCodeAt(0);
    }
    
    // We're good
    return letter;
}

// Returns the next Material Design color for the icon background
function getRandomLetterColor() {
    // Reset index if we're at the end of the array
    if (currentColorIndex >= colorKeys.length) {
        currentColorIndex = 0;
    }
    
    // Get current color and increment index for next time
    var currentColorKey = colorKeys[currentColorIndex++];
    
    // Return most satured color hex (a700 or 900)
    var color = colors[currentColorKey]['a700'] || colors[currentColorKey]['900'];
    
    // Invalid color saturation value?
    if (color == undefined) {
        // No saturation for black or white,
        // so return the next random color instead
        return getRandomLetterColor();
    }
    
    // Return current color hex
    return color;
}