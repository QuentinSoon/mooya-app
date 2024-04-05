import { Card } from '@/library/card';
import type { Meta } from '@storybook/react';
import { CardCandidate } from './card-candidate';
import { CardHost } from './card-host';

export default {
	title: 'Components/Card',
	component: Card,
	parameters: {
		layout: 'centered',
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

export const Candidate = () => <CardCandidate />;
