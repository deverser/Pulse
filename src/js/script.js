/* $(document).ready(function(){
    $('.carousel__inner').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        //adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron_right.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
  }); */

  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    speed: 1000,
    nav: false,
    controls: false,
    autoplayButtonOutput: false,
    rewind: false,
    responsive: {
      480: {
        nav: true,
        navPosition: "bottom"
      },
      767: {
        autoWidth: true,
        nav: true,
        navPosition: "bottom"
      },
      992: {
        items: 1
      }
    }
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });


  $(document).ready(function() {
    $(function() {
      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });


      function toggleCard(item) {
          $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
          });
      }

      toggleCard('.catalog-item__link');
      toggleCard('.catalog-item__back');

    });
  });