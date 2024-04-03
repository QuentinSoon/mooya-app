'use client';

import { cn } from '@/utils/cn';
import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import './card.scss';

export type CardProps = PropsWithChildren<{}>;

export type UseCardProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof CardProps
> &
	CardProps;

const Card = forwardRef<HTMLDivElement, UseCardProps>(
	({ children, className }, ref) => {
		return <div className={cn('card', className)}>{children}</div>;
	}
);
Card.displayName = 'Card';

export { Card };
