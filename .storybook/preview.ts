import type { Preview } from '@storybook/react';

import 'mapbox-gl/dist/mapbox-gl.css';
import '../src/app/globals.scss';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
