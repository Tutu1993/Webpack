require('cssDir/global/normalize.css');
require('cssDir/global/public.css');
require('cssDir/layout/nav.css');
require('cssDir/layout/footer.css');
require('cssDir/legal/contact.css');

import CitySelector from 'componentDir/CitySelector.js';

ReactDOM.render(
	<CitySelector />,
	document.querySelector('#city-selector')
);
