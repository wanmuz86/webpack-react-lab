const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
 entry: {
  main:'./src/index.js',
  another:'./src/anotherEntry.js'
},
 // entry point /the first .js code which will be opened
 // If we do multiple entry, we can define another entry points
 output: { // the bundled file name and it's path
   path: path.resolve(__dirname, 'dist'), // dist folder
   filename: '[name].bundle.js', // the filename is .js // [name refer to either index or anotherEntry]
   publicPath: '/',
 },
 resolve: {
    extensions: ['.ts', '.tsx', '.js'], // inside project, we have .ts, .tsx. .js
  },
  module: {
    rules: [
      { // for .ts and .tsx file, the bunder will be ts-loader library
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        // for .js the bundler will be babel-loader, react babel loader
        test: /\.js$/,
        exclude: /node_modules/, // library
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      { // loader for css, it will use style-loader and css-loader
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Process CSS files
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]', // name of image will be added with hash
              outputPath: 'assets', // Output images to 'dist/assets'
            },
          },
        ],
      },
 
    ],
  },
  plugins: [ // Plugin untuk mengeluarkan html, 
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks:['main'] // specify the chunk/bundle for the html
      
      // path to our html file
      // when we do multiple entry, we might more than one files
    }),
    new HtmlWebpackPlugin({
      template:'./public/another.html', // define two HTML entry point
      filename:'another.html', // output yang dihasil
      chunks:['another']
    }),
    new BundleAnalyzerPlugin()
  ],
  optimization:{
    splitChunks: { // Configure code splitting based on the chunks
      chunks:'all',
      name:'vendors'
    }
  },
  devServer: { // setup for development server, running on port 3000, retrieve the file from dist
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 3000,
    open: true,
  },
 };
 
 
 
