const mix = require('laravel-mix');

const themePath = './';

mix
  .setPublicPath(themePath)

  .webpackConfig({
    devtool: "source-map"
  })
  
  /**
   * Arquivos de estilo de bibliotecas
   * Todos os arquivos serão compiladas para o arquivo bundle.css em /css
   */
  .styles([
      // Insira os caminhos das bibliotecas que usará abaixo...
      // 'node_modules/bootstrap/dist/css/bootstrap.min.css',

    ], 'build/css/bundle.css'
  )



  /**
   * Scripts de bibliotecas
   * Todos os arquivos serão compiladas para o arquivo bundle.css em /js
   */
  .scripts([
    // Insira os caminhos das bibliotecas que usará abaixo...

    
  ], 'build/js/bundle.js')
  
  
  
  /**
   * Compilação do arquivo de estilo principal para o arquivo style.css
   */
  .sass('sass/main.scss', 'style.css')
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
  .js('js/main.js', 'build/js/main.js')


  /**
   * Gera os arquivos de mapa
   */
  .sourceMaps()

  
  .browserSync({
    proxy: "http://peabiru.test",
    files: [
        `${themePath}/**/*.php`,
        `${themePath}/**/*.js`,
        `${themePath}/**/*.css`,
    ]
})
;
