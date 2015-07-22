module.exports = {

  // set the context (optional)
  context: __dirname + '/src',
  entry: './app.js',

  // enable loading modules relatively (without the ../../ prefix)
  resolve: {
    root: [__dirname + "/src"]
  },

  module: {
    loaders: [

      // load and compile javascript and less
      { test: /\.js$/, exclude: /node_modules/, loader:"babel" },
      { test: /\.less$/, loader: "style!css!less"},

      // support Jsob importing
      { test: /\.json$/, loader: "json" },

      // load raw html files
      { test: /\.html$/, exclude: /node_modules/, loader:"raw" },

      // load fonts and images
      { test: /\.(ttf|eot|svg|otf)$/, loader: "file" },
      { test: /\.woff(2)?$/, loader: "url?limit=10000&minetype=application/font-woff"}
    ]
  },

  // webpack dev server configuration
  devServer: {
    contentBase: "./src",
    noInfo: false,
    hot: true
  },

  // support source maps
  devtool: "#inline-source-map"
};