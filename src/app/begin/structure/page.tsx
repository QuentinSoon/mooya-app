import { createClient } from '@/utils/supabase/server';

export default async function Page() {
	const supabase = createClient();
	const { data: structure } = await supabase.from('structure').select('*');
	return (
		<div className="flex flex-col space-y-6 w-64">
			<div className="flex flex-col space-y-4">
				{structure?.map((structure, index) => (
					// <Button
					// 	key={index}
					// 	fullWidth
					// 	variant="outline"
					// 	size="lg"
					// 	className="font-medium h-16"
					// >
					// 	{structure.title}
					// </Button>
					<div
						key={index}
						className="relative cursor-pointer bg-transparent text-[--color-basic-800] border-2 border-[--color-basic-200] hover:bg-[--color-basic-100] hover:border-[#000000] text-base font-medium rounded-2xl gap-1 p-4"
					>
						{structure.title}
					</div>
				))}
			</div>
		</div>
	);
}
