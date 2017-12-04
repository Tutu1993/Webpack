require('jsDir/global.js')
require('cssDir/legal/contact.css')

import CitySelector from 'componentDir/CitySelector.js'

ReactDOM.render(
	<CitySelector />,
	document.querySelector('#city-selector')
)

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
