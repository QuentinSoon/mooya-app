'use client';

import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { BackdropProps } from '.';
import { PopoverPlacementsProps } from '../popover';
import './overlay.scss';

export type OverlayProps = PropsWithChildren<{
	open: boolean;
	setOpen: (open: boolean) => void;
	backdrop?: BackdropProps;
	placement?: PopoverPlacementsProps;
}>;

export type UseOverlayProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof OverlayProps
> &
	OverlayProps;

const Overlay = forwardRef<HTMLDivElement, UseOverlayProps>(
	(
		{
			children,
			open,
			setOpen,
			backdrop = 'blur',
			placement = 'bottom',
			...otherProps
		},
		ref
	) => {
		// const { open, setOpen } = useOverlayStore();
		return (
			<>
				<div className="z-[1000]">{children}</div>

				<motion.div
					className={cn('overlay', `overlay-${backdrop}`)}
					onClick={() => setOpen(false)}
					initial="inactive"
					animate="active"
					exit="inactive"
					variants={{
						active: {
							opacity: 1,
							transition: {
								duration: 0.2,
								ease: 'easeOut',
							},
						},
						inactive: {
							opacity: 0,
							transition: {
								duration: 0.15,
							},
						},
					}}
				/>
			</>
		);
	}
);
Overlay.displayName = 'Overlay';

export { Overlay };
