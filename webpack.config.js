var path = require('path');

module.exports = {
  entry: './src/client/app.js',

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/js/')
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }

};
