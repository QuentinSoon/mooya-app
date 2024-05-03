'use client';

import { RoomsType } from '@/classes/Rooms.class';
import { Mapbox } from '@/library/mapbox';
import { SectionRooms } from '../section-rooms';

export const SectionRoomsMap = ({ rooms }: { rooms: RoomsType }) => {
	return (
		<SectionRooms title="Ou se situe le logement">
			<Mapbox
				location={{
					lat: rooms.location[0] ?? 0,
					lng: rooms.location[1] ?? 0,
				}}
				className="w-full h-96 rounded-2xl overflow-hidden"
			/>
			<div className="flex flex-col">
				<div className="font-semibold text-base text-left text-[--color-basic-900]">
					Nantes, Pays-de-la-Loire, France
				</div>
				<div className="font-normal text-sm text-left text-[--color-basic-600]">
					Facile d accès, proche des transports en commun
				</div>
			</div>
		</SectionRooms>
	);
};
