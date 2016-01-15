material-letter-icons
===================
[![npm version](https://badge.fury.io/js/material-letter-icons.svg)](https://badge.fury.io/js/material-letter-icons)

Generates generic, single-letter icons styled according to the [Material Design](https://www.google.com/design/spec/material-design/introduction.html) colors and guidelines, similar to Gmail's fallback sender icons, using:

* [material-colors](https://www.npmjs.com/package/material-colors) - to provide a Material-colored background for the icons
* [svg2png](https://www.npmjs.com/package/svg2png) - to convert the generated `.svg` icons to `.png` using PhantomJS

Demo
--
<img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/A.png" width="125" /> <img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/H.png" width="125" /> <img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/L.png" width="125" /> <img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/M.png" width="125" /> <img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/R.png" width="125" /> <img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/X.png" width="125" />

Usage
---

Either copy the generated icons from `dist/` in `.png` or `.svg` format, or install the package and generate the icons yourself:

```shell
$ npm install material-letter-icons
```

Use the following code to generate the icons:

```js
// Load our letter icon generator
var materialLetterIcons = require('material-letter-icons');

// Generate the letter icons and export them to dist/
materialLetterIcons.generateIcons(function(err) {
    // Log errors
    if (err) {
        return console.log('Icon generator failed: ', err);
    }
    
    // We're good
    console.log('Icons generated successfully!');
});
```
