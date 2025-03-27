const path = require('path');

module.exports = {
    entry: './main.js', // Your main script
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output bundled file
        globalObject: 'this', // Ensures compatibility with different environments
        library: {
            name: 'helloWorld', // Expose the library globally
            type: 'umd', // Supports CommonJS, AMD, and script tags
        },
    },
    mode: 'production', // Change to 'development' for debugging
};
