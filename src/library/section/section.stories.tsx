import type { Meta } from '@storybook/react';
import { Section, SectionProps } from '.';

export default {
	title: 'Library/Section',
	component: Section,
	tags: ['autodocs'],
	decorators: [(Story) => <Story />],
} as Meta<typeof Section>;

export const Default = (props: SectionProps) => <Section {...props} />;
