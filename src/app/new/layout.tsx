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
		<div className="relative h-screen w-screen grid grid-cols-2">
			<div></div>
			<div className="flex flex-col justify-between bg-red-200">
				<div className="border-b h-20"></div>
				<div className="grow"></div>
			</div>
		</div>
	);
}
