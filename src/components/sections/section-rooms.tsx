'use client';

import { Section } from '@/library/section';
import { ReactNode } from 'react';

export const SectionRooms = ({
	title,
	children,
}: {
	title?: string;
	children: ReactNode;
}) => {
	return (
		<Section className="flex flex-col space-y-6">
			{title && (
				<div className="font-semibold text-xl text-left text-[--color-basic-900]">
					{title}
				</div>
			)}
			{children}
		</Section>
	);
};
