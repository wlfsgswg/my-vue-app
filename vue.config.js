module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "<url>",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
