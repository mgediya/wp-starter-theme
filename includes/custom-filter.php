<?php
/**
* Load the custom functions.
*/

if ( !defined( 'ABSPATH' ) ) {
	header( 'Status: 403 Forbidden' );
	header( 'HTTP/1.1 403 Forbidden' );
	exit;
}

/**
 * Upload SVG file permission
 */
function add_svg_uploads( $svg ) {
    $svg['svg'] = 'image/svg+xml';
    return $svg;
}
add_filter( 'upload_mimes', 'add_svg_uploads' );

/**
 * Filter: acf/settings/save_json
 *
 * Specify directory to save ACF JSON to.
 *
 * @link https://www.advancedcustomfields.com/resources/local-json/ Documentation.
 *
 * @param string $path
 *
 * @return string
 */
function acf_settings_save_json( $path = '' ) {
    return trailingslashit( __DIR__ ) . 'acf';
}

/**
 * Filter: acf/settings/load_json
 *
 * Specify directories to look for ACF JSON.
 *
 * @param array $paths
 *
 * @uses $this::acf_settings_save_json()
 *
 * @return array
 */
function acf_settings_load_json( $paths ) {
    return array( acf_settings_save_json() );
}

add_filter( 'acf/settings/save_json', 'acf_settings_save_json' );
add_filter( 'acf/settings/load_json', 'acf_settings_load_json' );

// Gutenberg disable
// add_filter('use_block_editor_for_post', '__return_false', 10);