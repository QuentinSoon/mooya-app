import { CardWelcomeServer } from '@/components/card/card-welcome';
import { createClient } from '@/utils/supabase/server';

export default async function Page() {
	const supabase = createClient();
	const { data: user } = await supabase
		.from('users')
		.select('*')
		.eq('email', 'q-truffy@mooya.fr')
		.single();

	return (
		<>
			<CardWelcomeServer firstname={user.firstname} />
		</>
	);
}
