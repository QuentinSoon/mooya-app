// import { createClient } from '@/utils/supabase/server';
// import type { Metadata } from 'next';
// import { redirect } from 'next/navigation';

// export const metadata: Metadata = {
// 	title: 'Nouveaux logements - Mooya',
// 	description:
// 		'Mooya est une plateforme de location et gestion de biens immobiliers nouvelle génération. Trouvez votre prochain logement en quelques clics !',
// };

// export default async function HostingLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode;
// 	params: string;
// }>) {
// 	const supabase = createClient();
// 	const { data, error } = await supabase.auth.getUser();
// 	if (error || !data?.user) {
// 		redirect('/');
// 	}
// 	return <section>{children}</section>;
// }

import { Button } from '@/library/button';
import { createClient } from '@/utils/supabase/server';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Nouveaux logements - Mooya',
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
		<section className="relative h-screen w-screen grid grid-cols-2">
			<div className="relative bg-gradient-to-b from-pink-600 to-purple-800">
				<div className="absolute px-20 top-1/2 -translate-y-1/2 font-medium text-3xl text-white">
					Parmi les propositions suivantes, laquelle décrit le mieux votre bien
					?
				</div>
			</div>
			<div className="relative flex flex-col justify-between">
				<div className="border-b h-20"></div>
				<div className="grow flex flex-col items-center justify-center">
					{children}
				</div>
				<div className="border-t h-20 flex items-center justify-between px-4">
					<Button variant="light" className="underline">
						Retour
					</Button>
					<Button>Continuer</Button>
				</div>
			</div>
		</section>
	);
}
