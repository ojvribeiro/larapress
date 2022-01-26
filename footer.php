<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Bredi
 */

?>

<?php
  // Para editar a view do Footer, vá até o arquivo abaixo
  require_once _DIR .'/resources/views/components/footer.php';
?>


<?php
  // Para scripts via CDN, vá até o arquivo abaixo
  require_once _DIR .'/resources/views/components/scripts.php';
?>

<?php wp_footer(); ?>

</body>
</html>
