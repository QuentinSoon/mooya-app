import MESSAGES from '@/utils/messages.json';
import { BtnCreate } from './btn-create';

export default async function Page() {
	return (
		<div className="flex flex-col space-y-6 w-96">
			<div className="flex flex-col space-y-4 w-96">
				<div className="font-medium text-xl text-[--color-basic-900]">
					{MESSAGES.CREATE_NEW_HOST}
				</div>
				<BtnCreate />
			</div>
		</div>
	);
}
