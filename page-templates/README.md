# Diretório de templates de páginas

Este diretório contém os templates (views) das páginas internas com layout não-padrão.

Para criar um novo template, crie um arquivo `minha-pagina.php` e insira o conteúdo abaixo:

```php
<?php
  /**
   * Template Name: Nome do Template
   */

  get_header();
?>

<main>
  <!-- O conteúdo vai aqui -->
</main>

<?php
  get_footer();
?>
```

Onde "Nome do Template" você deve substituir pelo nome da página.
