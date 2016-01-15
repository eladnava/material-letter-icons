// Require dependencies
var fs = require('fs');
var async = require('async');
var svg2png = require('svg2png');
var config = require('./config');
var colors = require('material-colors');

// Material Design color variables
var colorKeys = Object.keys(colors), currentColorIndex = 0;

// Randomize color keys
colorKeys.sort(function() {
  return .5 - Math.random();
});

// Load base icon SVG file as UTF-8 string
var baseSVG = fs.readFileSync(config.src.svg.basePath, {encoding: 'utf8'});

// Main generator function
exports.generateIcons = function(cb) {
    // Convert letters to char array
    var letters = config.generator.characters.split('');
    
    // Generate each letter icon "synchronously"
    async.eachSeries(letters, function(letter, cbAsync) {
        // Log current letter
        console.log('Generating icons for letter: ' + letter);
        
        // Generate an icon for the current letter
        exports.generateLetterIcon(letter, function(err) {
            // Handle errors
            if (err) {
                return cbAsync(err);
            }
            
            // Continue to next letter
            return cbAsync();
        });
    }, function done() {
        // Call parent callback
        cb();
    });
}

// Generates icons for a single letter
exports.generateLetterIcon = function(letter, cb) {
    // Derive SVG from base letter SVG
    var letterSVG = baseSVG;
    
    // Get a random Material Design color
    var color = this.getRandomLetterColor();
    
    // Substitude placeholders for color and letter
    letterSVG = letterSVG.replace('{c}', color);
    letterSVG = letterSVG.replace('{x}', letter);
    
    // Define SVG/PNG output path
    var outputSVGPath = config.dist.svg.outputPath + letter + '.svg';
    var outputPNGPath = config.dist.png.outputPath + letter + '.png';
    
    // Export the letter as an SVG file
    fs.writeFileSync(outputSVGPath, letterSVG);
    
    // Convert the SVG file into a PNG file using svg2png
    svg2png(outputSVGPath, outputPNGPath, config.dist.png.dimensions, function(err) {
        // Report error
        if (err) {
            return cb(err);
        }
        
        // Success!
        cb();
    });
}

// Returns the next Material Design color for the icon background
this.getRandomLetterColor = function() {
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
        return this.getRandomLetterColor();
    }
    
    // Return current color hex
    return color;
}