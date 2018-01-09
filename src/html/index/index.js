require('cssDir/index/index.css')

const log = console.log.bind(console)

const swiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})
