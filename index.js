#!/usr/bin/env node

var log = require('npmlog');
var config = require('./config');
var program = require('commander');
var generator = require('./lib/generator');

// Define arguments and options
program
    .version('1.0.0')
    .option('-c, --chars <$#@>', 'generate icons for custom characters (no seperator)')
    .parse(process.argv);

// Developer didn't provide any custom characters?
if (!program.chars) {
    // Let them know it's possible to do so via CLI argument
    log.warn('material-letter-icons', 'Generating icons for the entire alphabet.');
    log.warn('material-letter-icons', 'Specify --chars XYZ to override this behavior.');
}
else {
    // Let them know it's possible to do so via CLI argument
    log.info('material-letter-icons', 'Generating icons for custom characters: ' + program.chars);
}

// Generate the icons and export them to dist/
generator.generateIcons(program, function (err) {
    // Log errors
    if (err) {
        return log.error('Icon generator failed', err);
    }

    // Build path to dist/ folder for convenience
    var outputPath = __dirname + '/' + config.dist.path;
    
    // Print out success message
    log.info('material-letter-icons', 'Icons generated successfully');
    log.info('material-letter-icons', 'Output path: ' + outputPath);
});