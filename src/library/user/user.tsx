'use client';

import { cn } from '@/utils/cn';
import { HTMLAttributes, forwardRef } from 'react';
import { Avatar, AvatarProps } from '../avatar';
import './user.scss';

export type UserProps = {
	avatarProps?: AvatarProps;
	name?: string;
	description?: string;
	className?: {
		avatar?: string;
		userWrapper?: string;
		name?: string;
		description?: string;
	};
};

export type UseUserProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof UserProps
> &
	UserProps;

const User = forwardRef<HTMLDivElement, UseUserProps>(
	({ avatarProps, name, description }, ref) => {
		return (
			<div className={cn('user')}>
				<Avatar {...avatarProps} />
				<div className={cn('user-wrapper')}>
					<div className={cn('name')}>{name}</div>
					<div className={cn('description')}>{description}</div>
				</div>
			</div>
		);
	}
);
User.displayName = 'User';

export { User };
