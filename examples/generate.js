// Load our letter icon generator
var materialLetterIcons = require('../generator');

// Generate the letter icons and export them to dist/
materialLetterIcons.generateIcons(function(err) {
    // Log errors
    if (err) {
        return console.log('Icon generator failed: ', err);
    }
    
    // We're good
    console.log('Icons generated successfully!');
});