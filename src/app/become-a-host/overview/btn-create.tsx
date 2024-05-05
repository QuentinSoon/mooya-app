'use client';

import { Button } from '@/library/button';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export const BtnCreate = () => {
	const supabase = createClient();
	const router = useRouter();

	const createHost = async () => {
		console.log('createHost');
		const { data, error } = await supabase
			.from('rooms')
			.insert([{ owner_id: (await supabase.auth.getUser()).data.user?.id }])
			.select();
		if (error) return console.error(error);
		if (data) {
			router.replace(`/become-a-host/${data[0].id}/structure`, {
				scroll: false,
			});
		}
	};
	return (
		<Button
			fullWidth
			variant="outline"
			className="h-16 text-base text-left"
			contentFullWidth
			onClick={() => createHost()}
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
	);
};
