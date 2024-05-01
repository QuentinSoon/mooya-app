import { createClient } from '@/utils/supabase/server';

export default async function Page() {
	const supabase = createClient();
	const { data: amenities } = await supabase.from('amenities').select('*');
	return (
		<div className="flex flex-col space-y-6 w-96">
			<div className="grid grid-cols-2 gap-4">
				{amenities?.map((amenities, index) => (
					<div
						key={index}
						className="relative cursor-pointer bg-transparent text-[--color-basic-800] border-2 border-[--color-basic-200] hover:bg-[--color-basic-100] hover:border-[#000000] text-base font-medium rounded-2xl gap-1 p-4"
					>
						{amenities.title}
					</div>
				))}
			</div>
		</div>
	);
}
