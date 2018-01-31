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

	if (!/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/.test(form.get('name'))) {
		alert('请确认为姓名为中文')
		return
	}
	if (form.get('phone') === '') {
		alert('请确认手机号不为空')
		return
	}
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
				if (data.code === 0) {
					alert('信息提交成功')
				} else {
					alert('信息提交失败，请联系管理员')
				}
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
