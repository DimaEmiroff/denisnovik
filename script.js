document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-slider', {
    interval: number = 1800,
    pauseOnFocus: boolean = true,
    resetProgress: boolean = true,
    type: string = 'slider',
    arrows: boolean  = true,
    autoHeight: boolean = true,
    focus    : 'center',
    autoplay: true,
    cover: false,    
    rewind: boolean = true,
    perPage: number = 1,
    pauseOnHover: boolean = true,
    
  }).mount();
});

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#card-slider', {   
    resetProgress: boolean = true,
    type: string = 'slider',
    arrows: boolean  = true,
    autoHeight: boolean = true,
    cover: false,
    rewind: boolean = true,
    perPage: number = 4,
		breakpoints: {
			640: {
				perPage: 8,
			},
		},
  } ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#card-slider-mobile', {   
    resetProgress: boolean = true,
    type: string = 'slider',
    arrows: boolean  = true,
    autoHeight: boolean = true,
    height   : '10rem',
    focus    : 'center',
    
    cover: false,
    rewind: boolean = true,
    perPage: number = 1,
		breakpoints: {
			640: {
				perPage: 1,
			},
		},
  } ).mount();
} );