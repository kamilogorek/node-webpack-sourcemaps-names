module.exports = {
  entry: "./app.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  target: 'node',
  devtool: "source-map",
  mode: "production",
};
