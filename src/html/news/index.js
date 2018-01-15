require('cssDir/news/index.css')

const swiper = new Swiper('.swiper-banner', {
	direction: 'vertical',
	loop: true,
	pagination: {
		el: '.pagination-banner',
		clickable: true,
	},
})
