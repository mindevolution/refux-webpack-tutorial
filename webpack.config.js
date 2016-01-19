var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		counter: './es6/counter.js',
		todo: './es6/todo.js'
	},
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].entry.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'es6'),
                query: {
                  presets: ['es2015', 'react'],
                },
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
