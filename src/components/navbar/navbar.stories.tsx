import { Navbar } from '@/library/navbar';
import type { Meta } from '@storybook/react';
import { NavbarHome } from './navbar-home';
import { NavbarHosting } from './navbar-hosting';

export default {
	title: 'Components/Navbar',
	component: Navbar,
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [(Story) => <Story />],
} as Meta<typeof Navbar>;

export const Home = () => NavbarHome();

export const Hosting = () => NavbarHosting();
