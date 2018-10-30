const mix = require('laravel-mix');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

mix.config.vue.esModule = true

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .sourceMaps()
  .disableNotifications()

if (mix.inProduction()) {
    mix.version()
  
    mix.extract([
      'vue',
      'vform',
      'axios',
      'vuex',
      'jquery',
      'popper.js',
      'vue-i18n',
      'vue-meta',
      'js-cookie',
      'bootstrap',
      'vue-router',
      'sweetalert2',
      'vuex-router-sync',
      '@fortawesome/fontawesome',
      '@fortawesome/vue-fontawesome'
    ])
  }

mix.webpackConfig({
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
        '~': path.join(__dirname, './resources/js')
        }
    },
    output: {
        chunkFilename: 'js/[name].[chunkhash].js',
        publicPath: mix.config.hmr ? '//localhost:8080' : '/'
    }
})