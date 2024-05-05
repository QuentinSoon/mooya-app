import { createClient } from '@/utils/supabase/server';

export default async function Page() {
	const supabase = createClient();
	const { data: structure } = await supabase.from('structure').select('*');
	console.log(structure);
	return (
		<div>
			<div>Quel est la structure de votre location ?</div>
			{structure?.map((structure, index) => (
				<div
					key={index}
					className="relative cursor-pointer bg-transparent text-[--color-basic-800] border-2 border-[--color-basic-200] hover:bg-[--color-basic-100] hover:border-[#000000] text-base font-medium rounded-2xl gap-1 p-4"
				>
					{structure.title}
				</div>
			))}
		</div>
	);
}
