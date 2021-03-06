﻿$(window).resize(function() {
  $("body").css("width","");
  pupMakeup();
  mainSliderMakeup();
  
});

$(window).load(function() {
  $("body").css("width",$("body").width()-1).css("width",$("body").width()+1);
  $(".slider").each(function() {
    $(this).css("height",$(this).find("img").eq(0).height());
  });
  $(".article-pic").each(function() {
    $(this).css("width",$(this).find("img").width());
  })
});

$(window).scroll(function() {

  if ($(".fixed-menu").length) {
    if ($(window).scrollTop() > $(".header").outerHeight() - 50) {
      $(".fixed-menu").fadeIn(150)
    } else {
      $(".fixed-menu").fadeOut(150)
    }
  }

  if ($(".fixed-nav-placeholder").length) {
    if ($(".main-col-r").outerHeight(true) > $(".sidebar-l").outerHeight(true)) {
      if ($(window).scrollTop() > parseInt($(".fixed-nav-placeholder").offset().top - 40)) {
        $(".fixed-nav-wrapper").addClass("nav-fixed").css({
          position: "fixed",
          top: 40
        });
        if ($(".fixed-nav-wrapper").offset().top >= $(".footer").offset().top - $(".fixed-nav-wrapper").outerHeight(true) - 50) {
          $(".fixed-nav-wrapper").addClass("nav-abs").removeClass("nav-fixed").css({
            position: "absolute",
            top: $(".main-col-r").outerHeight(true) - $(".fixed-nav-wrapper").outerHeight(true)
          });
        } 

        if ($(".fixed-nav-wrapper").hasClass("nav-abs")) {
          
          if ($(window).scrollTop() < $(".nav-abs").offset().top - 40) {
            $(".fixed-nav-wrapper").removeClass("nav-abs").addClass("nav-fixed").css({
              position: "fixed",
              top: 40
            });
          }
        }
      } else {
        $(".fixed-nav-wrapper").removeClass("nav-fixed").css({
          position: "relative",
          top: "auto"
        });
      }
    } else {
      $(".fixed-nav-wrapper").removeClass("nav-fixed").css({
        position: "relative",
        top: "auto"
      });
    }
  }
});

$(document).ready(function () {

  mainSliderMakeup();

  $(".places-slider .pic-gallery-tmbs a").click(function() {
    $(this).parents(".slide").find(".pic-cont img").hide();
    $(this).parents(".slide").find(".pic-cont").html("<img src='"+$(this).attr("href")+"' style='display:none;' />");
    $(this).parents(".slide").find(".pic-cont img").fadeIn(250);
    
    $(this).parents(".pic-gallery-tmbs").find("a").removeClass("act");
    $(this).addClass("act");
    
    return false;
  })

  if ($(".main-team-carousel").length) {
    $(".main-team .jcarousel").jcarousel({
      scroll:5
    });
  }
  
  if ($(".main-clients-carousel").length) {
    $(".main-clients-carousel").jcarousel({
      scroll:4
    });
  }
  
  if ($(".main-slider-carousel").length) {
    $(".main-slider-carousel .jcarousel").jcarousel({
      scroll:2,
      initCallback: sliderCarouselInit
    });
  }

  $(".business-tabs .tab-content .close").click(function(){
    $(this).parents(".tabbed-content").find(".tab-content").fadeOut(250);
    $(this).parents(".tabbed-content").find(".tab").removeClass("act");
    
  });
  

  $(".place-specs").tooltip({
    position: {
      my: "center bottom-10",
      at: "center top",
      using: function( position, feedback ) {
        $( this ).css( position );
        $( "<div>" )
          .addClass( "tooltip-arrow" )
          .addClass( feedback.vertical )
          .addClass( feedback.horizontal )
          .appendTo( this );
      }
    }
  });
  
  $(".ico-type").tooltip({
    position: {
      my: "center bottom-10",
      at: "center top",
      using: function( position, feedback ) {
        $( this ).css( position );
        $( "<div>" )
          .addClass( "tooltip-arrow" )
          .addClass( feedback.vertical )
          .addClass( feedback.horizontal )
          .appendTo( this );
      }
    }
  });

  $(".anchors-menu a").click(function() {
    $(this).parents(".anchors-menu").find(".act").removeClass("act");
    $(this).parents("li").addClass("act");
    var anchor = $(this);
    var target = $("a[name='"+anchor.attr("href").replace("#","")+"']");
    $("body,html").animate({
      scrollTop: target.offset().top - 40
    },1000)
    return false;
  })

  $(".vacancy-cv-item .trigger").click(function() {
    $(this).toggleClass(".trigger-act");
    $(this).parents(".vacancy-cv-item").find(".vacancy-descr").slideToggle(400);
  });
  
  $(".vacancy-descr .close").click(function() {
    $(this).parents(".vacancy-cv-item").find(".trigger").click();
  })

  if ($(".vacancy-form input:file").length) {
    $(".vacancy-form input:file").nicefileinput({ 
      label : 'Выбрать файл'
    });
  }

  $(".achievements-carousel").jcarousel({
    scroll: 4
  });
  
  $(".main-achievements-carousel").jcarousel({
    scroll: 1,
    wrap: 'circular'
  });
  
  $(".awards-carousel").jcarousel({
    scroll: 1,
    wrap: 'circular'
  });
  
  $(".menu-carousel .jcarousel").jcarousel({
    scroll: 4
  });

  if ($(".form-date").length) {
    $(".form-date").datepicker({
      dateFormat: "d MM yy",
      onSelect: function() {
        //$(this).parents(".form-item").find(".placeholder").hide();
        $(this).focus().removeClass("error");
        $(this).blur();
      },
      firstDay: 1
    })
  }

  $(".simple-gallery").each(function() {
    $(this).simpleGallery();
  });
  
  $(".photo-slider").each(function() {
    $(this).photoSlider();
  });
  
  $(".common-slider").each(function() {
    $(this).commonSlider();
  });
  
  $(".team-slider").each(function() {
    $(this).teamSlider();
  });
  
  $(".places-slider").each(function() {
    $(this).placesSlider();
  });

  if ($("#cv_file").length) {
    $("#cv_file").nicefileinput({ 
      label : 'Загрузить резюме'
    });
  }
  
  $(".case-slider").each(function() {
    $(this).caseSlider();
  });
  
  
  
  // Anchors nav

  $(".anchors-nav a").click(function() {
    $("body,html").animate({
      scrollTop: $("a[name="+$(this).attr("href").replace("#","")+"]").offset().top - 20
    },1000);
    return false;
  });
  
  // Calendar navigation
  
  $(".calendar-nav .year").click(function() {
    $(this).next(".monthes").slideToggle(250);
    $(this).toggleClass("expanded");
  })

  // $(":last-child").addClass("last-child");

  if ($(".categories-list").length) {
    $(".categories-list .row").each(function() {
      $(this).find(".categories-item").css("height",$(this).height() - 87)
    })
  }

  // Expandable blocks
  
  $(".expandable").each(function() {
    var trigger = $(this).find(".trigger");
    var expandable = $(this);
    trigger.click(function() {
      expandable.toggleClass("expandable-expanded")
      expandable.find(".expandable-content").slideToggle(250);
    })
  });

  if ($("input:checkbox").length) {
    $("input:checkbox").iCheck()
  }

  $(".slider").each(function() {
    var slider = $(this);
    $(this).find("img").eq(0).load(function() {
      slider.css("height",$(this).height());
    });
    
  });
  $(".article-pic").each(function() {
    var cont = $(this);
    $(this).find("img").load(function() {
     cont.css("width",$(this).width());
    });
  })

  // Tabbed content
  
  $(".tabbed-content").each(function() {
    var tabs = $(this).children(".tabs").find(".tab");
    var tabContents = $(this).children(".tabs-content").children(".tab-content");
    
    if (!tabs.hasClass("act") && !$(this).hasClass("tabs-hidden")) {
      tabs.first().addClass("act");
    }
    
    tabContents.hide();
    tabContents.filter("[rel='"+tabs.filter(".act").attr("rel")+"']").show();
    
    tabs.click(function() {
      if (!tabs.parents().hasClass("tabs-triggered")) {
        
        tabs.removeClass("act");
        $(this).addClass("act");
        
        window.location.hash = $(this).attr("rel");
        
        tabContents.hide();
        
        tabContents.filter("[rel='"+$(this).attr("rel")+"']").fadeIn(250)
      }
      
    });
    
    tabs.find(".tabs-trigger").click(function() {
      if (tabs.parents().hasClass("tabs-triggered")) {
        
        tabs.removeClass("act");
        $(this).parents(".tab").addClass("act");
        
        window.location.hash = $(this).parents(".tab").attr("rel");
        
        tabContents.hide();
        
        tabContents.filter("[rel='"+$(this).parents(".tab").attr("rel")+"']").fadeIn(250)
      }
      
    });
    
  });
  
  var locationHash = window.location.hash.replace("#","");
  
  if ($(".tab[rel='" + locationHash + "']").length) {
    $(".tab[rel='" + locationHash + "']").click();
  }
  
  // Tabs prev/next
  
    if ($(this).find(".tabs-nav").length) {
      $(".tabbed-content").each(function() {
        var prev = $(this).find(".tabs-nav .prev");
        var next = $(this).find(".tabs-nav .next");
        
        var tabs = $(this).find(".tabs");
        
        if (tabs.find(".act").prev(".tab").length) {
          prev.show();
          prev.find("span").html(tabs.find(".act").prev(".tab").find("span").html());
        } else {
          prev.hide();
        }
        
        if (tabs.find(".act").next(".tab").length) {
          next.show();
          next.find("span").html(tabs.find(".act").next(".tab").find("span").html());
        } else {
          next.hide();
        }
        
        prev.click(function() {
          tabs.find(".act").prev(".tab").click();
          if (tabs.find(".act").prev(".tab").length) {
            next.show();
            $(this).find("span").html(tabs.find(".act").prev(".tab").find("span").html());
            next.find("span").html(tabs.find(".act").next(".tab").find("span").html());
          } else {
            $(this).hide();
            next.find("span").html(tabs.find(".act").next(".tab").find("span").html());
          }
        });
        
        next.click(function() {
          tabs.find(".act").next(".tab").click();
          if (tabs.find(".act").next(".tab").length) {
            prev.show();
            $(this).find("span").html(tabs.find(".act").next(".tab").find("span").html());
            prev.find("span").html(tabs.find(".act").prev(".tab").find("span").html());
          } else {
            $(this).hide();
            prev.find("span").html(tabs.find(".act").prev(".tab").find("span").html());
          }
        })
        
      });
    }

  // Mainpage projects jcarousel
  
  $(".mainpage-projects .jcarousel").jcarousel({
    scroll:3,
    wrap:'circular'
  });
  
  // Mainpage clients jcarousel
  
  
  
  // Documents-carousel
  
  $(".documents-carousel .jcarousel").jcarousel({
    scroll:2,
    wrap:'circular'
  });
  
  // Success-carousel
  
  $(".success-carousel .jcarousel").jcarousel({
    scroll:1,
    wrap:'circular'
  });

  $(".button-order").click(function() {
    openPopup("orderPopup")
  });
  
  $(".button-callback").click(function() {
    openPopup("callbackPopup")
  });

  $(".filter-trigger").each(function() {
    $(this).attr("origname",$(this).find("span span").html())
  });

  $(".filter-trigger").click(function() {
    var trigger = $(this);
    if (!trigger.hasClass("filter-trigger-act")) {
      trigger.find("span span").html("Свернуть");
      
      $(this).prev("ul").find("li.hidden").slideDown(200,function() {
        trigger.prev("ul").find("li.hidden a").fadeIn(200)
      });
      
    } else {
      
      $(this).prev("ul").find("li.hidden a").fadeOut(200,function() {
        trigger.prev("ul").find("li.hidden").slideUp(200)
      });
    
      trigger.find("span span").html($(this).attr("origname"));
    }
    
    $(this).toggleClass("filter-trigger-act");
    
  });

  $(".header .button-contact, .footer .button-contact").click(function() {
    openPopup("feedbackPopup")
  });

  $(".common-form select").customSelect();

  // Simple slider
  
  if ($(".slider").length) {
    $(".slider").each(function() {
      $(this).simpleSlider({
        width:530
      });
    });
  }

  

  $(".facts-tree .pup-trigger").hover(function() {
    var trigger = $(this);
    var popup = $(this).parents("div").children(".tree-popup");
    
    if (trigger.offset().top - $(window).scrollTop() + trigger.height()/2 < $(window).height()/2) {
      popup.fadeToggle(250)
           .css("left",$(this).position().left - 200)
           .css("top",$(this).position().top + $(this).height() + 20)
           .removeClass("tree-popup-top")
    } else {
      popup.fadeToggle(250)
           .css("left",$(this).position().left - 200)
           .css("top",$(this).position().top - popup.height() - 20)
           .addClass("tree-popup-top")
    }
    
  })
  
  $(".main-slider").mainSlider();

  $(".fancybox").fancybox({
    padding: 0,
    helpers: {
      overlay: {
        locked: false
      }
    }
  });

  $(".form-text").each(function() {
    if ($(this).val()) {
      $(this).prev(".placeholder").hide();
    }
  });

  $(".form-phone").mask("+7 (999) 999-99-99");

  validateForms();

  makeup();
  
});

function makeup() {

  $("blockquote .cont").each(function() {
    $(this).find("p").first().html("<span class='quote quote-begin'>&laquo;</span>" + $(this).find("p").first().html())
    $(this).find("p").last().html($(this).find("p").first().html() + "<span class='quote quote-end'>&raquo;</span>")
  });
  
  $("ol li").each(function() {
    if (!$(this).children(".li-cont").length) {
      $(this).html("<div class='li-cont'>"+$(this).html()+"</div>")
    }
  });
  
  $("ol.alternate li").each(function() {
    if (!$(this).find(".num").length) {
      var index = parseInt($(this).prevAll("li").length,10);
      index += 1;
      $(this).append("<div class='num'>"+index+"</div>");
    }
  });

  $("input.button").each(function () {
    if ($(this)[0].tagName == "INPUT" && !$(this).next("div.form-submit").length) {
      var divBtn = $("<div></div>");
      var submit = $(this);
      divBtn.attr("class",$(this).attr("class")).attr("id",$(this).attr("id")).html("<span>" + $(this).val() + "</span>");
      $(this).after(divBtn);
      $(this).hide();
      divBtn.on("click",function () {
        submit.click();
      });
    }
    
  });
  
  $("div.button,a.button").each(function() {
    $(this).html("<span class='btn-cont'><span class='b-l'><span class='b-r'>"+$(this).html()+"</span></span></span>");
  });
  
  $("input:text, textarea").each(function() {
    $(this).addClass("initial");
    
    var th = $(this);
    
    if ($(this).prop("tagName") == "INPUT") {
      // if (!$(this).parents(".input-wrapper").length) $(this).wrap("<div class='input-wrapper'></div>");
      $(this).focus(function() {
        $(this).removeClass("initial");
        $(this).parents(".form-item").find(".placeholder").hide();
      });
      $(this).blur(function() {
        $(this).prev().prev(".placeholder").hide();
        if (!$(this).val()) {
          $(this).addClass("initial");
          $(this).parents(".form-item").find(".placeholder").show();
        }
      });
    } else {
      $(this).focus(function() {
        $(this).removeClass("initial");
        $(this).parents(".form-item").find(".placeholder").hide();
      });
      $(this).blur(function() {
        if (!$(this).val()) {
          $(this).addClass("initial");
          $(this).parents(".form-item").find(".placeholder").show();
        }
      });
    }
      
    $(this).parents(".form-item").find(".placeholder").click(function() {
      th.focus();
    });
    
  });
  
  if ($(".page-text img").length) {
    $('.page-text img').filter(function() {
        var $th = $(this);
        return !$th.prev('img').length && !$(this).parents(".slider").length && ($th.parent().hasClass("page-text") || $th.parent("p").parent().hasClass("page-text") || $th.parent("div").parent().hasClass("page-text")) && $(this).next('img').length;
    }).each(function() {
        
      var $th = $(this);
      if (!$th.parents(".slider").length) {
        if ($th.parents("p").length || $th.parents("div").length) {
          $th.parent().find("img").wrapAll('<div class="slider">');
        }
        if (!$(this).prev().length) {
          $(this).before("<div />")
        }
        $th.prev().nextUntil(':not(img)').wrapAll('<div class="slider">');
        $th.parents(".slider").simpleSlider({
          width:530,
          showtitles: false
        });
      }
    });
    
    $('.page-text img').filter(function() {
        var $th = $(this);
        return !$th.prev('img').length && !$(this).parents(".slider").length && ($th.parent().hasClass("page-text") || $th.parent("p").parent().hasClass("page-text") || $th.parent("div").parent().hasClass("page-text")) && !$(this).next('img').length;
    }).each(function() {
      var $th = $(this);
      if (!$th.parents(".article-pic").length) {
        $th.wrap("<div class='article-pic' />");
        if ($th.attr("title")) $th.after("<div class='title'>"+$th.attr("title")+"</div>");
        $th.parents(".article-pic").css("width",$th.width());
      }
    });
    
  }
  
}

function validateForms() {
  
  $(".order-popup-form form, .order-form form").each(function() {
    $(this).validate({
      focusInvalid: false,
      sendForm : false,
      errorPlacement: function(error, element) {
        // element.parents(".input-wrapper").addClass("input-wrapper-error");
        error.insertAfter(element).wrap("<div class='error-wrapper' />");
        element.prev(".placeholder").addClass("placeholder-error")
        if (element[0].tagName == "SELECT") {
          element.parents(".form-item").find(".param-selector").addClass("param-sel-error")
        }
      },
      unhighlight: function(element, errorClass, validClass) {
        // $(element).parents(".input-wrapper").removeClass("input-wrapper-error");
        $(element).removeClass(errorClass);
        $(element).next(".error-wrapper").remove();
        $(element).prev(".placeholder").removeClass("placeholder-error");
        if ($(element)[0].tagName == "SELECT") {
          $(element).parents(".form-item").find(".param-selector").removeClass("selector-error")
        }
      },
      invalidHandler: function(form, validatorcalc) {
          var errors = validatorcalc.numberOfInvalids();
          if (errors && validatorcalc.errorList[0].element.tagName == "INPUT") {                    
              validatorcalc.errorList[0].element.focus();
          }
      }
    });
    
    if ($(this).find(".form-email").length) {
      $(this).find(".form-email").rules('add', {
        email: true,
        messages: {
          required:  "Введите правильный адрес!"
        }
      });
    }
    
    if ($(this).find(".form-date").length) {
      $(this).find(".form-date").rules('add', {
        messages: {
          required:  "Выберите дату!"
        }
      });
    }
    
    $(document).mouseup(function (e) {
      var container = $("form");

      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          $(".error-wrapper").remove();
      }
    });
    
    
  });  
    
  $(".vacancy-form form").each(function() {
    
    $(this).validate({
      focusInvalid: false,
      sendForm : false,
      messages: {
        required: "Заполните поле!",
        email: "Введите правильный адрес!"
      },
      errorPlacement: function(error, element) {
        // element.parents(".input-wrapper").addClass("input-wrapper-error");
        error.insertAfter(element).wrap("<div class='error-wrapper' />");
        // if (element.hasClass("form-email")) {
          // error.html("Введите правильный адрес!")
        // }
        element.prev(".placeholder").addClass("placeholder-error")
        if (element[0].tagName == "SELECT") {
          element.parents(".form-item").find(".param-selector").addClass("param-sel-error")
        }
      },
      unhighlight: function(element, errorClass, validClass) {
        // $(element).parents(".input-wrapper").removeClass("input-wrapper-error");
        $(element).removeClass(errorClass);
        $(element).next(".error-wrapper").remove();
        $(element).prev(".placeholder").removeClass("placeholder-error");
        if ($(element)[0].tagName == "SELECT") {
          $(element).parents(".form-item").find(".param-selector").removeClass("selector-error")
        }
      },
      invalidHandler: function(form, validatorcalc) {
          var errors = validatorcalc.numberOfInvalids();
          if (errors) {                    
              validatorcalc.errorList[0].element.focus();
          }
      }
    });
    
    $(this).find(".form-email").rules('add', {
        email: true,
        messages: {
          required:  "Введите правильный адрес!"
        }
    });
    
  });
  
}

function closePopup() {
  $(".tint").fadeTo(500,0,function() {
    $(this).remove();
  });
  $(".popup-act").removeClass("popup-act").fadeTo(300,0,function() {
    $(this).hide();
  });
}

function pupMakeup() {
  var popup = $(".popup-act");
  var pupTop = $(window).scrollTop() + ($(window).height() - popup.outerHeight(true))/2;
  if (pupTop < 20) pupTop = 20;
  $(".tint").css("height",$(window).height()).css("width",$("body").width());
  if (!popup.hasClass("price-popup")) {
    popup.css("top",pupTop).css("left",($(window).width()-popup.outerWidth(true))/2 - 20);
  } else {
    popup.css("margin-top",$(window).scrollTop() - popup.parent().offset().top - popup.parent().outerHeight(true) + ($(window).height()-popup.outerHeight(true))/2);
  }
  
}

function openPopup(pupId) {
  var popup = $("#"+pupId);
  $("body").append("<div class='tint' style='display:none;' />");
  popup.addClass("popup-act").fadeTo(500,1);
  
  $(".tint").fadeTo(300,1);
  pupMakeup();
  
  if (!popup.children(".popup-shadow").length) {
    popup.append("<div class='popup-shadow' />");
  } 
  
  jQuery(document).keydown(function(e){
    if (e == null) { // ie
      keycode = event.keyCode;
    } else { // mozilla
      keycode = e.which;
    }
    
    if(keycode == 27){ // escape, close box
      closePopup()
    }
    
  });
  
  $(".tint").on("click", function () {
    closePopup()
  });
  
  $(".popup .close, .popup .cancel").on("click", function () {
    closePopup()
  });
}

(function( jQuery ) {
  jQuery.fn.mainSlider = function() {
    var slider = $(this);
    var slides = slider.find(".slide");
    var sliderSize = slides.size();
    
    slides.hide();
    slides.eq(0).show().addClass("slide-act");
    
    slider.find(".main-slider-carousel .jcarousel-item").eq(0).addClass("act");
    
    var prevBtn = slider.find(".slider-prev");
    var nextBtn = slider.find(".slider-next");
    
    slider.find(".main-slider-carousel .jcarousel-item").click(function() {
      if (!$(this).hasClass("act")) {
      
        if (slider.find(".cases-button").css("display") == "block") {
          slider.find(".cases-button").fadeOut(250);
          nextBtn.show();
          prevBtn.show();
        }
      
        slider.find(".slide-act").fadeOut(500).removeClass("slide-act");
        slider.find(".slide").eq($(this).index()).fadeIn(500).addClass("slide-act");
        slider.find(".main-slider-carousel .jcarousel-item").removeClass("act");
        $(this).addClass("act");
      }
      
      if (!slider.find(".main-slider-carousel .act").prev().length) {
        prevBtn.addClass("slider-prev-disabled");
      } else {
        prevBtn.removeClass("slider-prev-disabled");
      }
      
      if (!slider.find(".main-slider-carousel .act").next().length) {
        nextBtn.addClass("slider-next-disabled");
      } else {
        nextBtn.removeClass("slider-next-disabled");
      }
      
    });
    
    
    
    if (!slider.find(".main-slider-carousel .act").prev().length) {
      prevBtn.addClass("slider-prev-disabled");
    }
    
    if (!slider.find(".main-slider-carousel .act").next().length) {
      nextBtn.addClass("slider-next-disabled");
    }
		
    prevBtn.on("click",function() {
      $(".main-slider-carousel .act").prev().click();
			$(".main-slider-carousel .jcarousel").jcarousel("scroll", $(".main-slider-carousel .act").prevAll().length);
    });
    
    nextBtn.on("click",function() {
      $(".main-slider-carousel .act").next().click();
			if (!$(".main-slider-carousel .act").next().length) {
				$(".main-slider-carousel .jcarousel-next").click();
			} else {
				$(".main-slider-carousel .jcarousel").jcarousel("scroll", $(".main-slider-carousel .act").prevAll().length);
			}
    });
    
    slider.find(".cases-button").click(function() {
      $(this).fadeOut(250);
      nextBtn.show();
      prevBtn.show();
      slider.find(".main-slider-carousel li").eq(1).click();
      mainSliderMakeup();
    });
    
  }
})( jQuery );

(function( $ ) {
  $.fn.simpleSlider = function(options) {
    var slider = $(this);
    
    if (!slider.parents(".simple-slider").length) {
      slider.css("width",options.width);
      // slider.css("height",options.height);
      slider.wrap("<div class='simple-slider' />");
      slider.children().each(function() {
        $(this).wrap("<div class='slide'><div class='pic-wrapper'><div class='pic' style='width:"+options.width+"px;'></div></div></div>")
        if (options.showtitles && $(this).attr("title")) {
          $(this).parents(".slide").append("<div class='img-descr'>"+$(this).attr("title")+"</div>")
        }
      });
      var items = $(this).children("div.slide");
      
      var sliderSize = items.length;
      
      items.each(function() {
        $(this).addClass("slide").attr("index",$(this).index());
        imgMarginTop = -$(this).find("img").height()/2+options.height/2;
        if (imgMarginTop > 0) imgMarginTop = 0;
        $(this).find("img").css("margin-top",imgMarginTop).after("<div class='pic-mask' />");
        if ($(this).find("img").hasClass("noframe")) {
          $(this).find(".pic-mask").hide();
        }
      });
      
      items.hide();
      items.eq(0).addClass("current").show();
      
      items.eq(0).find("img").load(function() {
        slider.css("height",items.eq(0).find("img").height());
      });
      
      
      if (sliderSize > 1) {
        slider.after("<div class='next' />");
        slider.after("<div class='prev' />");
      }
      
      // slider.find(".pic-mask").css("width",options.width-20)
      // slider.find(".pic-mask").css("height",options.height-20)
      
      var prevBtn = slider.parents(".simple-slider").find(".prev");
      var nextBtn = slider.parents(".simple-slider").find(".next");
      
      prevBtn.css("top",options.height/2-24)
      nextBtn.css("top",options.height/2-24)
      
      nextBtn.click(function() {
        curIndex = parseInt(slider.find(".current").attr("index"))
        if (curIndex < sliderSize-1) {
          curIndex++;
          items.eq(curIndex-1).fadeOut(250).removeClass("current");
          items.eq(curIndex).fadeIn(250).addClass("current");
          slider.css("height",items.eq(curIndex).height());
        } else {
          items.eq(curIndex).fadeOut(250).removeClass("current");
          items.eq(0).fadeIn(250).addClass("current");
          slider.css("height",items.eq(0).height());
        }
        imgMarginTop = -items.eq(curIndex).find("img").height()/2+slider.height/2;
        if (imgMarginTop > 0) imgMarginTop = 0;
        items.eq(curIndex).find("img").css("margin-top",imgMarginTop);
      });
      
      prevBtn.click(function() {
        curIndex = parseInt(slider.find(".current").attr("index"))
        if (curIndex > 0) {
          curIndex--;
          items.eq(curIndex+1).fadeOut(250).removeClass("current");
          items.eq(curIndex).fadeIn(250).addClass("current");
          slider.css("height",items.eq(curIndex).height());
        } else {
          items.eq(curIndex).fadeOut(250).removeClass("current");
          items.eq(sliderSize-1).fadeIn(250).addClass("current");
          slider.css("height",items.eq(sliderSize-1).height());
        }
        imgMarginTop = -items.eq(curIndex).find("img").height()/2+slider.height/2;
        if (imgMarginTop > 0) imgMarginTop = 0;
        items.eq(curIndex).find("img").css("margin-top",imgMarginTop);
      });
    
    }
    
  };
})( jQuery );

(function( $ ) {
  $.fn.customSelect = function() {
    var selects = $(this);
    selects.each(function () {
      var select = $(this);
      
      if (!$(this).next(".param-selector").length) {
        select.css("visibility","hidden").css("position","absolute").css("z-index","-1");
        select.after("<div class='param-selector' id='" + select.attr("id") + "-selector'>");
        var selector = select.next(".param-selector");
        
        if (select.is(":disabled")) {
          selector.addClass("selector-disabled")
        }
        
        
        selector.append("<div class='param-sel' />").append("<div class='dropdown' />");
        var dropdown = selector.find(".dropdown");
        // dropdown.append("<div class='top-border' />");
        var paramSel = selector.find(".param-sel");
        paramSel.addClass("initial");
        paramSel.append("<div class='arr' />");
        paramSel.append("<div class='sel-value' />");
        
        if (select.find("option[value=" + select.val() + "]").attr("flag")) {
          paramSel.find(".sel-value").html("<img src='" + select.find("option[value=" + select.val() + "]").attr("flag") + "' />" + select.find("option[value=" + select.val() + "]").html());
        } else {
          paramSel.find(".sel-value").html(select.find("option[value=" + select.val() + "]").html());
        }
        
        select.find("option").each(function () {
          if ($(this).attr("flag")) {
            var flag = "<img src=" + $(this).attr("flag") + " />";
          } else {
            flag = "";
          }
          if ($(this).val() != select.val()/* || select.attr("ttl")*/) {
            dropdown.append("<div val='" + $(this).attr("value") + "'>" + flag + $(this).html() + "</div>");
          } else {
            dropdown.append("<div style='display:none' val='" + $(this).attr("value") + "'>" + flag + $(this).html() + "</div>");
          }
        });
      
      
        paramSel.click(function() {
          if (!select.is(":disabled")) {
            if (dropdown.css("display") != "block") {
              $(".dropdown").fadeOut(150);
              $(".param-open").removeClass("param-open");
              dropdown.fadeIn(150);
              selector.addClass("param-open");
              var maxWidth = 0;
              
              // $(this).parents(".form-item").prevAll(".form-item").css("z-index","6000");
              // $(this).parents(".form-item").css("z-index","6001");
              // $(this).parents(".form-item").nextAll(".form-item").css("z-index","6000");
              
              dropdown.find("div").each(function () {
                if ($(this).width() >= maxWidth) {
                  maxWidth = $(this).width();
                }
                if (paramSel.width() >= maxWidth) {
                  maxWidth = paramSel.width() + 1;
                }
              });
              
              //paramSel.css("width", maxWidth + "px");
              // dropdown.find("div").css("width", maxWidth + "px");
              // dropdown.css("width", maxWidth);
              
              // ddOverflow = $("html").height() - (dropdown.offset().top + dropdown.height());
              // if (ddOverflow < 0) {
                // dropdown.css("margin-top", -30 - dropdown.height());
              // }
              
              //dropdown.css("top",paramSel.position().top + paramSel.height());
              
            } else {
              dropdown.fadeOut(150);
              selector.removeClass("param-open");
            }
          }
        });
        
        dropdown.find("div").click(function () {
          selector.removeClass("param-sel-error");
          paramSel.removeClass("initial");
          var div = $(this);
          paramSel.find(".sel-value").html($(this).html());
          if ($(this).attr("flag")) {
            paramSel.find(".sel-value").attr("flag",$(this).attr("flag"));
          }
          select.val($(this).attr("val")).change();
          if (select.hasClass("hide-ttl")) {
            //select.find("option[value='']").remove();
            dropdown.find("div[val='']").remove();
          }
          dropdown.fadeOut(150, function () {
            dropdown.find("div").show().removeClass("selected");
            div.addClass("selected");
            div.parents(".param-open").removeClass("param-open");
          });
          if ($(this).attr("val")) {
            selector.parents(".form-item").find(".error-wrapper").remove();
          }
        });
      
      }
    });
    
  };
})( jQuery );

(function( $ ) {

  $.fn.teamSlider = function(options) {
    var slider = $(this);
      
      var items = $(this).children("div.slide");
      
      items.wrapAll("<div class='slides' />")
      
      var sliderSize = items.length;
      
      items.each(function() {
        $(this).addClass("slide").attr("index",$(this).index());
      });
      
      items.hide();
      items.eq(0).addClass("current").show();
      
      slider.append("<div class='team-carousel fc'><ul class='jcarousel'></ul></div>");
      
      var sliderCarousel = slider.find(".jcarousel");
      
      for (i=0;i<items.length;i++) {
        sliderCarousel.append("<li><div class='cont'><div class='pic'><img src='" + items.eq(i).find("img.userpic").attr("src") + "' /><div class='pic-mask'></div></div><div class='descr'><div class='name'>"+items.eq(i).find("h2").html()+"</div><div class='state'>"+items.eq(i).find(".state").html()+"</div></div></div></li>")
      }
      
      var carouselItems = sliderCarousel.find("li");
      
      carouselItems.first().addClass("act")
      
      sliderCarousel.jcarousel({
        scroll:4
      });
      
      sliderCarousel.find("li").click(function() {
        if (!$(this).hasClass("act")) {
          sliderCarousel.find("li").removeClass("act");
          $(this).addClass("act")
        }
        slider.find(".current").fadeOut(250).removeClass("current");
        slider.find(".slide").eq($(this).prevAll("li").length).fadeIn(250).addClass("current")
      });
      
  };
})( jQuery );

(function( $ ) {

  $.fn.placesSlider = function(options) {
    var slider = $(this);
      
      var items = $(this).children("div.slide");
      
      items.wrapAll("<div class='slides' />")
      
      var sliderSize = items.length;
      
      items.each(function() {
        $(this).addClass("slide").attr("index",$(this).index());
      });
      
      items.hide();
      items.eq(0).addClass("current").show();
      
      slider.append("<div class='places-carousel fc'><ul class='jcarousel'></ul></div>");
      
      var sliderCarousel = slider.find(".jcarousel");
      
      for (i=0;i<items.length;i++) {
        sliderCarousel.append("<li><div class='cont'><div class='pic'><img src='" + items.eq(i).find("img.tmb").attr("src") + "' /><div class='pic-mask'></div></div><div class='descr'><div class='name'>"+items.eq(i).find("h2 a").html()+"</div></div></div></li>")
      }
      
      var carouselItems = sliderCarousel.find("li");
      
      carouselItems.first().addClass("act")
      
      sliderCarousel.jcarousel({
        scroll:4
      });
      
      sliderCarousel.find("li").click(function() {
        if (!$(this).hasClass("act")) {
          sliderCarousel.find("li").removeClass("act");
          $(this).addClass("act")
        }
        slider.find(".current").fadeOut(250).removeClass("current");
        slider.find(".slide").eq($(this).prevAll("li").length).fadeIn(250).addClass("current")
      });
      
  };
})( jQuery );

(function( $ ) {

  $.fn.caseSlider = function(options) {
    var slider = $(this);
    
      slider.find(".slide").each(function() {
        $(this).html("<div class='pic-wrapper'><div class='pic'>"+$(this).html()+"</div></div></div>")
      });
      
      var items = $(this).children("div.slide");
      
      items.wrapAll("<div class='slides' />");
      
      var sliderSize = items.length;
      
      items.each(function() {
        $(this).attr("index",$(this).index());
      });
      
      items.hide();
      items.eq(0).addClass("current").show();
      
      slider.append("<div class='gallery-carousel fc'><ul class='jcarousel'></ul></div>");
      
      var sliderCarousel = slider.find(".jcarousel");
      
      for (i=0;i<items.length;i++) {
        if (!items.eq(i).find(".case-video").length) {
          sliderCarousel.append("<li><div class='cont'><img src='" + items.eq(i).find("img").attr("src") + "' /></div></li>")
        } else {
          sliderCarousel.append("<li><div class='cont'><img src='" + items.eq(i).find(".tmb img").attr("src") + "' /></div><div class='ttl'>"+items.eq(i).find(".ttl").html()+"</div></li>")
        }
      }
      
      var carouselItems = sliderCarousel.find("li");
      
      carouselItems.first().addClass("act")
      
      sliderCarousel.jcarousel({
        scroll:4,
        initCallback:galleryInit
      });
      
      sliderCarousel.find("li").click(function() {
        if (!$(this).hasClass("act")) {
          sliderCarousel.find("li").removeClass("act");
          $(this).addClass("act")
        }
        slider.find(".current").fadeOut(250).removeClass("current");
        slider.find(".slide").eq($(this).prevAll("li").length).fadeIn(250).addClass("current")
      });
      
  };
})( jQuery );


(function( $ ) {

  $.fn.simpleGallery = function(options) {
    var slider = $(this);
    
      var srcArray = new Array();
      
      for (i=0;i<slider.find("img").length;i++) {
        srcArray[i] = slider.find("img").eq(i).attr("src");
      }
      
      
      slider.children().each(function() {
        $(this).wrap("<div class='slide'><div class='pic-wrapper'><div class='pic'></div></div></div>")
      });
      var items = $(this).find("div.slide");
      
      items.wrapAll("<div class='slides' />")
      
      var sliderSize = items.length;
      
      items.each(function() {
        $(this).addClass("slide").attr("index",$(this).index());
      });
      
      items.hide();
      items.first().addClass("current").show();
      
      slider.append("<div class='gallery-carousel fc'><ul class='jcarousel'></ul></div>");
      
      var sliderCarousel = slider.find(".jcarousel");
      
      
      
      for (i=0;i<items.length;i++) {
        sliderCarousel.append("<li><div class='cont'><img src='" + srcArray[i] + "' /></div></li>")
      }
      
      var carouselItems = sliderCarousel.find("li");
      
      carouselItems.first().addClass("act")
      
      sliderCarousel.jcarousel({
        scroll:4,
        initCallback:galleryInit
      });
      
      sliderCarousel.find("li").click(function() {
        if (!$(this).hasClass("act")) {
          sliderCarousel.find("li").removeClass("act");
          $(this).addClass("act")
        }
        slider.find(".current").fadeOut(250).removeClass("current");
        slider.find(".slide").eq($(this).prevAll("li").length).fadeIn(250).addClass("current")
      });
      
  };
})( jQuery );

function galleryInit(carousel,state) {
  carousel.list.parents(".jcarousel-clip").wrap("<div class='extra-wrapper' />")
}

function sliderCarouselInit(carousel,state) {
  // carousel.list.find(".jcarousel-item").css("width","auto");
}

(function( $ ) {

  $.fn.photoSlider = function(options) {
    var slider = $(this);
    
      slider.children().each(function() {
        $(this).wrap("<div class='slide'></div>")
      });
      
      var items = $(this).children("div.slide");
      
      items.wrapAll("<div class='slides' />")
      
      var sliderSize = items.length;
      
      items.each(function() {
        $(this).addClass("slide").attr("index",$(this).index());
      });
      
      items.hide();
      items.eq(0).addClass("current").show();
      
      slider.append("<div class='slider-next' />");
      slider.append("<div class='slider-prev' />");
      
      var nextBtn = slider.find(".slider-next");
      var prevBtn = slider.find(".slider-prev");
      
      nextBtn.click(function() {
        curIndex = parseInt(slider.find(".current").attr("index"))
        if (curIndex < sliderSize-1) {
          curIndex++;
          items.eq(curIndex-1).fadeOut(250).removeClass("current");
          items.eq(curIndex).fadeIn(250).addClass("current");
          slider.css("height",items.eq(curIndex).height());
        } else {
          items.eq(curIndex).fadeOut(250).removeClass("current");
          items.eq(0).fadeIn(250).addClass("current");
          slider.css("height",items.eq(0).height());
        }
        imgMarginTop = -items.eq(curIndex).find("img").height()/2+options.height/2;
        if (imgMarginTop > 0) imgMarginTop = 0;
        items.eq(curIndex).find("img").css("margin-top",imgMarginTop);
      });
      
      prevBtn.click(function() {
        curIndex = parseInt(slider.find(".current").attr("index"))
        if (curIndex > 0) {
          curIndex--;
          items.eq(curIndex+1).fadeOut(250).removeClass("current");
          items.eq(curIndex).fadeIn(250).addClass("current");
          slider.css("height",items.eq(curIndex).height());
        } else {
          items.eq(curIndex).fadeOut(250).removeClass("current");
          items.eq(sliderSize-1).fadeIn(250).addClass("current");
          slider.css("height",items.eq(sliderSize-1).height());
        }
        imgMarginTop = -items.eq(curIndex).find("img").height()/2+options.height/2;
        if (imgMarginTop > 0) imgMarginTop = 0;
        items.eq(curIndex).find("img").css("margin-top",imgMarginTop);
      });
      
  };
})( jQuery );

(function( $ ) {

  $.fn.commonSlider = function() {
      var slider = $(this);
    
      var items = $(this).find("div.slide");
      
      var sliderSize = items.length;
      
      items.each(function() {
        $(this).addClass("slide").attr("index",$(this).index());
      });
      
      items.hide();
      items.eq(0).addClass("current").show();
      
      slider.append("<div class='slider-next' />");
      slider.append("<div class='slider-prev' />");
      
      var nextBtn = slider.find(".slider-next");
      var prevBtn = slider.find(".slider-prev");
      
      nextBtn.click(function() {
        curIndex = parseInt(slider.find(".current").attr("index"))
        if (curIndex < sliderSize-1) {
          curIndex++;
          items.eq(curIndex-1).hide().removeClass("current");
          items.eq(curIndex).fadeIn(250).addClass("current");
          slider.css("height",items.eq(curIndex).height());
        } else {
          items.eq(curIndex).hide().removeClass("current");
          items.eq(0).fadeIn(250).addClass("current");
          slider.css("height",items.eq(0).height());
        }
      });
      
      prevBtn.click(function() {
        curIndex = parseInt(slider.find(".current").attr("index"))
        if (curIndex > 0) {
          curIndex--;
          items.eq(curIndex+1).hide().removeClass("current");
          items.eq(curIndex).fadeIn(250).addClass("current");
          slider.css("height",items.eq(curIndex).height());
        } else {
          items.eq(curIndex).hide().removeClass("current");
          items.eq(sliderSize-1).fadeIn(250).addClass("current");
          slider.css("height",items.eq(sliderSize-1).height());
        }
      });
      
  };
})( jQuery );





jQuery.extend(jQuery.validator.messages, {
    required: "Заполните поле!",
    remote: "Please fix this field.",
    email: "Введите правильный e-mail",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

function mainSliderMakeup() {
  if ($(".main-slider").length) {
    $(".main-slider .cases-button").css("margin-right",0)
    var casesButtonOverflow = $(window).width() - $(".main-slider .cases-button").offset().left - $(".main-slider .cases-button").width()
    if (casesButtonOverflow < 10) {
      $(".main-slider .cases-button").css("margin-right",20 - casesButtonOverflow)
      if ((20 - casesButtonOverflow) > 178) {
        $(".main-slider .cases-button").css("margin-right",178)
      }
    }
    
    $(".main-slider .slider-next").css("margin-right",0)
    var casesNextOverflow = $(window).width() - $(".main-slider .slider-next").offset().left - $(".main-slider .slider-next").width()
    if (casesNextOverflow < 10) {
      $(".main-slider .slider-next").css("margin-right",10 - casesNextOverflow)
      if ((10 - casesNextOverflow) > 60) {
        $(".main-slider .slider-next").css("margin-right",60)
      }
    }
    
    $(".main-slider .slider-prev").css("margin-left",0)
    var casesPrevOverflow = $(".main-slider .slider-prev").offset().left;
    if (casesPrevOverflow < 10) {
      $(".main-slider .slider-prev").css("margin-left",10 - casesPrevOverflow)
      if ((10 - casesPrevOverflow) > 60) {
        $(".main-slider .slider-prev").css("margin-left",60)
      }
    }
    
  }
}

function elementLoader(element,loaderBg) {
  var el = element;
  if (!$(".element-loader[rel='"+elementId+"']").length) {
    $("body").append("<div class='element-loader' rel='"+elementId+"'></div>");
    var loader = $(".element-loader[rel='"+elementId+"']");
    loader.css({
      "left":el.offset().left,
      "top":el.offset().top,
      "width":el.width(),
      "height":el.height()
    }).append("<div class='loader-bg' />").append("<div class='loader-pic' />");
    loader.find(".loader-bg").css("background-color",loaderBg)
  }
}

function removeLoader(element,loaderBg) {
  var el = element;
  if (!$(".element-loader[rel='"+elementId+"']").length) {
    var loader = $(".element-loader[rel='"+elementId+"']");
    loader.remove();
  }
}