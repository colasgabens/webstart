const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');

const browserConfig = {
  mode: 'production',
  entry: './src/public/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {

        test: /\.s?css$/,
        oneOf: [
          {
            test: /\.module\.s?css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: { modules: true, exportOnlyLocals: false }
              },
              "sass-loader"
            ]
          },
          {
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              generator: (content) => svgToMiniDataURI(content.toString()),
            },
          },
        ],
      },
      
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build/public/'),
  },
  plugins: [new HtmlWebpackPlugin({
    filename:'index.html',
    template: 'src/templet/index.html',
    path: path.resolve(__dirname, 'build/public/'),
		// favicon: path.resolve(__dirname, 'public/content/images/favicon.ico'),

  }),
  new MiniCssExtractPlugin({
      filename: 'index.css',
  })

],

};

const serverConfig = {
    mode: 'production',
    entry: "./src/server/index.ts",
    target: "node",
    output: {
      path: path.resolve(__dirname, 'build/server/'),
      filename: "index.js",
 
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
  };
  
  module.exports = [ serverConfig , browserConfig];

   