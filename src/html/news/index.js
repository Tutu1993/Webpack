require('cssDir/news/index.css')

document.querySelectorAll(".gn-item")[3].classList.add("active")

const swiper = new Swiper('.swiper-banner', {
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	direction: 'vertical',
	loop: true,
	pagination: {
		el: '.pagination-banner',
		clickable: true,
	},
})
