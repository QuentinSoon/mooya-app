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

	// const { data: rooms_amenities } = await supabase
	// 	.from('rooms_amenities')
	// 	.select(`*, amenities_id(*)`)
	// 	.eq('rooms_id', params.id);

	// console.log(rooms_amenities);
	console.log(rooms);

	// return null;

	return (
		<div className="page">
			<div className="wrapper-image">
				<button className="image-large"></button>
				<button className="image-top"></button>
				<button className="image-bottom"></button>
			</div>
			<div className="[&>div]:relative py-6 [&>div:not(:last-child)::after]:content-[''] [&>div:not(:last-child)::after]:my-6 [&>div:not(:last-child)::after]:w-full [&>div:not(:last-child)::after]:h-px [&>div:not(:last-child)::after]:bg-[--color-basic-200]">
				<div className="wrapper-informations">
					<div className="informations-title">
						<div>{rooms.structure.title}</div>
						<div>{rooms.privacy.title}</div>
						<div>{rooms.property.title}</div>
					</div>
					<div className="informations-details">
						<div>{rooms.rooms} pièces</div>
						<div>{rooms.bedrooms} chambres</div>
						<div>
							{rooms.surface} m<sup>2</sup>
						</div>
					</div>
				</div>
				<div className="flex flex-col space-y-6">
					<div className="font-semibold text-xl text-[--color-basic-900]">
						Ou se situe le logement
					</div>
					<Mapbox className="w-full h-96 rounded-2xl overflow-hidden" />
					<div>
						<div className="font-semibold text-base text-[--color-basic-900]">
							Nantes, Pays-de-la-Loire, France
						</div>
						<div className="font-normal text-base text-[--color-basic-900]">
							Facile d accès, proche des transports en commun
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
