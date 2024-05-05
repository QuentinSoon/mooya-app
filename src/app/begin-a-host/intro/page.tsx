import { Button } from '@/library/button';
import MESSAGES from '@/utils/messages.json';
import { createClient } from '@/utils/supabase/server';

export default async function Page() {
	const supabase = createClient();
	const owner_id = (await supabase.auth.getUser()).data.user?.id;
	const { data: rooms } = await supabase
		.from('rooms')
		.select('*')
		.eq('owner_id', owner_id);
	console.log(rooms);
	return (
		<div className="flex flex-col space-y-6 w-96">
			<div className="flex flex-col space-y-4 w-96">
				<div className="font-medium text-xl text-[--color-basic-900]">
					{MESSAGES.CREATE_NEW_HOST}
				</div>
				<Button
					fullWidth
					variant="outline"
					className="h-16 text-base text-left"
					contentFullWidth
					startContent={
						<div className="bg-[--color-basic-200] rounded-lg h-8 w-8 flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
								<polyline points="9 22 9 12 15 12 15 22" />
							</svg>
						</div>
					}
				>
					Ajouter un nouveau logement
				</Button>
			</div>
			<div className="flex flex-col space-y-4 w-96">
				<div className="font-medium text-xl text-[--color-basic-900]">
					{MESSAGES.HOST_NOT_COMPLET}
				</div>
				{rooms?.map((room) => (
					<Button
						key={room.id}
						fullWidth
						variant="outline"
						className="h-16 text-base text-left"
						contentFullWidth
						startContent={
							<div className="bg-[--color-basic-200] rounded-lg h-8 w-8 flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
									<polyline points="9 22 9 12 15 12 15 22" />
								</svg>
							</div>
						}
					>
						{room.title}
					</Button>
				))}
			</div>
		</div>
	);
}
