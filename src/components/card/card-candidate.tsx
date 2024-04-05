'use client';

import { Button } from '@/library/button';
import { Card } from '@/library/card';
import { User } from '@/library/user';
import './card-candidate.scss';

export const CardCandidate = ({
	title = 'BlueShoes',
	description = '1 piece - 1 chambre - 1 salle de bain',
}: {
	title?: string;
	description?: string;
}) => (
	<Card className="card-candidate">
		<div className="card-candidate-infos">
			<h2 className="card-candidate-title">{title}</h2>
			<div className="card-candidate-resume">{description}</div>
		</div>
		<div>
			<User
				avatarProps={{
					src: 'https://i.scdn.co/image/ab6761610000e5ebd95cf4457fac4cc62311f84f',
				}}
				name="Proposé par Jennie Kim"
				description="Membre depuis mars 2024"
			/>
		</div>
		<div className="card-candidate-condition">
			<h1 className="card-candidate-condition-title">
				Quentin : candidature admissible
			</h1>
			<ul className="card-candidate-condition-list">
				<Condition title="Salaire minimum" />
				<Condition isAllow={false} title="Eligible Pinel" />
				<Condition title="Bulletins de salaire" />
				<Condition title="Avis d imposition 2023" />
			</ul>
			<div className="card-candidate-condition-informations">
				<span className="font-semibold underline">En savoir plus</span> sur la
				manière dont nous vérifions les informations des candidats pour garantir
				la sécurité de la communauté Mooya.
			</div>
			{/* <div className="card-candidate-condition-informations">
				<span className="font-semibold underline">En savoir plus</span> sur la
				maniere dont la confirmation des informations des comptes contribues a
				garantir la securiter de la communauter Mooya.
			</div> */}
		</div>
		<div className="card-candidate-actions">
			<div className="card-candidate-actions-wrapper">
				<div className="card-candidate-actions-wrapper-content">
					<div className="card-candidate-actions-wrapper-content-title">
						Loyer HC
					</div>
					<div className="card-candidate-actions-wrapper-content-price">
						657€
					</div>
				</div>
				<div className="card-candidate-actions-wrapper-content">
					<div className="card-candidate-actions-wrapper-content-title">
						Charges
					</div>
					<div className="card-candidate-actions-wrapper-content-price">
						87€
					</div>
				</div>
				<div className="card-candidate-actions-wrapper-content">
					<div className="card-candidate-actions-wrapper-content-title">
						Frais de dossier
					</div>
					<div className="card-candidate-actions-wrapper-content-price">
						22€
					</div>
				</div>
			</div>

			<Button color="berry" size="lg" fullWidth>
				Candidater
			</Button>

			{/* <Button color="foreground" size="lg" fullWidth>
				Critère non respecté
			</Button> */}
		</div>
	</Card>
);

export const Condition = async ({
	title = 'Valeur de la condition',
	isAllow = true,
}: {
	title?: string;
	isAllow?: boolean;
}) => (
	<li className="condition">
		<div>
			{isAllow ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="green"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M20 6 9 17l-5-5" />
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="red"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M18 6 6 18" />
					<path d="m6 6 12 12" />
				</svg>
			)}
		</div>
		<div className="text-sm">{title}</div>
	</li>
);
