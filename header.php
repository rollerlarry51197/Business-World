<?php
global $wdwt_front;
?>
  <!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>"/>
    <meta name="viewport" content="width=device-width"/>
    <meta name="viewport" content="initial-scale=1.0"/>
    <link rel="profile" href="http://gmpg.org/xfn/11"/>
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>"/>
    <?php wp_head(); ?>
  </head>
<body <?php body_class(); ?>>

<?php
$header_image = get_header_image(); ?>
<header>
<?php
if (!empty($header_image)) { ?>
  <div class="container">
    <a class="custom-header-a" href="<?php echo esc_url(home_url('/')); ?>">
      <img src="<?php echo header_image(); ?>" class="custom-header">
    </a>
  </div>
<?php } ?>
  <div id="header" class="home_section">
    <div class="container clear-div">
      <?php $wdwt_front->logo(); ?>
      <div id="search-block">
        <?php get_search_form(); ?>
      </div>
      <div class="phone-menu-block">
        <nav id="top-nav">
          <div>
            <?php
            $business_word_show_home = true;
            if (has_nav_menu('primary-menu')) {
              $business_word_show_home = false;
            }
            $wdwt_menu = wp_nav_menu(array(
              'show_home' => $business_word_show_home,
              'theme_location' => 'primary-menu',
              'container' => false,
              'container_class' => '',
              'container_id' => '',
              'menu_class' => 'top-nav-list',
              'menu_id' => '',
              'echo' => false,
              'fallback_cb' => 'wp_page_menu',
              'before' => '',
              'after' => '',
              'link_before' => '',
              'link_after' => '',
              'items_wrap' => '<ul id="top-nav-list" class=" %2$s">%3$s</ul>',
              'depth' => 0,
              'walker' => ''
            ));
            echo $wdwt_menu; ?>
          </div>
        </nav>
      </div>
    </div>
  </div>
<?php


$header_img_type = $wdwt_front->get_param('header_img_type');

/*check if slider WD to show*/
if ($header_img_type == 'slider_wd') {

  $slider_wd_id = $wdwt_front->get_param('slider_wd_id');
  $hide_slider = $wdwt_front->get_param('hide_slider');
  if (is_array($slider_wd_id) && isset($slider_wd_id[0])) {
    $slider_wd_id = $slider_wd_id[0];
  } else {
    $slider_wd_id = null;
  }

  if (is_plugin_active('slider-wd/slider-wd.php') && function_exists("wd_slider") && isset($slider_wd_id)) {
    if (($hide_slider[0] != "Hide Slider" && ((is_home() && $hide_slider[0] == "Only on Homepage") || (is_front_page() && $hide_slider[0] == "Only on Front Page") || $hide_slider[0] == "On all the pages and posts"))) {

      ?><div class="wdwt_wds_container"><?php
      wd_slider($slider_wd_id);
      ?></div><?php
    }
  }
}
else{
  $wdwt_front->slideshow();
}



