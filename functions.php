<?php

if (!function_exists('mytheme_register_nav_menu')) {
  /**
   * Register menu
   * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
   */
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

/**
 * Add custom taxonomy to REST API
 * @link https://developer.wordpress.org/reference/functions/register_taxonomy/
 *
 * @return void
 */
function rest_filter_by_custom_taxonomy($args, $request)
{

  if (isset($request['category_slug'])) {
    $category_slug = sanitize_text_field($request['category_slug']);
    $args['tax_query'] = [
      [
        'taxonomy' => 'category',
        'field'    => 'slug',
        'terms'    => $category_slug,
      ]
    ];
  } else if (isset($request['tag_slug'])) {
    $tag_slug = sanitize_text_field($request['tag_slug']);
    $args['tax_query'] = [
      [
        'taxonomy' => 'post_tag',
        'field'    => 'slug',
        'terms'    => $tag_slug,
      ]
    ];
  }

  return $args;
}
add_filter('rest_post_query', 'rest_filter_by_custom_taxonomy', 10, 3);
