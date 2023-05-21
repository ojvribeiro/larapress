const path = require('node:path')
const { rmdirSync } = require('node:fs')
const mix = require('laravel-mix')

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const {
  UnpluginAutoImports,
} = require('./app/vue/plugins/unplugin-auto-imports')

mix
  .setPublicPath('.')

  .alias({
    '~': path.resolve(__dirname, '.'),
    '@': path.resolve(__dirname, '.'),
    '@assets': path.resolve(__dirname, './resources/assets'),
    '@components': path.resolve(__dirname, './resources/components'),
    '@composables': path.resolve(__dirname, './resources/composables'),
    '@layouts': path.resolve(__dirname, './resources/layouts'),
    '@stores': path.resolve(__dirname, './resources/stores'),
    '@views': path.resolve(__dirname, './resources/views'),
  })

  .webpackConfig({
    devtool: 'source-map',

    output: {
      assetModuleFilename: pathData => {
        // keep only /wp-content/themes/theme-name/ part from descriptionFileRoot
        const relativePath =
          pathData.module.resourceResolveData.descriptionFileRoot
            .replace(/.*(wp-content\\themes\\)(.*)(.*)/, '$1$2')
            .replace(/\\/g, '/')

        // images
        if (/\.(png|jpe?g|gif|svg|webp|avif|ico)$/i.test(pathData.filename)) {
          return `${relativePath}/resources/assets/img/[name][ext][query]`
        }
      },
    },

    resolve: {
      extensions: ['.js', '.vue', '.ts'],
    },

    plugins: [...UnpluginAutoImports(), new ForkTsCheckerWebpackPlugin()],

    module: {
      rules: [
        // ... other rules omitted
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          options: { appendTsSuffixTo: [/\.vue$/] },
        },

        {
          test: /\.(jpe?g|png|gif|svg|webp|avif|ico)$/i,
          type: 'asset/resource',
        },
      ],
    },
  })

  .after(() => {
    rmdirSync('./images', { recursive: true, force: true })
    rmdirSync('./wp-content', { recursive: true, force: true })
  })

  .ts('app/app.ts', 'public/assets/js')

  .vue({
    version: 3,

    options: {
      transformAssetUrls: {
        img: 'src',
        link: 'href',
        video: ['src', 'poster'],
        source: 'src',
        object: 'src',
        embed: 'src',
      },
    },
  })

  .sourceMaps()

  .version()

  .extract()

  .browserSync({
    proxy: 'larapress.test',
    port: 8000,
    files: ['index.php', 'app.vue', 'resources/**/*', 'tailwind.config.js'],
    online: false,
    logLevel: 'silent',
    open: false,
    notify: false,
  })

  .disableSuccessNotifications()
