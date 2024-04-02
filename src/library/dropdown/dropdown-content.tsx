'use client';

import { cn } from '@/utils/cn';
import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { Menu, MenuColorProps, MenuSizeProps, MenuVariantProps } from '../menu';
import { PopoverContent } from '../popover';
import './dropdown.scss';

export type DropdownContentProps = PropsWithChildren<{
	/**
	 * The variant of the menu.
	 * @default solid
	 */
	variant?: MenuVariantProps;
	/**
	 * The size of the menu.
	 * @default sm
	 */
	size?: MenuSizeProps;
	/**
	 * The color of the menu.
	 * @default basic
	 */
	color?: MenuColorProps;
}>;

export type UseDropdownContentProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof DropdownContentProps
> &
	DropdownContentProps;

const DropdownContent = forwardRef<HTMLDivElement, UseDropdownContentProps>(
	(
		{ variant = 'flat', size = 'sm', color = 'basic', children, className },
		ref
	) => {
		return (
			<PopoverContent className={cn(className ?? 'dropdown-defaultContent')}>
				<Menu variant={variant} size={size} color={color}>
					{children}
				</Menu>
			</PopoverContent>
		);
	}
);
DropdownContent.displayName = 'DropdownContent';

export { DropdownContent };
