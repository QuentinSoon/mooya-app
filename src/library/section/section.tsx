'use client';

import { HTMLAttributes, forwardRef } from 'react';
import './section.scss';

export type SectionProps = {};

export type UseSectionProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof SectionProps
> &
	SectionProps;

const Section = forwardRef<HTMLDivElement, UseSectionProps>(
	({ children, className }, ref) => {
		return <div className={className}>{children}</div>;
	}
);
Section.displayName = 'Section';

export { Section };
