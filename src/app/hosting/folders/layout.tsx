import { NavbarFolder } from '@/components/navbar/navbar-folder';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Dossier locataire - Mooya',
	description:
		'Mooya est une plateforme de location et gestion de biens immobiliers nouvelle génération. Trouvez votre prochain logement en quelques clics !',
};

export default async function HostingLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<section className="flex flex-row grow">
			<div>
				<NavbarFolder />
			</div>
			{children}
		</section>
	);
}
