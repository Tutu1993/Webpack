require('cssDir/index/index.css')

const log = console.log.bind(console)

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

const listArray = ["", "list-1", "list-2", "list-3", "list-4"]
const shopArray = ["", "江苏省昆山市周庄景区店", "北京市定福庄店", "上海市三林地铁站店", "江苏省昆山市昆山大戏院店"]
const coverflow = new Swiper('.swiper-coverflow', {
	effect: 'coverflow',
	slidesPerView: 4,
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
	// autoplay: {
	// 	delay: 5000,
	// 	disableOnInteraction: false,
	// },
	on: {
		transitionEnd: function(){
			const id = document.querySelector(".swiper-coverflow .swiper-slide-active").children[0].classList[0]

			document.querySelector("#shop-id").innerHTML = shopArray[listArray.indexOf(id)]
		},
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
