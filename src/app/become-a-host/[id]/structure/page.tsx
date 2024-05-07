import { StructureSchema } from '@/classes/Structure.class';
import { Button } from '@/library/button';
import { Icon } from '@/library/icon';
import { createClient } from '@/utils/supabase/server';
import { icons } from 'lucide-react';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
	const supabase = createClient();
	const { data: structure } = await supabase.from('structure').select('*');
	if (!structure) redirect('/become-a-host');

	const parsedStructure = StructureSchema.parse(structure);

	if (!parsedStructure) redirect('/become-a-host');

	return (
		<div className="relative grid grid-cols-2 h-screen">
			<div className="relative bg-gradient-to-b from-pink-700 to-purple-700">
				<div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2">
					<div className="font-semibold text-4xl text-white w-[35rem]">
						Quel type de location allez-vous proposer ?
					</div>
				</div>
			</div>
			<div className="flex flex-col">
				<div className="border-b h-20 flex flex-row items-center justify-between px-8">
					<Button variant="ghost">Question?</Button>
					<Button variant="light" color="berry">
						Quitter
					</Button>
				</div>
				<div className="grow flex flex-col gap-20 items-center justify-center m-auto w-[32rem]">
					<div className="flex flex-col space-y-4 w-full">
						<div className="font-medium text-xl text-[--color-basic-800] text-left">
							Quel type de bien souhaitez-vous louer ?
						</div>
						<div className="flex flex-col space-y-4">
							{parsedStructure.map((structure, index) => (
								<Button
									key={index}
									fullWidth
									contentFullWidth
									size="lg"
									variant="outline"
									startContent={
										<Icon name={structure.icon as keyof typeof icons} />
									}
									className="h-16 font-medium"
								>
									{structure.title}
								</Button>
							))}
						</div>
					</div>
				</div>
				<div className="border-t h-20 flex flex-row items-center justify-between px-8">
					<Button variant="light" className="underline">
						Retour
					</Button>
					<Button>Suivant</Button>
				</div>
			</div>
		</div>
	);
}
