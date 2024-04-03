import { Modal } from '@/library/modal';
import type { Meta } from '@storybook/react';
import { ModalLogin } from './login-modal';

export default {
	title: 'Components/Modal',
	component: Modal,
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [(Story) => <Story />],
} as Meta<typeof Modal>;

export const Login = () => ModalLogin({ open: true, setOpen: () => {} });
