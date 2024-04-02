import type { Meta } from '@storybook/react';
import { Navbar, NavbarCenter, NavbarLeft, NavbarProps, NavbarRight } from '.';
import { Button } from '../button';
import {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownTrigger,
} from '../dropdown';

export default {
	title: 'Library/Navbar',
	component: Navbar,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [(Story) => <Story />],
} as Meta<typeof Navbar>;

export const Default = (props: NavbarProps) => (
	<Navbar>
		<NavbarLeft>
			<Dropdown placement="bottom-left">
				<DropdownTrigger>
					<Button>Dropdown Left</Button>
				</DropdownTrigger>
				<DropdownContent>
					<DropdownItem>Acocunt</DropdownItem>
				</DropdownContent>
			</Dropdown>
		</NavbarLeft>
		<NavbarCenter>
			<Dropdown placement="bottom">
				<DropdownTrigger>
					<Button>Dropdown Center</Button>
				</DropdownTrigger>
				<DropdownContent>
					<DropdownItem>Acocunt</DropdownItem>
				</DropdownContent>
			</Dropdown>
		</NavbarCenter>
		<NavbarRight>
			<Dropdown placement="bottom-right">
				<DropdownTrigger>
					<Button>Dropdown Right</Button>
				</DropdownTrigger>
				<DropdownContent>
					<DropdownItem>Acocunt</DropdownItem>
				</DropdownContent>
			</Dropdown>
		</NavbarRight>
	</Navbar>
);
