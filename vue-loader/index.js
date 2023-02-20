const VueLoaderPlugin = require('./plugin');

function loader(source) {
  console.log(source);
}

loader.VueLoaderPlugin = VueLoaderPlugin;

module.exports = loader;
