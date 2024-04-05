import { CardCandidate } from '@/components/card/card-candidate';
import { SectionRooms } from '@/components/sections/section-rooms';
import { Mapbox } from '@/library/mapbox';
import { createClient } from '@/utils/supabase/server';
import { Metadata, ResolvingMetadata } from 'next';
import './page.scss';

type Props = {
	params: { id: string };
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const id = params.id;

	const supabase = createClient();
	const { data: rooms } = await supabase
		.from('rooms')
		.select('*')
		.eq('id', params.id)
		.single();

	return {
		title: rooms.title + ' - Mooya' ?? 'Room',
		description: 'test',
	};
}

export default async function Page({ params }: Props) {
	const supabase = createClient();
	const { data: rooms } = await supabase
		.from('rooms')
		.select(`*, privacy(*), structure(*), property(*)`)
		.eq('id', params.id)
		.single();

	console.log(rooms);

	return (
		<div className="page">
			<div className="page-wrapper">
				<div className="flex flex-col gap-6">
					<div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-96">
						<div className="col-span-2 row-span-2 bg-purple-500 rounded-l-3xl"></div>
						<div className="bg-purple-500 rounded-tr-3xl"></div>
						<div className="bg-purple-500 rounded-br-3xl"></div>
					</div>
					<div>
						<h1 className="font-semibold text-xl text-left text-[--color-basic-900]">
							{rooms.title}
						</h1>
						<div className="font-normal text-sm text-left text-[--color-basic-600]">
							{rooms.structure.title} - {rooms.privacy.title} -{' '}
							{rooms.property.title}
						</div>
					</div>
				</div>
				<div className="flex flex-row items-center gap-4">
					<div>
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
							<path d="M13 4h3a2 2 0 0 1 2 2v14" />
							<path d="M2 20h3" />
							<path d="M13 20h9" />
							<path d="M10 12v.01" />
							<path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z" />
						</svg>
					</div>
					<div className="flex flex-col">
						<div className="font-semibold text-base text-left text-[--color-basic-900]">
							Disponible dès maintenant
						</div>
						<div className="font-normal text-sm text-left text-[--color-basic-600]">
							Le logement est disponible dès maintenant, candidater pour
							enmenager rapidement!
						</div>
					</div>
				</div>
				<SectionRooms title="Ou se situe le logement">
					<Mapbox className="w-full h-96 rounded-2xl overflow-hidden" />
					<div className="flex flex-col">
						<div className="font-semibold text-base text-left text-[--color-basic-900]">
							Nantes, Pays-de-la-Loire, France
						</div>
						<div className="font-normal text-sm text-left text-[--color-basic-600]">
							Facile d accès, proche des transports en commun
						</div>
					</div>
				</SectionRooms>
			</div>
			<CardCandidate title={rooms.title} description={rooms.description} />
		</div>
	);
}
