module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    },
    //解决跨域
    devServer: {
        // 设置代理
        proxy: {
            '/api': {
                target: 'http://api.zhuishushenqi.com', //要跨域的url
                ws: true,
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        }

    }
}