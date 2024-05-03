'use client';

import { RoomsType } from '@/classes/Rooms.class';
import { Icon } from '@/library/icon';
import { Section } from '@/library/section';

export const SectionRoomsFlashInfos = ({ rooms }: { rooms: RoomsType }) => {
	return (
		<Section className="flex flex-row items-center gap-4">
			<div>
				<Icon name={'DoorOpen'} size={24} color="currentColor" />
			</div>
			<div className="flex flex-col">
				<div className="font-semibold text-base text-left text-[--color-basic-900]">
					Disponible dès maintenant
				</div>
				<div className="font-normal text-sm text-left text-[--color-basic-600]">
					Le logement est disponible dès maintenant, candidater pour enmenager
					rapidement!
				</div>
			</div>
		</Section>
	);
};
