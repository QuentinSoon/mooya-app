import { RoomsSchema } from '@/classes/Rooms.class';
import { CardCandidate } from '@/components/card/card-candidate';
import { SectionRoomsAbout } from '@/components/sections/rooms/SectionRoomsAbout';
import { SectionRoomsAmenities } from '@/components/sections/rooms/SectionRoomsAmenities';
import { SectionRoomsFlashInfos } from '@/components/sections/rooms/SectionRoomsFlashInfos';
import { SectionRoomsHost } from '@/components/sections/rooms/SectionRoomsHost';
import { SectionRoomsMap } from '@/components/sections/rooms/SectionRoomsMap';
import { SectionRoomsPictureTitle } from '@/components/sections/rooms/SectionRoomsPicturesTitle';
import { SectionRoomsRules } from '@/components/sections/rooms/SectionRoomsRules';
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
		.eq('id', id)
		.single();

	// console.log(rooms);

	return {
		title: rooms.title + ' - Mooya' ?? 'Room',
		description: 'test',
	};
}

export default async function Page({ params }: Props) {
	const supabase = createClient();
	const { data: rooms, error } = await supabase
		.from('rooms')
		.select(`*, privacy(*), structure(*), property(*), owner:users(*)`)
		.eq('id', params.id)
		.single();

	const parsed = RoomsSchema.parse(rooms);

	console.log(parsed);

	return (
		<div className="page">
			<div className="page-wrapper">
				<SectionRoomsPictureTitle rooms={parsed} />
				<SectionRoomsFlashInfos rooms={parsed} />
				<SectionRoomsAbout rooms={parsed} />
				<SectionRoomsAmenities rooms={parsed} />
				<SectionRoomsMap rooms={parsed} />
				<SectionRoomsRules rooms={parsed} />
				<SectionRoomsHost rooms={parsed} />
			</div>
			<CardCandidate
				owner={rooms.owner}
				title={rooms.title}
				description={rooms.description}
			/>
		</div>
	);
}
