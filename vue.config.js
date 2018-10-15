module.exports = {
    // 基本路径
    baseUrl: 'dist', // 图片等静态资源最终路径，相对于域名的，即xx.com/dist/xx.jpg
    outputDir: "public/dist", // 编译输出路径
    productionSourceMap: false,

    // 去掉文件名中的 hash
    filenameHashing: false,
    // 删除 HTML 相关的 webpack 插件
    chainWebpack: config => {
        config.plugins.delete('html');
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
    },

    runtimeCompiler: true,

    // 多页面入口
    pages: {
        main: {
            // page 的入口
            entry: 'front_end_src/main.js',
        },
    }
};