const path = require('path');

module.exports = {
    entry: './src/main.js', // Correct path to your main script (relative path)
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory for bundled file
        filename: 'bundle.js', // Output bundled file name
        globalObject: 'this', // Ensures compatibility with different environments
        library: {
            name: 'helloWorld', // Expose the library globally as 'helloWorld'
            type: 'umd', // Universal Module Definition (supports CommonJS, AMD, and script tags)
        },
    },
    mode: 'production', // Use 'development' for debugging or 'production' for optimization
    resolve: {
        extensions: ['.js'], // Ensure .js files are resolved correctly
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Process JavaScript files
                exclude: /node_modules/, // Exclude node_modules folder
                use: {
                    loader: 'babel-loader', // Use Babel to transpile modern JavaScript
                    options: {
                        presets: ['@babel/preset-env'], // Transpile ES6+ syntax
                    },
                },
            },
        ],
    },
};
