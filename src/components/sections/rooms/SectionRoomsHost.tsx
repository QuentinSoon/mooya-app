'use client';

import { RoomsType } from '@/classes/Rooms.class';
import { Button } from '@/library/button';
import { User } from '@/library/user';
import { SectionRooms } from '../section-rooms';

export const SectionRoomsHost = ({ rooms }: { rooms: RoomsType }) => {
	return (
		<SectionRooms>
			<User
				size="lg"
				name={`Proposé par ${rooms.owner.firstname}`}
				avatarProps={{
					src: rooms.owner.avatar_url,
				}}
				// description={`Membre depuis mars 2024 `}
				description={
					<div className="flex flex-row items-center gap-2">
						<div>Membre depuis mars 2024</div>
						<span className="font-semibold text-xs text-[--color-basic-900] underline">
							Particulier
						</span>
					</div>
				}
			/>
			<div className="flex flex-col space-y-2">
				<div className="font-semibold text-base text-left text-[--color-basic-900]">
					Sur votre propriétaire
				</div>
				<ul className="space-y-2">
					<li className="font-normal text-sm text-left text-[--color-basic-600]">
						Nombre de logements en location: 4
					</li>
					<li className="font-normal text-sm text-left text-[--color-basic-600]">
						Taux de reponses: 100%
					</li>
					<li className="font-normal text-sm text-left text-[--color-basic-600]">
						Delai de reponses: Moins d une heure
					</li>
				</ul>
			</div>
			<Button className="w-fit" variant="outline">
				Contacter le proprietaire
			</Button>
		</SectionRooms>
	);
};
