module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "<url>",
        ws: true,
        changeOrigin: true
      }
    }
  },
  // 此处可以修改antd主题颜色
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#1DA57A",
          "link-color": "#1DA57A",
          "border-radius-base": "2px"
        },
        javascriptEnabled: true
      }
    }
  }
};
