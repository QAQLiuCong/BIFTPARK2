let basePaths = '';

let baseConfig = {
  isDev: true,
  sourceMap: false,
  sassStyle: "compact",
  cssRename: true,
  paths: {
    html: basePaths + "src",
    tpl: basePaths + "src/template",
    css: basePaths + "src/scss",
    script: basePaths + "src/js",
    image: basePaths + "src/images",
    font: basePaths + "src/font"
  },
  pathsDev: {
    html: basePaths + "dist",
    css: basePaths + "dist/css",
    script: basePaths + "dist/js",
    image: basePaths + "dist/images",
    font: basePaths + "dist/font"
  },
  pathsTest: {
    html: basePaths + "dist_test",
    css: basePaths + "dist_test/css",
    script: basePaths + "dist_test/js",
    image: basePaths + "dist_test/images",
    font: basePaths + "dist_test/font"
  },
  pathsBuild: {
    html: basePaths + "build",
    css: basePaths + "build/css",
    script: basePaths + "build/js",
    image: basePaths + "build/images",
    font: basePaths + "build/font"
  },
  base64Config: {
    extensions: ["png"],
    maxImageSize: 10 * 1024
  },
  pxToViewport: false
};

module.exports = baseConfig;