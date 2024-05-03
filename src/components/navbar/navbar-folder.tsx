'use client';

import { Button } from '@/library/button';

export const NavbarFolder = () => {
	return (
		<div className="w-80 h-full bg-[--color-basic-100] p-8">
			<div>Completez votre dossier</div>
			<div className="flex flex-col space-y-2">
				<div>
					<Button
						fullWidth
						rounded="full"
						contentFullWidth
						startContent={'Ma Situation'}
						className="px-6"
					/>
				</div>
				<div>
					<Button
						fullWidth
						rounded="full"
						contentFullWidth
						startContent={'Mes Documents'}
						className="px-6"
					/>
				</div>
				<div>
					<Button
						fullWidth
						rounded="full"
						contentFullWidth
						startContent={'Mes Garants'}
						className="px-6"
					/>
				</div>
			</div>
		</div>
	);
};
