require('cssDir/global/normalize.css')
require('cssDir/global/swiper.min.css')
require('cssDir/global/public.css')
require('cssDir/layout/nav.css')
require('cssDir/layout/footer.css')

const url = window.location.href.split('/').reverse()[0]
const urlArray = ["", "recruit", "intro", "news", "founder", "investor"]

if (urlArray.indexOf(url) > 0) {
	document.querySelectorAll(".gn-item")[urlArray.indexOf(url)].classList.add("active")
}
