import { Button } from '@/library/button';
import { createClient } from '@/utils/supabase/server';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Espace locataire - Mooya',
	description:
		'Mooya est une plateforme de location et gestion de biens immobiliers nouvelle génération. Trouvez votre prochain logement en quelques clics !',
};

export default async function BecomeLayout({
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
			<div className="relative flex flex-col h-full w-full">
				<div className="border-b h-16 flex flex-row items-center justify-between px-4">
					<div>
						<Button size="md" variant="faded" color="paradiso">
							Envie de passer par une agence ?
						</Button>
					</div>
					<div>
						<Button color="berry" variant="light">
							Enregistrer et quitter
						</Button>
					</div>
				</div>
				<div className="grow flex flex-col items-center justify-center">
					{children}
				</div>
				<div className="border-t h-20">eee</div>
			</div>
		</section>
	);
}
