'use client';

import { RoomsType } from '@/classes/Rooms.class';
import { Section } from '@/library/section';

export const SectionRoomsPictureTitle = ({ rooms }: { rooms: RoomsType }) => {
	return (
		<Section className="flex flex-col gap-6">
			<div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-96">
				<div
					className="col-span-2 row-span-2 bg-purple-500 rounded-l-3xl bg-cover bg-center"
					style={{
						backgroundImage: `url(${rooms.picture1})`,
					}}
				></div>
				<div
					className="bg-purple-500 rounded-tr-3xl bg-cover bg-center"
					style={{
						backgroundImage: `url(${rooms.picture2})`,
					}}
				></div>
				<div
					className="bg-purple-500 rounded-br-3xl bg-cover bg-center"
					style={{
						backgroundImage: `url(${rooms.picture3})`,
					}}
				></div>
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
		</Section>
	);
};
