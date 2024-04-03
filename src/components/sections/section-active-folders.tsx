'use client';

import { Button } from '@/library/button';
import { Section } from '@/library/section';
import { cn } from '@/utils/cn';

export const SectionActiveFolders = () => {
	return (
		<Section className="w-full px-60 py-10 flex flex-col gap-4">
			<div className={cn('inline-flex items-center justify-between w-full')}>
				<div className={cn('flex flex-col')}>
					<h2 className="text-2xl font-semibold text-left text-[--color-basic-900]">
						Mes candidatures
					</h2>
					<p className="text-ms font-normal text-left text-[--color-basic-500]">
						Consulté l état de vos candidatures et suivez leurs avancés
					</p>
				</div>
				<div>
					<Button variant="light" className="underline" size="md">
						Tous les dossiers (0)
					</Button>
				</div>
			</div>
			<div className="inline-flex items-center gap-2">
				<Button variant="outline" rounded="full">
					En attente (0)
				</Button>
				<Button variant="outline" rounded="full">
					Candidatures refusé (0)
				</Button>
			</div>
			<div></div>
		</Section>
	);
};
