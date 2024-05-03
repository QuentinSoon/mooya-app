'use client';

import { Button } from '@/library/button';

export const NavbarFolder = () => {
	return (
		<div className="w-72 h-full bg-[--color-basic-100] flex flex-col space-y-8 p-4">
			<div className="font-semibold text-lg px-4 pt-4">Configurateur</div>
			<div className="flex flex-col space-y-2">
				<Button
					startContent="Situation"
					variant="light"
					color="paradiso"
					fullWidth
					contentFullWidth
				/>
			</div>
		</div>
	);
};
