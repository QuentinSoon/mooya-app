import { Section } from '@/library/section';
import type { Meta } from '@storybook/react';
import { SectionActiveFolders } from './section-active-folders';

export default {
	title: 'Components/Section',
	component: Section,
	parameters: {
		layout: 'centered',
	},
	decorators: [(Story) => <Story />],
} as Meta<typeof Section>;

export const ActiveFolder = () => SectionActiveFolders();
