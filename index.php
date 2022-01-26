<?php
/**
 * Template da página inicial do site
 *
 * Esse arquivo modifica a URL raiz do site.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Bredi
 */

get_header();
?>

	<?php
    require_once _DIR .'/page-templates/index.php';
  ?>

<?php
get_footer();
