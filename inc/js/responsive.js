var wdwt_window_cur_size = 'screen';

jQuery('document').ready(function ()
{
//var previus_view=document.getElementById('top_posts_web').innerHTML;
  //screenSize=jQuery(".container").width();
  jQuery('.cont_vat_tab ul.content > li').filter(function ()
  {
    return jQuery(this).css("display") != 'none'
  }).addClass('active');
  jQuery('#wd-categories-tabs > .tabs > li').eq(0).addClass('active');
  sliderHeight = parseInt(jQuery("#slider-wrapper").height());
  sliderWidth = parseInt(jQuery("#slider-wrapper").width());
  sliderIndex = sliderHeight / sliderWidth;

  if (matchMedia('only screen and (max-width : 767px)').matches) {
    phone();
  }
  else
    if (matchMedia('only screen and (min-width: 768px) and (max-width: 1024px)').matches) {
      tablet();
    }
    else {
      checkMedia();
    }

  add_top_posts_click();

  var window_width = jQuery(window).width();
  jQuery(window).resize(function ()
  {
    checkMedia();
  });


  function checkMedia()
  {
    //###############################SCREEN
    if (matchMedia('only screen and (min-width: 1025px)').matches) {
      screen();
    }
    //###############################TABLET
    if (matchMedia('only screen and (min-width: 768px) and (max-width: 1024px)').matches) {
      tablet();
    }
    //################################PHONE
    if (matchMedia('only screen and (max-width : 767px)').matches) {
      phone(false);
    }

  }

  function screen()
  {
    slider.install('top-posts-list');
    jQuery("#blog,.blog,#top-posts .container,#header-top + .container").removeAttr("style");
    jQuery('.container>#blog').before(jQuery('#sidebar1'));
    jQuery("#header .phone-menu-block").removeClass("container");
    sHeight = sliderIndex * parseInt(jQuery("#slider-wrapper").width());
    sliderSize(sHeight);
    jQuery(".parallax-window").css("padding", "");
    if (wdwt_window_cur_size == 'phone') {
      jQuery("#header").find("#menu-button-block").remove();
      jQuery("#top-nav").css({"display": "block"});
      jQuery("#top-nav > div > ul  li.addedli,#top-nav > div > div > ul  li.addedli").remove();
      jQuery("#header-top .container").append(jQuery("#social"));
      jQuery("#header-middle").prepend(jQuery("#logo"));
      jQuery("aside .sidebar-container .widget-area").removeClass("clear");
      jQuery('#content').after(jQuery('#sidebar1'));
    }
    if (wdwt_window_cur_size == 'tablet') {
      jQuery("#top-nav > div > ul  li.addedli,#top-nav > div > div > ul  li.addedli").remove();
    }

    if (wdwt_window_cur_size == 'phone' || wdwt_window_cur_size == 'tablet') {

      jQuery("#top-posts-list> li .top-post-caption").removeClass('open');
      jQuery("#top-posts-list> li .top-post-caption").removeClass('top_posts_hovered_caption');


    }


    jQuery('.cont_vat_tab ul.content').height(jQuery('.cont_vat_tab ul.content > li.active').filter(function ()
    {
      return jQuery(this).css("display") != "none"
    }).height())
    inserting_div_float_problem(jQuery('#sidebar-footer'));
    resize_iframes();
    wdwt_window_cur_size = 'screen';
  }

  function tablet()
  {
    slider.unbind();
    var str = (jQuery(window).width() / 1024);
    jQuery(".parallax-window").css("padding", business_world_options.wdwt_pinned_padding * str + "px 0");
    jQuery('#blog').after(jQuery('#sidebar1'));
    jQuery('.container>#content').after(jQuery('#content>#sidebar1'));
    jQuery("#header .phone-menu-block").removeClass("container");

    if (wdwt_window_cur_size == 'phone') {
      jQuery("#header").find("#menu-button-block").remove();
      jQuery("#top-nav").css({"display": "block"});
      jQuery("#top-nav > div > ul  li.addedli,#top-nav > div > div > ul  li.addedli").remove();
      jQuery("#header-top .container").append(jQuery("#social"));
      jQuery("#header-middle").prepend(jQuery("#logo"));
      jQuery("aside .sidebar-container .widget-area").removeClass("clear");
      jQuery(".top-posts-block").width("100%");
    }
    jQuery("#top-nav > div > ul  li.addedli,#top-nav > div > div > ul  li.addedli").remove();
    jQuery("#top-nav > div > ul  li:has(> ul),#top-nav > div > div > ul  li:has(> ul)").each(function ()
    {
      var strtext = jQuery(this).children("a").html();
      var strhref = jQuery(this).children("a").attr("href");
      var strlink = '<a href="' + strhref + '">' + strtext + '</a>';
      jQuery(this).children("ul").prepend('<li class="addedli">' + strlink + '</li>');
    });
    jQuery('.cont_vat_tab ul.content').height(jQuery('.cont_vat_tab ul.content > li.active').filter(function ()
    {
      return jQuery(this).css("display") != "none"
    }).height())
    sHeight = sliderIndex * parseInt(jQuery("#slider-wrapper").width());
    sliderSize(sHeight);
    resize_iframes();
    wdwt_window_cur_size = 'tablet';
  }

  function phone(full)
  {
    slider.unbind();
    var str = (jQuery(window).width() / 1024);
    jQuery(".parallax-window").css("padding", business_world_options.wdwt_pinned_padding * str + "px 0");
    jQuery("#header .phone-menu-block").addClass("container");
    jQuery('.container>#content').after(jQuery('.container>#sidebar1'));
    jQuery('#blog').after(jQuery('#sidebar1'));

    jQuery(".featured-content .single-post-text").after(jQuery(".featured-content img"));
    sHeight = sliderIndex * parseInt(jQuery("#slider-wrapper").width());
    sliderSize(sHeight);

    //### PHONE UNIQUE STYLES


    //	jQuery(".cont_horizontal_tab").after(jQuery(".phone #tabs_div"))


    jQuery("#top-nav > div > ul  li.addedli,#top-nav > div > div > ul  li.addedli").remove();
    jQuery("#top-nav > div > ul  li:has(> ul),#top-nav > div > div > ul  li:has(> ul)").each(function ()
    {
      var strtext = jQuery(this).children("a").html();
      var strhref = jQuery(this).children("a").attr("href");
      var strlink = '<a href="' + strhref + '">' + strtext + '</a>';
      jQuery(this).children("ul").prepend('<li class="addedli">' + strlink + '</li>');
    });
    if (wdwt_window_cur_size != 'phone') {

      jQuery("#header-top .container").prepend(jQuery("#logo"));
    }

    for (var i = 0; i < jQuery("aside .sidebar-container .widget-area").length; i++) {
      if (i % 2 == 0) {
        jQuery("aside .sidebar-container .widget-area").eq(i).addClass("clear");
      }
    }
    jQuery("#header").find("#menu-button-block").remove();
    jQuery("#header .phone-menu-block").append('<div id="menu-button-block"><a href="#">Menu</a></div>');
    if (!jQuery("#top-nav").hasClass("open")) {
      jQuery("#top-nav").css({"display": "none"})
    }
    ;
    jQuery('.cont_vat_tab ul.content').height(jQuery('.cont_vat_tab ul.content > li.active').filter(function ()
    {
      return jQuery(this).css("display") != "none"
    }).height())
    wdwt_window_cur_size = 'phone';
    resize_iframes();
  }

  function add_top_posts_click()
  {
    jQuery("#top-posts-list> li").click(function ()
      {
        if (wdwt_window_cur_size == 'tablet' || wdwt_window_cur_size == 'phone') {
          jQuery("#top-posts-list> li").find(".top-post-caption").removeClass("open").removeClass("top_posts_hovered_caption")
          if (!jQuery(this).find(".top-post-caption").hasClass("open")) {
            jQuery(this).find(".top-post-caption").addClass("open");
            jQuery(this).find(".top-post-caption").addClass("top_posts_hovered_caption");
          }
          else {
            jQuery(this).find(".top-post-caption").removeClass("open");
            jQuery(this).find(".top-post-caption").removeClass("top_posts_hovered_caption");
          }
        }
      }
    );


  }

  function resize_iframes()
  {

    var allVideos = jQuery("iframe, object, embed");

    allVideos.each(function ()
    {

      var el = jQuery(this);
      fluidParent = el.parent();
      var newWidth = fluidParent.width();

      if (newWidth >= el.attr('data-origWidth')) {
        newWidth = el.attr('data-origWidth');
      }
      el.width(newWidth)
        .height(newWidth * el.attr('data-aspectRatio'));
    });
  }

  function sliderSize(sHeight)
  {
    jQuery("#slider-wrapper").css('height', sHeight);
  }

  function inserting_div_float_problem(main_div)
  {
    jQuery(main_div).children('.clear:not(:last-child)').remove();
    var iner_elements = jQuery(main_div).children();
    var main_width = jQuery(main_div).width();
    var summary_width = 0;
    for (i = 0; i < iner_elements.length; i++) {
      summary_width = summary_width + jQuery(iner_elements[i]).outerWidth();
      if (summary_width > main_width) {
        jQuery(iner_elements[i]).before('<div class="clear"></div>')
        summary_width = jQuery(iner_elements[i]).outerWidth();
      }
    }
  }


})
;