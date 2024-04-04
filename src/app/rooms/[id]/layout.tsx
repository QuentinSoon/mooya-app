import { NavbarHome } from '@/components/navbar/navbar-home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Logement 1 - Mooya',
	description:
		'Mooya est une plateforme de location et gestion de biens immobiliers nouvelle génération. Trouvez votre prochain logement en quelques clics !',
};

export default async function HostingLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<NavbarHome />
			{children}
		</div>
	);
}
