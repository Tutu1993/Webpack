require('cssDir/index/index.css')

const log = console.log.bind(console)

const swiper = new Swiper('.swiper-banner', {
	direction: 'vertical',
	loop: true,
	pagination: {
		el: '.pagination-banner',
		clickable: true,
	},
})

const coverflow = new Swiper('.swiper-coverflow', {
	effect: 'coverflow',
	slidesPerView: 5,
	loop: true,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 60,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows : true,
	},
});
