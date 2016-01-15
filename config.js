// Package configuration
module.exports = {
    generator: {
        // Characters to generate, as string
        characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    },
    src: {
        svg: {
            // Base SVG file containing '{x}' and '{c}' placeholders
            basePath: 'src/svg/base.svg'
        }
    },
    dist: {
        svg: {
            // SVG icon output directory
            outputPath: 'dist/svg/',
        },
        png: {
            // PNG icon output directory
            outputPath: 'dist/png/',
            
            // PNG icon output dimensions
            dimensions: {
                width: 512,
                height: 512
            }
        }
    }
};