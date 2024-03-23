<?php

/**
 * EnduranceTrio WP Child Theme
 *
 * WordPress Child Theme built with Bulma
 *
 * Copyright (C) 2023 Ricardo do Canto
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https: //www.gnu.org/licenses/>.
 */

add_action('send_headers', 'tgm_io_strict_transport_security');

/**
 * Enables the HTTP Strict Transport Security (HSTS) header.
 *
 * @since 1.0.0
 */
function tgm_io_strict_transport_security() {
  // Enforce the use of HTTPS
  header("Strict-Transport-Security: max-age=10886400; includeSubDomains; preload");
  // Prevent Clickjacking
  header("X-Frame-Options: SAMEORIGIN");
  // Block Access If XSS Attack Is Suspected
  header("X-XSS-Protection: 1; mode=block");
  // Prevent MIME-Type Sniffing
  header("X-Content-Type-Options: nosniff");
  // Referrer Policy
  header("Referrer-Policy: same-origin");
}

add_action('wp_enqueue_scripts', 'endurancetrio_theme_scripts');
function endurancetrio_theme_scripts() {
  wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
  wp_enqueue_style('endurancetrio_style', get_stylesheet_directory_uri() . '/css/template.css', array(), 'v0.3.2', 'all');

  wp_register_script('endurancetrio_script', get_stylesheet_directory_uri() . '/js/template.js', array(), 'v0.3.2', true);
  wp_enqueue_script('endurancetrio_script');
}
