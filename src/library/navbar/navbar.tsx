'use client';

import { cn } from '@/utils/cn';
import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import './navbar.scss';

export type NavbarProps = PropsWithChildren<{}>;

export type UseNavbarPropsProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof NavbarProps
> &
	NavbarProps;

const Navbar = forwardRef<HTMLDivElement, UseNavbarPropsProps>(
	({ children, className }, ref) => {
		return <div className={cn('navbar', className)}>{children}</div>;
	}
);
Navbar.displayName = 'Navbar';

export { Navbar };
