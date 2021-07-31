
$('.visual').slick({
    dots:true,
    autoplay:true,
    pauseOnHover : true,
    dotsClass : "slick-dots" //점의 css class 지정
}); //JQuery 라이브러리 필요

$(".exhibitions-slide").slick({
    slidesToShow: 3,
    slidesToScroll: 1
  });

$('.new-slider').slick({
slidesToShow: 4,
slidesToScroll: 1
});

$('.best-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1
    });