document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-slider', {
    interval: number = 1800,
    pauseOnFocus: boolean = true,
    resetProgress: boolean = true,
    type: string = 'slider',
    arrows: boolean  = false,
    autoHeight: boolean = true,
    autoplay: true,
    cover: false,
    height : '100rem',
    speed: number = 1600,
    rewind: boolean = true,
    perPage: number = 1,
    pauseOnHover: boolean = true,
    pagination: boolean  = true,
  }).mount();
});
