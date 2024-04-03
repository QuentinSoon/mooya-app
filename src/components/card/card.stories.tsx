import { Card } from '@/library/card';
import type { Meta } from '@storybook/react';
import { CardHost } from './card-host';
import { CardWelcome } from './card-welcome';

export default {
	title: 'Components/Card',
	component: Card,
	parameters: {
		layout: 'padding',
	},
	decorators: [
		(Story) => (
			<div className="flex items-center justify-center w-full h-full">
				<Story />
			</div>
		),
	],
} as Meta<typeof Card>;

export const Host = () => CardHost({});

export const Welcome = () => <div className="w-screen">{CardWelcome({})}</div>;
