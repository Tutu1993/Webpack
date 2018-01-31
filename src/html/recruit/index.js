require('cssDir/recruit/index.css')

document.querySelectorAll(".gn-item")[1].classList.add("active")

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

function fetchDemo() {
    const form = new FormData(document.querySelector('#form-contact'))

    fetch('http://zero.puziapp.com.cn/investment/add', {
        method: 'POST',
        body: form,
    })
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status)
                return
            }

            // Examine the text in the response
            response.json().then(function(data) {
				console.log(JSON.stringify(data))
            })
        })
        .catch(function(err) {
            console.log('Fetch Error :-S', err)
        })
}

const submit = document.querySelector('#form-submit')

submit.addEventListener('click', function(){
	fetchDemo()
})
