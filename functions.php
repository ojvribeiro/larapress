<?php
/**
 * Bredi functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Bredi
 */


include('blade/blade.php');


if ( ! defined( '_DIR' ) ) {
	define( '_DIR', get_template_directory() );
}

if ( ! defined( '__DIR' ) ) {
	define( '__DIR', get_template_directory_uri() );
}

if ( ! defined( '__IMGDIR' ) ) {
	define( '__IMGDIR', get_template_directory_uri() .'/resources/img' );
}

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '0.0.1' );
}




/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function bredi_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on Bredi, use a find and replace
		* to change 'bredi' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'bredi', _DIR .'/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', 'bredi' ),
		)
	);


	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support('custom-logo');
}
add_action( 'after_setup_theme', 'bredi_setup' );








/**
 * Enqueue scripts and styles.
 */
function bredi_scripts() {
	wp_enqueue_style( 'bredi-style', get_stylesheet_uri(), array(), _S_VERSION );

  // Libraries loaded on Webpack file
	wp_enqueue_script( 'bredi-bundle', __DIR .'/public/js/bundle.js', array(), _S_VERSION, true );

  // Main script
	wp_enqueue_script( 'bredi-main', __DIR .'/public/js/main.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'bredi_scripts' );




/**
 * Custom template tags for this theme.
 */
require _DIR .'/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require _DIR .'/inc/template-functions.php';

/**
 * Customizer additions.
 */
require _DIR .'/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require _DIR .'/inc/jetpack.php';
}





/**
 * Include the TGM_Plugin_Activation class.
 *
 * Depending on your implementation, you may want to change the include call:
 *
 * Parent Theme:
 * require_once get_template_directory() . '/path/to/class-tgm-plugin-activation.php';
 *
 * Child Theme:
 * require_once get_stylesheet_directory() . '/path/to/class-tgm-plugin-activation.php';
 *
 * Plugin:
 * require_once dirname( __FILE__ ) . '/path/to/class-tgm-plugin-activation.php';
 */
require_once _DIR .'/plugins/tgm/class-tgm-plugin-activation.php';

add_action( 'tgmpa_register', 'bredi_register_required_plugins' );

/**
 * Register the required plugins for this theme.
 *
 * In this example, we register five plugins:
 * - one included with the TGMPA library
 * - two from an external source, one from an arbitrary source, one from a GitHub repository
 * - two from the .org repo, where one demonstrates the use of the `is_callable` argument
 *
 * The variables passed to the `tgmpa()` function should be:
 * - an array of plugin arrays;
 * - optionally a configuration array.
 * If you are not changing anything in the configuration array, you can remove the array and remove the
 * variable from the function call: `tgmpa( $plugins );`.
 * In that case, the TGMPA default settings will be used.
 *
 * This function is hooked into `tgmpa_register`, which is fired on the WP `init` action on priority 10.
 */
function bredi_register_required_plugins() {
	/*
	 * Array of plugin arrays. Required keys are name and slug.
	 * If the source is NOT from the .org repo, then source is also required.
	 */
	$plugins = array(

		// This is an example of how to include a plugin bundled with a theme.
		array(
			'name'               => 'Slate Admin Theme', // The plugin name.
			'slug'               => 'slate-admin-theme', // The plugin slug (typically the folder name).
			'source'             => 'slate-admin-theme.zip', // The plugin ZIP file (/your-theme/plugins/tgm/plugins/).
			'required'           => true, // If false, the plugin is only 'recommended' instead of required.
			'version'            => '1.2.3', // E.g. 1.0.0. If set, the active plugin must be this version or higher. If the plugin version is higher than the plugin version installed, the user will be notified to update the plugin.
			'force_activation'   => true, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch.
		),

		// This is an example of how to include a plugin from the WordPress Plugin Repository.
		array(
			'name'      => 'Better Search Replace',
			'slug'      => 'better-search-replace',
			'required'  => false,
		),

    array(
			'name'      => 'Contact Form 7',
			'slug'      => 'contact-form-7',
			'required'  => true,
		),

    array(
			'name'      => 'Custom Field Suite',
			'slug'      => 'custom-field-suite',
			'required'  => true,
		),

    array(
			'name'      => 'Custom Post Type UI',
			'slug'      => 'custom-post-type-ui',
			'required'  => true,
		),

    array(
			'name'      => 'Really Simple SSL',
			'slug'      => 'really-simple-ssl',
			'required'  => false,
		),

    array(
			'name'      => 'Wordfence Security',
			'slug'      => 'wordfence',
			'required'  => false,
		),

    array(
			'name'      => 'WP Cerber Security',
			'slug'      => 'wp-cerber',
			'required'  => false,
		),

	);

	/*
	 * Array of configuration settings. Amend each line as needed.
	 *
	 * TGMPA will start providing localized text strings soon. If you already have translations of our standard
	 * strings available, please help us make TGMPA even better by giving us access to these translations or by
	 * sending in a pull-request with .po file(s) with the translations.
	 *
	 * Only uncomment the strings in the config array if you want to customize the strings.
	 */
	$config = array(
		'id'           => 'bredi',                 // Unique ID for hashing notices for multiple instances of TGMPA.
		'default_path' =>  _DIR .'/plugins/tgm/plugins/',                      // Default absolute path to bundled plugins.
		'menu'         => 'tgmpa-install-plugins', // Menu slug.
		'parent_slug'  => 'themes.php',            // Parent menu slug.
		'capability'   => 'edit_theme_options',    // Capability needed to view plugin install page, should be a capability associated with the parent menu used.
		'has_notices'  => true,                    // Show admin notices or not.
		'dismissable'  => true,                    // If false, a user cannot dismiss the nag message.
		'dismiss_msg'  => '',                      // If 'dismissable' is false, this message will be output at top of nag.
		'is_automatic' => false,                   // Automatically activate plugins after installation or not.
		'message'      => '',                      // Message to output right before the plugins table.

		
		'strings'      => array(
			'page_title'                      => __( 'Instalar plugins obrigatórios', 'bredi' ),
			'menu_title'                      => __( 'Instalar plugins', 'bredi' ),
			/* translators: %s: plugin name. */
			'installing'                      => __( 'Instalando Plugin: %s', 'bredi' ),
			/* translators: %s: plugin name. */
			'updating'                        => __( 'Atualizando plugin: %s', 'bredi' ),
			'oops'                            => __( 'Algo deu errado com a Plugin API.', 'bredi' ),
			'notice_can_install_required'     => _n_noop(
				/* translators: 1: plugin name(s). */
				'Este tema exige o seguinte plugin: %1$s.',
				'Este tema exige os seguintes plugins: %1$s.',
				'bredi'
			),
			'notice_can_install_recommended'  => _n_noop(
				/* translators: 1: plugin name(s). */
				'Este tema recomenda o seguinte plugin: %1$s.',
				'Este tema recomenda os seguintes plugins: %1$s.',
				'bredi'
			),
			'notice_ask_to_update'            => _n_noop(
				/* translators: 1: plugin name(s). */
				'O seguinte plugin precisa ser atualizado para sua última versão para garantir a máxima compatibilidade com este tema: %1$s.',
				'Os seguintes plugins precisam ser atualizados para sua última versão para garantir a máxima compatibilidade com este tema: %1$s.',
				'bredi'
			),
			'notice_ask_to_update_maybe'      => _n_noop(
				/* translators: 1: plugin name(s). */
				'Existe uma atualização para: %1$s.',
				'Existem atualizações disponíveis para os seguintes plugins: %1$s.',
				'bredi'
			),
			'notice_can_activate_required'    => _n_noop(
				/* translators: 1: plugin name(s). */
				'O seguinte plugin obrigatório está atualmente inativo: %1$s.',
				'Os seguintes plugins obrigatórios estão atualmente inativos: %1$s.',
				'bredi'
			),
			'notice_can_activate_recommended' => _n_noop(
				/* translators: 1: plugin name(s). */
				'O seguinte plugin recomendado está atualmente inativo: %1$s.',
				'Os seguintes plugins recomendados estão atualmente inativos: %1$s.',
				'bredi'
			),
			'install_link'                    => _n_noop(
				'Instalar plugin',
				'Instalar plugins',
				'bredi'
			),
			'update_link' 					  => _n_noop(
				'Atualizar plugin',
				'Atualizar plugins',
				'bredi'
			),
			'activate_link'                   => _n_noop(
				'Ativar plugin',
				'Ativar plugins',
				'bredi'
			),
			'return'                          => __( 'Voltar para a instalação de plugins obrigatórios', 'bredi' ),
			'plugin_activated'                => __( 'Plugin ativado com sucesso.', 'bredi' ),
			'activated_successfully'          => __( 'O seguinte plugin foi ativado com sucesso:', 'bredi' ),
			/* translators: 1: plugin name. */
			'plugin_already_active'           => __( 'Nenhum ação realizada. O plugin %1$s já estava ativo.', 'bredi' ),
			/* translators: 1: plugin name. */
			'plugin_needs_higher_version'     => __( 'Plugin não ativado. Uma versão mais recente de %s é necessária para este tema. Por favor, atualize o plugin.', 'bredi' ),
			/* translators: 1: dashboard link. */
			'complete'                        => __( 'Todos os plugins foram instalados e ativados com sucesso. %1$s', 'bredi' ),
			'dismiss'                         => __( 'Ignorar mensagem', 'bredi' ),
			'notice_cannot_install_activate'  => __( 'Existem um ou mais plugins obrigatórios ou recomendados para instalar, atualizar ou ativar.', 'bredi' ),
			'contact_admin'                   => __( 'Por favor, contate o administrador deste site para obter ajuda.', 'bredi' ),

			'nag_type'                        => '', // Determines admin notice type - can only be one of the typical WP notice classes, such as 'updated', 'update-nag', 'notice-warning', 'notice-info' or 'error'. Some of which may not work as expected in older WP versions.
		),
		
	);

	tgmpa( $plugins, $config );
}
