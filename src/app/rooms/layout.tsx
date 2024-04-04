import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Logement - Mooya',
	description:
		'Mooya est une plateforme de location et gestion de biens immobiliers nouvelle génération. Trouvez votre prochain logement en quelques clics !',
};

export default async function HostingLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div>{children}</div>;
}
