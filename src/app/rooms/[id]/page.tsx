import { CardCandidate } from '@/components/card/card-candidate';
import { SectionRooms } from '@/components/sections/section-rooms';
import { Button } from '@/library/button';
import { Icon } from '@/library/icon';
import { Mapbox } from '@/library/mapbox';
import { User } from '@/library/user';
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

	console.log(rooms);

	return {
		title: rooms.title + ' - Mooya' ?? 'Room',
		description: 'test',
	};
}

export default async function Page({ params }: Props) {
	const supabase = createClient();
	const { data: rooms } = await supabase
		.from('rooms')
		.select(
			`*, privacy(*), structure(*), property(*), owner:users(*), test(*, amenities(*))`
		)
		.eq('id', params.id)
		.single();

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
						<Icon name={'DoorOpen'} size={24} color="currentColor" />
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
										4
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
						{/* <div className="font-normal text-sm text-left text-[--color-basic-600]">
							{rooms.description ?? 'Pas de description'}
						</div> */}
						{/* 
						<button className="font-medium underline text-sm">
							En savoir plus
						</button> */}
					</div>
					{/* <Button size="md" className="underline -ml-5 w-fit" variant="light">
						En savoir plus
					</Button> */}
					<Button size="md" className="w-fit" variant="outline">
						En savoir plus
					</Button>
				</SectionRooms>
				<SectionRooms title="Ce que propose ce logement">
					<div className="space-y-6">
						<div className={`grid grid-cols-2 gap-8 w-2/4`}>
							{rooms.test.map((amenity: any, index: number) => (
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
							))}
						</div>
					</div>
					<Button size="md" className="w-fit" variant="outline">
						Voir les {rooms.test.length} équipements
					</Button>
				</SectionRooms>
				<SectionRooms title="Ou se situe le logement">
					<Mapbox
						location={{
							lat: rooms.location ? rooms.location[0] : 0,
							lng: rooms.location ? rooms.location[1] : 0,
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
				<SectionRooms title="Qui est le propriétaire">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 4xl:grid-cols-3 gap-5">
						<div className="flex flex-col">
							<div className="font-medium text-lg text-supergray pb-2">
								Règlement intérieur
							</div>
							<div className="flex flex-col space-y-1.5 text-supergray">
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
							<div className="flex flex-col space-y-1.5 text-supergray">
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
							<div className="flex flex-col space-y-1.5 text-supergray">
								<div className="flex flex-row space-x-3 items-center">
									<div className="self-start pt-1">
										<Icon name={'Clock'} size={18} />
									</div>
									<div>
										Les consignes de Mooya en matière de distanciation physique
										et d autres consignes liées au Covid-19 s appliquent.
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
									Particulier=
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
			</div>
			<CardCandidate
				owner={rooms.owner}
				title={rooms.title}
				description={rooms.description}
			/>
		</div>
	);
}
