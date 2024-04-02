'use client';

import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { BackdropProps, Overlay } from '../overlay';
import { PopoverPlacementsProps } from '../popover';
import './modal.scss';

type ModalProps = PropsWithChildren<{
	open: boolean;
	setOpen: (newValue: boolean) => void;
	backdrop?: BackdropProps;
	placement?: PopoverPlacementsProps;
}>;

type UseModalProps = Omit<HTMLAttributes<HTMLDivElement>, keyof ModalProps> &
	ModalProps;

const Modal = forwardRef<HTMLDivElement, UseModalProps>(
	(
		{
			open = false,
			setOpen = () => {},
			backdrop,
			placement,
			children,
			className,
			...otherProps
		},
		ref
	) => {
		return (
			<AnimatePresence>
				{open && (
					<Overlay
						open={open}
						setOpen={setOpen}
						backdrop={backdrop}
						placement={placement}
					>
						{/* <div
							className={cn(
								'absolute z-10 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2',
								className
							)}
						>
							{children}
						</div> */}
						<motion.div
							variants={{
								active: {
									opacity: 1,
									transition: {
										duration: 0.2,
										ease: 'easeOut',
									},
									zoom: 1,
								},
								inactive: {
									opacity: 0,
									transition: {
										duration: 0.15,
									},
									zoom: 0.4,
								},
							}}
							initial="inactive"
							animate="active"
							exit="inactive"
							className={cn(
								'absolute z-20 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 overflow-hidden bg-white rounded-2xl',
								className
							)}
						>
							{children}
						</motion.div>
					</Overlay>
				)}
			</AnimatePresence>
		);
	}
);
Modal.displayName = 'Modal';

export { Modal };

export type { ModalProps, UseModalProps };
