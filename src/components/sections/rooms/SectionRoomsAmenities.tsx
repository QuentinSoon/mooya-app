'use client';

import { RoomsType } from '@/classes/Rooms.class';
import { Button } from '@/library/button';
import { SectionRooms } from '../section-rooms';

export const SectionRoomsAmenities = ({ rooms }: { rooms: RoomsType }) => {
	return (
		<SectionRooms title="Ce que propose ce logement">
			<div className="space-y-6">
				<div className={`grid grid-cols-2 gap-8 w-2/4`}>
					{/* {rooms?.test &&
						rooms.test.map((amenity: any, index: number) => (
							<div
								key={index}
								className="flex flex-row space-x-4 justify-start items-center"
							>
								<div className="flex flex-col">
									<Icon
										name={amenity.amenities.icon_id ?? 'TriangleAlert'}
										size={24}
										color="currentColor"
									/>
								</div>
								<div className="flex flex-col space-y-0.5 w-full text-base font-medium text-[--color-basic-900] text-left">
									{amenity.amenities.title ?? 'Error'}
								</div>
							</div>
						))} */}
				</div>
			</div>
			<Button size="md" className="w-fit" variant="outline">
				Voir les 0 équipements
			</Button>
		</SectionRooms>
	);
};
