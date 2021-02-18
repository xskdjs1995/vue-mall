module.exports = {
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);
  },
  configureWebpack: {
    resolve: {
      alias: {
        // 别名
        'assets': '@/assets',
        'components': '@/components'
      }
    }
    
  }
}

