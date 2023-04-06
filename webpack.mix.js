const mix = require('laravel-mix')

const siteURL = 'http://wp-boiler.test'

mix
  .setPublicPath('./')

  .webpackConfig({
    devtool: 'source-map'
  })
  
  /**
   * Arquivos de estilo de bibliotecas
   * Todos os arquivos serão compiladas para o arquivo bundle.css em /css
   */
  .styles([
      // Insira os caminhos das bibliotecas que usará abaixo...
      // 'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/animate.css/animate.min.css',

    ], 'public/css/bundle.css'
  )



  /**
   * Scripts de bibliotecas
   * Todos os arquivos serão compiladas para o arquivo bundle.css em /js
   */
  .scripts([
    // Insira os caminhos das bibliotecas que usará abaixo...

    
  ], 'public/js/bundle.js')
  
  
  
  /**
   * Compilação do arquivo de estilo principal para o arquivo style.css
   */
  .sass('resources/sass/main.scss', 'style.css')
  .options({
    autoprefixer: {
      options: {
        browsers: [ 'last 40 versions' ],
        grid: true
      }
    }
  })
  
  
  
  /**
   * Compilação do arquivo de scripts principal para bundle.js
   */
  .js('resources/js/main.js', 'public/js/main.js')


  /**
   * Gera os arquivos de mapa
   */
  .sourceMaps()

  .version()

  
  .browserSync({
    proxy: siteURL,
    files: [
      './**/*.php',
      './**/*.js',
      './**/*.css',
    ]
})

