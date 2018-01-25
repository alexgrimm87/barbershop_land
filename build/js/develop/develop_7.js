//Begin Hairdressers Slider
function hairdressersSlider(selector, slide){
  $(selector).slick({
    slidesToShow: slide,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 823,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 559,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });
};
//End Hairdressers Slider


//Begin Accessories Slider
function accessoriesSlider(selector, slide){
  $(selector).slick({
    slidesToShow: slide,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1087,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 823,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 559,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });
};
//End Accessories Slider


//Begin Video Slider
function videoSlider(selector, slide){
  $(selector).slick({
    slidesToShow: slide,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1087,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 823,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
};
//End Video Slider


//Begin Members Slider
function membersSlider(selector, slide){
  $(selector).slick({
    slidesToShow: slide,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1087,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 823,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 559,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
};
//End Members Slider


//Begin Video Player
function videoPlayer(selector) {
  $(selector).click(function() {
    $(selector).not($(this)).each(function() {
      if ($(this).find('video').prop('paused') === false) {
        $(this).find('video')[0].pause();
        $(this).find('.video-play').removeClass('pause');
        $(this).removeClass('active');
      }
    });

    if ($(this).find('video')[0].paused === false) {
      $(this).find('video')[0].pause();
      $(this).find('.video-play').removeClass('pause');
      $(this).removeClass('active');
    } else {
      $(this).find('video')[0].play();
      $(this).find('.video-play').addClass('pause');
      $(this).addClass('active');
    }

    return false;
  });
};

function FullScreen(selector) {
  if (selector.requestFullscreen) {
      selector.requestFullscreen();
  } else if (selector.msRequestFullscreen) {
      selector.msRequestFullscreen();
  } else if (selector.mozRequestFullScreen) {
      selector.mozRequestFullScreen();
  } else if (selector.webkitRequestFullscreen) {
      selector.webkitRequestFullscreen();
  }
}
//End Video Player


//Begin Google Map
var map;
var styles = [
  {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#0c0b0b"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
          {
              "color": "#f2f2f2"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.attraction",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "off"
          },
          {
              "color": "#ff0000"
          }
      ]
  },
  {
      "featureType": "poi.attraction",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#000000"
          }
      ]
  },
  {
      "featureType": "poi.attraction",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.business",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#ff0000"
          }
      ]
  },
  {
      "featureType": "poi.business",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#000000"
          }
      ]
  },
  {
      "featureType": "poi.business",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.government",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "saturation": "-100"
          }
      ]
  },
  {
      "featureType": "poi.medical",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "saturation": "-100"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "saturation": "-100"
          },
          {
              "lightness": "30"
          }
      ]
  },
  {
      "featureType": "poi.place_of_worship",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "poi.place_of_worship",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "poi.place_of_worship",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#ff0000"
          }
      ]
  },
  {
      "featureType": "poi.place_of_worship",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.place_of_worship",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "poi.school",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "saturation": "-100"
          }
      ]
  },
  {
      "featureType": "poi.sports_complex",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "saturation": "-100"
          }
      ]
  },
  {
      "featureType": "poi.sports_complex",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#000000"
          }
      ]
  },
  {
      "featureType": "poi.sports_complex",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
          {
              "saturation": -100
          },
          {
              "lightness": 45
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#090909"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit.line",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "weight": "1"
          }
      ]
  },
  {
      "featureType": "transit.station.airport",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "transit.station.rail",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#ff0000"
          },
          {
              "weight": "1"
          }
      ]
  },
  {
      "featureType": "transit.station.rail",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "hue": "#ff0000"
          }
      ]
  },
  {
      "featureType": "transit.station.rail",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "color": "#d4e4eb"
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#d3d3d3"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#9b7f7f"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "color": "#fef7f7"
          }
      ]
  }
];

if( $(window).width() < 935 ) {
  mapCenterY = mapMarkerY;
  mapCenterX = mapMarkerX;
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: mapCenterY, lng: mapCenterX},
    zoom: mapZoom,
    // scrollwheel: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    styles: styles
  });

  var marker = new google.maps.Marker({
    position: {lat: mapMarkerY, lng: mapMarkerX},
    map: map,
    icon: mapMarkerIcon
  });
}
//End Google Map


//Begin Fancybox PopUp
function popUp(selector, width, height) {
  $(selector).fancybox({
    'beforeLoad': function(){
      masterName = $(this.element).closest('.hairdresser-item').find('.hairdresser-title p').text();
    },
    openEffect  : 'fade',
    closeEffect : 'fade',
    autoSize:true,
    width : width,
    height : height,
    maxWidth : '100%',
    wrapCSS:'contact-wrap',
    'closeBtn' : true,
    fitToView:false,
    padding:'0',
    'afterLoad': function(){
      this.content.find("input[name='master']").val(masterName);
    },
    'afterClose': function(){
      this.content.find("input[name='master']").empty();
    },
  });
}
//End Fancybox PopUp


//Begin Icon Hover Gif
function iconHover(selector) {
  $(selector).mouseenter(function(){
    var src = $(this).data("gif");
    $(this).find('img').attr("src", src);
  })
  $(selector).mouseleave(function(){
    var src = $(this).data("png");
    $(this).find('img').attr("src", src);
  })
}
//End Icon Hover Gif


$(document).ready(function(){

  hairdressersSlider('.hairdressers-slider', 3);
  accessoriesSlider('.accessories-slider', 4);  
  videoSlider('.video-slider', 3);
  membersSlider('.members-slider', 5);
  videoPlayer('.video-wrap');
  initMap();
  popUp('.js-contact', 623, 559);
  iconHover('.icon-wrap');

  $('video').dblclick(function() {
    FullScreen($(this)[0]);
  });


  $('#show-more').click(function(e){
    e.preventDefault();

    $.ajax({
        url : ajaxUrl,
        data: {action:'load_photo',dataPage:dataPage},
        method:'POST',
        success : function(data){
          $(this).closest('.gallery-wrap').append(data);
          $(this).remove();
        }
    });
  });

});

$(window).load(function(){

});

$(window).resize(function(){

});