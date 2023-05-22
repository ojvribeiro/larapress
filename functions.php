<?php

if (!function_exists('mytheme_register_nav_menu')) {

  function mytheme_register_nav_menu()
  {
    register_nav_menus(array(
      'primary_menu' => __('Primary Menu', 'larapress'),
      'footer_menu'  => __('Footer Menu', 'larapress'),
    ));
  }
  add_action('after_setup_theme', 'mytheme_register_nav_menu', 0);
}

function get_menu()
{
  # Change 'menu' to your own navigation slug.
  return wp_get_nav_menu_items('menu');
}

add_action('rest_api_init', function () {
  register_rest_route('larapress', '/menu', array(
    'methods' => 'GET',
    'callback' => 'get_menu',
  ));
});
