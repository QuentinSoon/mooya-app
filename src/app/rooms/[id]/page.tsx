import { CardCandidate } from '@/components/card/card-candidate';
import { SectionRooms } from '@/components/sections/section-rooms';
import { Button } from '@/library/button';
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
		.eq('id', id)
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
		.select(`*, privacy(*), structure(*), property(*), owner:users(*)`)
		.eq('id', params.id)
		.single();

	console.log(rooms);

	return (
		<div className="page">
			<div className="page-wrapper">
				<div className="flex flex-col gap-6">
					<div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-96">
						<div
							className="col-span-2 row-span-2 bg-purple-500 rounded-l-3xl bg-cover bg-center"
							style={{
								backgroundImage: `url(https://img.leboncoin.fr/api/v1/lbcpb1/images/2d/bb/c7/2dbbc734b103bb3472c9976a77bed75901e3ade3.jpg?rule=ad-large)`,
							}}
						></div>
						<div
							className="bg-purple-500 rounded-tr-3xl bg-cover bg-center"
							style={{
								backgroundImage: `url(https://img.leboncoin.fr/api/v1/lbcpb1/images/a8/02/38/a802381918c7f99b0b24e9cbfbc1cec72075c569.jpg?rule=ad-large)`,
							}}
						></div>
						<div
							className="bg-purple-500 rounded-br-3xl bg-cover bg-center"
							style={{
								backgroundImage: `url(https://img.leboncoin.fr/api/v1/lbcpb1/images/90/b1/54/90b154580183d2eb5d206ea5c5c0537c686b64ff.jpg?rule=ad-large)`,
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
				<SectionRooms title="A propos">
					<div className="space-y-6">
						<div className={`grid grid-cols-3 gap-4 w-3/4`}>
							<div className="flex flex-row space-x-4 justify-start items-center">
								<div className="flex flex-col">
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
										<path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
										<path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
										<path d="M12 4v6" />
										<path d="M2 18h20" />
									</svg>
								</div>
								<div className="flex flex-col space-y-0.5 w-full">
									<div className="text-sm font-normal text-supergray">
										Chambres
									</div>
									<div className="text-base font-semibold text-supergray">
										4
									</div>
								</div>
							</div>
							<div className="flex flex-row space-x-4 justify-start items-center">
								<div className="flex flex-col">
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
										<rect width="18" height="18" x="3" y="3" rx="2" />
										<path d="M12 9v6" />
										<path d="M16 15v6" />
										<path d="M16 3v6" />
										<path d="M3 15h18" />
										<path d="M3 9h18" />
										<path d="M8 15v6" />
										<path d="M8 3v6" />
									</svg>
								</div>
								<div className="flex flex-col space-y-0.5 w-full">
									<div className="text-sm font-normal text-supergray">
										Surface
									</div>
									<div className="text-base font-semibold text-supergray">
										2
									</div>
								</div>
							</div>
							<div className="flex flex-row space-x-4 justify-start items-center">
								<div className="flex flex-col">
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
										<rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
										<path d="M9 22v-4h6v4" />
										<path d="M8 6h.01" />
										<path d="M16 6h.01" />
										<path d="M12 6h.01" />
										<path d="M12 10h.01" />
										<path d="M12 14h.01" />
										<path d="M16 10h.01" />
										<path d="M16 14h.01" />
										<path d="M8 10h.01" />
										<path d="M8 14h.01" />
									</svg>
								</div>
								<div className="flex flex-col space-y-0.5 w-full">
									<div className="text-sm font-normal text-supergray">
										Etage
									</div>
									<div className="text-base font-semibold text-supergray">
										2
									</div>
								</div>
							</div>
							<div className="flex flex-row space-x-4 justify-start items-center">
								<div className="flex flex-col">
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
										<path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z" />
										<path d="M10 22v-8L2.25 9.15" />
										<path d="m10 14 11.77-6.87" />
									</svg>
								</div>
								<div className="flex flex-col space-y-0.5 w-full">
									<div className="text-sm font-normal text-supergray">
										Pieces
									</div>
									<div className="text-base font-semibold text-supergray">
										2
									</div>
								</div>
							</div>
							<div className="flex flex-row space-x-4 justify-start items-center">
								<div className="flex flex-col">
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
										<path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z" />
										<path d="M10 22v-8L2.25 9.15" />
										<path d="m10 14 11.77-6.87" />
									</svg>
								</div>
								<div className="flex flex-col space-y-0.5 w-full">
									<div className="text-sm font-normal text-supergray">DPEs</div>
									<div className="text-base font-semibold text-supergray">
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
										<path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z" />
										<path d="M10 22v-8L2.25 9.15" />
										<path d="m10 14 11.77-6.87" />
									</svg>
								</div>
								<div className="flex flex-col space-y-0.5 w-full">
									<div className="text-sm font-normal text-supergray">GES</div>
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
					<Button size="md" className="underline -ml-5 w-fit" variant="light">
						En savoir plus
					</Button>
				</SectionRooms>
				<SectionRooms title="Ou se situe le logement">
					<Mapbox
						location={{
							lat: rooms.location[0],
							lng: rooms.location[1],
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
			</div>
			<CardCandidate
				owner={rooms.owner}
				title={rooms.title}
				description={rooms.description}
			/>
		</div>
	);
}
