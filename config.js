// Package configuration
module.exports = {
    generator: {
        // Alphabet characters to generate, as string
        alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    },
    src: {
        svg: {
            // Base SVG file containing '{x}' and '{c}' placeholders
            basePath: 'src/svg/base.svg'
        }
    },
    dist: {
        // Distribution output directory
        path: 'dist/',
        svg: {
            // SVG icon output directory
            outputPath: 'svg/',
        },
        png: {
            // PNG icon output directory
            outputPath: 'png/',
            
            // PNG icon output dimensions
            dimensions: {
                width: 512,
                height: 512
            }
        }
    }
};