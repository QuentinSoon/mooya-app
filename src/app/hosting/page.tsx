import { CardWelcome } from '@/components/card/card-welcome';
import { SectionActiveFolders } from '@/components/sections/section-active-folders';

export default async function Page() {
	return (
		<>
			<CardWelcome />
			<SectionActiveFolders />
		</>
	);
}
