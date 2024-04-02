import type { Meta } from '@storybook/react';
import Image from 'next/image';
import { Modal, ModalProps } from '.';
import { Button } from '../button';
import { Input } from '../input';

export default {
	title: 'Library/Modal',
	component: Modal,
	tags: ['autodocs'],
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
} as Meta<typeof Modal>;

export const Default = ({ open = true, setOpen = () => {} }: ModalProps) => (
	<Modal open={open} setOpen={setOpen} className="w-96">
		<div className="relative rounded-xl overflow-hidden">
			<Image
				src="/assets/welcome.png"
				alt="hero"
				width={400}
				height={400}
				draggable={false}
			/>
			<button
				onClick={() => setOpen(false)}
				className="absolute top-3 right-3 bg-white shadow-lg rounded-full p-5 hover:bg-neutral-200 duration-150"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				>
					<path d="M18 6 6 18" />
					<path d="m6 6 12 12" />
				</svg>
			</button>
		</div>
		<div className="relative p-4 flex flex-col gap-4">
			<div className="flex flex-col gap-0.5">
				<h1 className="text-lg font-medium">Inscription ou connexion</h1>
				<p className="text-sm text-neutral-600 font-normal">
					Vous connecter vous permet d utiliser la plateforme et ses
					fonctionnalités.
				</p>
			</div>
			<div className="flex flex-col gap-2">
				<Input variant="floating" placeholder="Entrez votre adresse email" />
				<Button color="berry" fullWidth>
					Continuer
				</Button>
				<div className="relative my-2 w-full h-px bg-neutral-200">
					<span className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-white uppercase text-xs font-medium px-2 text-[--color-basic-400]">
						OU
					</span>
				</div>
				<Button
					variant="outline"
					fullWidth
					contentFullWidth
					endContent={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							preserveAspectRatio="xMidYMid"
							viewBox="0 0 256 262"
							id="google"
						>
							<path
								fill="#4285F4"
								d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
							></path>
							<path
								fill="#34A853"
								d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
							></path>
							<path
								fill="#FBBC05"
								d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
							></path>
							<path
								fill="#EB4335"
								d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
							></path>
						</svg>
					}
				>
					Continuer avec Google
				</Button>
				<Button
					variant="outline"
					fullWidth
					contentFullWidth
					endContent={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							id="phone"
						>
							<path d="M21.18,2.92H10.82a2.9,2.9,0,0,0-2.9,2.9V26.18a2.9,2.9,0,0,0,2.9,2.9H21.18a2.9,2.9,0,0,0,2.9-2.9V5.82A2.9,2.9,0,0,0,21.18,2.92Zm.74,23.26a.74.74,0,0,1-.74.74H10.82a.74.74,0,0,1-.74-.74V5.82a.74.74,0,0,1,.74-.74H21.18a.74.74,0,0,1,.74.74Z"></path>
							<path d="M17,23.92H15a1.08,1.08,0,0,0,0,2.16h2a1.08,1.08,0,0,0,0-2.16Z"></path>
						</svg>
					}
				>
					Continuer avec un numero de telephone
				</Button>
			</div>
		</div>
	</Modal>
);
