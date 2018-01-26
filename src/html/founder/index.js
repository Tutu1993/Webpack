require('cssDir/founder/index.css')

document.querySelectorAll(".gn-item")[4].classList.add("active")

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
