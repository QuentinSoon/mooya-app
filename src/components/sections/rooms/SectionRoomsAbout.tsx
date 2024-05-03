'use client';

import { RoomsType } from '@/classes/Rooms.class';
import { Button } from '@/library/button';
import { Icon } from '@/library/icon';
import { SectionRooms } from '../section-rooms';

export const SectionRoomsAbout = ({ rooms }: { rooms: RoomsType }) => {
	return (
		<SectionRooms title="A propos">
			<div className="space-y-6">
				<div className={`grid grid-cols-3 gap-8 w-3/4`}>
					<div className="flex flex-row space-x-4 justify-start items-center">
						<div className="flex flex-col">
							<Icon name={'BedDouble'} size={24} color="currentColor" />
						</div>
						<div className="flex flex-col space-y-0.5 w-full">
							<div className="text-sm font-medium text-[--color-basic-900] text-left">
								Chambres
							</div>
							<div className="text-base font-semibold text-[--color-basic-900]">
								{rooms.bedrooms}
							</div>
						</div>
					</div>
					<div className="flex flex-row space-x-4 justify-start items-center">
						<div className="flex flex-col">
							<Icon name={'BrickWall'} size={24} color="currentColor" />
						</div>
						<div className="flex flex-col space-y-0.5 w-full">
							<div className="text-sm font-medium text-[--color-basic-900] text-left">
								Surface
							</div>
							<div className="text-base font-semibold text-[--color-basic-900]">
								{rooms.surface}
							</div>
						</div>
					</div>
					<div className="flex flex-row space-x-4 justify-start items-center">
						<div className="flex flex-col">
							<Icon name={'Building'} size={24} color="currentColor" />
						</div>
						<div className="flex flex-col space-y-0.5 w-full">
							<div className="text-sm font-medium text-[--color-basic-900] text-left">
								Etage
							</div>
							<div className="text-base font-semibold text-[--color-basic-900]">
								2
							</div>
						</div>
					</div>
					<div className="flex flex-row space-x-4 justify-start items-center">
						<div className="flex flex-col">
							<Icon name={'Cuboid'} size={24} color="currentColor" />
						</div>
						<div className="flex flex-col space-y-0.5 w-full">
							<div className="text-sm font-medium text-[--color-basic-900] text-left">
								Pieces
							</div>
							<div className="text-base font-semibold text-[--color-basic-900]">
								{rooms.rooms}
							</div>
						</div>
					</div>
					<div className="flex flex-row space-x-4 justify-start items-center">
						<div className="flex flex-col">
							<Icon name={'Cuboid'} size={24} color="currentColor" />
						</div>
						<div className="flex flex-col space-y-0.5 w-full">
							<div className="text-sm font-medium text-[--color-basic-900] text-left">
								DPE
							</div>
							<div className="text-base font-semibold text-[--color-basic-900]">
								<div className="flex flex-row box-border border rounded-lg border-[--color-basic-200] w-fit h-6">
									<div className="flex items-center justify-center font-medium text-sm bg-green-600 px-1.5 rounded-l-md">
										A
									</div>
									<div className="flex items-center justify-center font-medium text-sm bg-green-400 px-1.5">
										B
									</div>
									<div className="flex items-center justify-center font-medium text-sm bg-lime-400 px-1.5">
										C
									</div>
									<div className="flex items-center justify-center font-medium text-sm bg-yellow-300 px-1.5 z-20 scale-125 ring-2 ring-black rounded-lg">
										D
									</div>
									<div className="flex items-center justify-center font-medium text-sm bg-orange-300 px-1.5">
										E
									</div>
									<div className="flex items-center justify-center font-medium text-sm bg-orange-400 px-1.5">
										F
									</div>
									<div className="flex items-center justify-center font-medium text-sm bg-red-500 px-1.5 rounded-r-md">
										G
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-row space-x-4 justify-start items-center">
						<div className="flex flex-col">
							<Icon name={'Cuboid'} size={24} color="currentColor" />
						</div>
						<div className="flex flex-col space-y-0.5 w-full">
							<div className="text-sm font-medium text-[--color-basic-900] text-left">
								GES
							</div>
							<div className="flex flex-row box-border border rounded-lg border-[--color-basic-200] w-fit h-6">
								<div className="flex items-center justify-center font-medium text-sm bg-[--color-berry-200] px-1.5 rounded-l-md">
									A
								</div>
								<div className="flex items-center justify-center font-medium text-sm bg-[--color-berry-300] px-1.5 z-20 scale-125 ring-2 ring-black rounded-lg">
									B
								</div>
								<div className="flex items-center justify-center font-medium text-sm bg-[--color-berry-400] px-1.5">
									C
								</div>
								<div className="flex items-center justify-center font-medium text-sm bg-[--color-berry-500] px-1.5">
									D
								</div>
								<div className="flex items-center justify-center font-medium text-sm bg-[--color-berry-600] px-1.5">
									E
								</div>
								<div className="flex items-center justify-center font-medium text-sm bg-[--color-berry-700] px-1.5">
									F
								</div>
								<div className="flex items-center justify-center font-medium text-sm bg-[--color-berry-800] px-1.5 rounded-r-md">
									G
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="font-normal text-sm text-left text-[--color-basic-600]">
					{rooms.description ?? 'Pas de description'}
				</div>
				{/* 
						<button className="font-medium underline text-sm">
							En savoir plus
						</button> */}
			</div>

			<Button size="md" className="w-fit" variant="outline">
				En savoir plus
			</Button>
		</SectionRooms>
	);
};
