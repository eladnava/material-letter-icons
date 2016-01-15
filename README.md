material-letter-icons
===================
[![npm version](https://badge.fury.io/js/material-letter-icons.svg)](https://badge.fury.io/js/material-letter-icons)

Generates generic, single-letter icons styled according to the [Material Design](https://www.google.com/design/spec/material-design/introduction.html) colors and guidelines, similar to Gmail's fallback sender icons, using:

* [material-colors](https://www.npmjs.com/package/material-colors) - to provide a Material-colored background for the icons
* [svg2png](https://www.npmjs.com/package/svg2png) - to convert the generated `.svg` icons to `.png` using PhantomJS

Demo
---
<img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/A.png" width="125" /> <img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/H.png" width="125" /> <img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/L.png" width="125" /> <img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/M.png" width="125" /> <img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/R.png" width="125" /> <img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/X.png" width="125" />

Usage
---

The icons are pre-generated in `.png` and `.svg` format within the `dist/` directory.


If you want to generate them manually, install the package using npm:
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

Requirements
---
If you're generating the icons yourself, make sure to:

* Install the `dependencies/Roboto-Light.ttf` font as a system-wide font, and make sure that `Light` is the only `Roboto` font weight you have installed. Unfortunately, I couldn't bundle it within the `base.svg` due to [a bug with PhantomJS](https://github.com/domenic/svg2png/issues/39).

License
---
Apache 2.0