import { NavbarHosting } from '@/components/navbar/navbar-hosting';
import { createClient } from '@/utils/supabase/server';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Espace locataire - Mooya',
	description:
		'Mooya est une plateforme de location et gestion de biens immobiliers nouvelle génération. Trouvez votre prochain logement en quelques clics !',
};

export default async function HostingLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const supabase = createClient();
	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		redirect('/');
	}
	return (
		<div className="flex flex-col h-full w-full">
			<NavbarHosting />
			{children}
		</div>
	);
}
