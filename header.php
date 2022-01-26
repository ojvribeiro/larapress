<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Bredi
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>

  <?php
    require_once _DIR .'/resources/views/components/head.php';
  ?>
	
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>

  <?php
    require_once _DIR .'/resources/views/components/header.php';
  ?>