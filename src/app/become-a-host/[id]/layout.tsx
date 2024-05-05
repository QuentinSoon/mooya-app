import { createClient } from '@/utils/supabase/server';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Structure - Mooya',
	description:
		'Mooya est une plateforme de location et gestion de biens immobiliers nouvelle génération. Trouvez votre prochain logement en quelques clics !',
};

export default async function BecomeLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { id: string };
}>) {
	const supabase = createClient();

	let { data: rooms, error } = await supabase
		.from('rooms')
		.select('*')
		.eq('id', params.id)
		.single();
	if (error || !rooms) redirect('/become-a-host');

	// const parsed = RoomsSchema.parse(rooms);

	return <section>{children}</section>;
}

type Props = {
	params: { id: string };
};
