'use client';

import { RoomsType } from '@/classes/Rooms.class';
import { Icon } from '@/library/icon';
import { SectionRooms } from '../section-rooms';

export const SectionRoomsRules = ({ rooms }: { rooms: RoomsType }) => {
	return (
		<SectionRooms title="Informations">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 4xl:grid-cols-3 gap-5">
				<div className="flex flex-col">
					<div className="font-medium text-lg text-supergray pb-2">
						Règlement intérieur
					</div>
					<div className="flex flex-col space-y-1.5 text-sm">
						<div className="flex flex-row space-x-3 items-center">
							<div className="self-start pt-1">
								<Icon name={'Clock'} size={18} />
							</div>
							<div>Pas d animaux</div>
						</div>
						<div className="flex flex-row space-x-3 items-center">
							<div className="self-start pt-1">
								<Icon name={'Clock'} size={18} />
							</div>
							<div>Non fumeur</div>
						</div>
						<div className="flex flex-row space-x-3 items-center">
							<div className="self-start pt-1">
								<Icon name={'Clock'} size={18} />
							</div>
							<div>Pas de fête ni de soirée</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col">
					<div className="font-medium text-lg text-supergray pb-2">
						Santé et sécurité
					</div>
					<div className="flex flex-col space-y-1.5 text-sm">
						<div className="flex flex-row space-x-3 items-center">
							<div className="self-start pt-1">
								<Icon name={'Clock'} size={18} />
							</div>
							<div>Détecteur de fumée</div>
						</div>
						<div className="flex flex-row space-x-3 items-center">
							<div className="self-start pt-1">
								<Icon name={'Clock'} size={18} />
							</div>
							<div>Aucun détecteur de monoxyde de carbone</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col">
					<div className="font-medium text-lg text-supergray pb-2">
						Conditions du bien
					</div>
					<div className="flex flex-col space-y-1.5 text-sm">
						<div className="flex flex-row space-x-3 items-center">
							<div className="self-start pt-1">
								<Icon name={'Clock'} size={18} />
							</div>
							<div>
								Les consignes de Mooya en matière de distanciation physique et d
								autres consignes liées au Covid-19 s appliquent.
							</div>
						</div>
						<div className="flex flex-row space-x-3 items-center">
							<div className="self-start pt-1">
								<Icon name={'Clock'} size={18} />
							</div>
							<div>Détecteur de fumée</div>
						</div>
						<div className="flex flex-row space-x-3 items-center">
							<div className="self-start pt-1">
								<Icon name={'Clock'} size={18} />
							</div>
							<div>Aucun détecteur de monoxyde de carbone</div>
						</div>
					</div>
				</div>
			</div>
		</SectionRooms>
	);
};
