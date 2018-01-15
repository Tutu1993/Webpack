require('cssDir/recruit/index.css')

const swiper = new Swiper('.swiper-banner', {
	direction: 'vertical',
	loop: true,
	pagination: {
		el: '.pagination-banner',
		clickable: true,
	},
})

function fetchDemo() {
    const form = new FormData(document.querySelector('#form-contact'))

    fetch('/interface/post.php', {
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
				console.log(data)
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
