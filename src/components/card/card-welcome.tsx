import { Card } from '@/library/card';

export const CardWelcomeServer = ({ firstname }: { firstname: string }) => {
	return (
		<Card className="py-14 px-60 w-full bg-gradient-to-r from-indigo-800 to-pink-600 flex flex-col justify-center gap-4 rounded-none">
			<h3 className="font-medium text-left text-white text-2xl">
				{!firstname ? 'Bonjour,' : `Bonjour ${firstname},`}
			</h3>
			<div className="inline-flex gap-5">
				{DEBUG.map((item, index) => (
					<button
						key={index}
						className="relative bg-white drop-shadow hover:bg-neutral-100 w-fit h-16 rounded-2xl p-4 min-w-64 text-left overflow-hidden"
					>
						<div className="flex flex-row items-center h-full gap-4">
							<span className="">{item.icon}</span>
							<span className="grow">{item.title}</span>
						</div>
					</button>
				))}
			</div>
		</Card>
	);
};

const DEBUG = [
	{
		title: 'Test',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
			</svg>
		),
	},
	{
		title: 'Test2',
	},
];
