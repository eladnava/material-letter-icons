# material-letter-icons

[![npm version](https://badge.fury.io/js/material-letter-icons.svg)](https://badge.fury.io/js/material-letter-icons)

Generates generic, single-letter icons styled according to the [Material Design](https://www.google.com/design/spec/material-design/introduction.html) colors and guidelines, similar to Gmail's fallback sender icons, using:

* [Roboto Light](https://www.google.com/fonts/specimen/Roboto) - to display the letters using the official Material Design typeface
* [material-colors](https://www.npmjs.com/package/material-colors) - to provide a Material Design colored background for the icons
* [svg2png](https://www.npmjs.com/package/svg2png) - to convert the generated `.svg` icon files to `.png` format using PhantomJS

## Demo
<img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/A.png" width="125" /> <img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/H.png" width="125" /> <img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/L.png" width="125" /> <img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/M.png" width="125" /> <img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/R.png" width="125" /> <img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/X.png" width="125" />

## Usage

The icons are **pre-generated** in `.png` and `.svg` format within the `dist/` directory.

## Generate Custom Icons

* Install the `dependencies/Roboto-Light.ttf` font as a system-wide font, and make sure that `Light` is the only `Roboto` font weight you have installed. Unfortunately, it can't be bundled within the `base.svg` due to [a bug with PhantomJS](https://github.com/domenic/svg2png/issues/39).

* Run the following commands to generate icons for custom characters:

```shell
npm install -g material-letter-icons
material-letter-icons generate --chars '$#@'
```

## Command Line Options
```shell
material-letter-icons --help

  Usage: material-letter-icons [options]

  Options:

    -h, --help         output usage information
    -V, --version      output the version number
    -c, --chars <$#@>  generate icons for custom characters (no seperator)
```

## Troubleshooting

###### EACCES - Permission Denied

You probably don't have write access to your global `node_modules` folder. Work around this error by prefixing the commands with `sudo`, or check out [fixing npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions) to `chown` those directories. 

## License
Apache 2.0
