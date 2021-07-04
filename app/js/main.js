$(function () {

  $('.top-slider__items').slick({
    dots: true,
    arrows: false
  });

  $('.partners__items').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false
  });


  var containerEl1 = document.querySelector('[data-ref="products-week"]');
  var containerEl2 = document.querySelector('[data-ref="design"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});