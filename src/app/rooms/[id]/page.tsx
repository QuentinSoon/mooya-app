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
		.eq('id', params.id)
		.single();

	return {
		title: rooms.title + ' - Mooya' ?? 'Room',
		description: 'test',
	};
}

export default async function Page({ params }: Props) {
	const supabase = createClient();
	const { data: rooms } = await supabase
		.from('rooms')
		.select(`*, privacy(*), structure(*), property(*)`)
		.eq('id', params.id)
		.single();

	console.log(rooms);

	return <div className="page"></div>;
}
