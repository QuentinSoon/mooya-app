'use client';

import { Button } from '@/library/button';
import {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownSeparator,
	DropdownTrigger,
} from '@/library/dropdown';
import { Navbar, NavbarLeft, NavbarRight } from '@/library/navbar';
import { createClient } from '@/utils/supabase/client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import LOGO from '../../../public/logo.png';
import { ModalLogin } from '../modal/login-modal';

export const NavbarHome = () => {
	const [open, setOpen] = useState(false);
	const [user, setUser] = useState<any>();

	useEffect(() => {
		const fetch = async () => {
			const supabase = createClient();
			const { data: user, error } = await supabase.auth.getUser();
			if (error) return;
			setUser(user.user);
			console.log(user.user);
		};
		fetch();
	}, []);

	return (
		<>
			<ModalLogin open={open} setOpen={setOpen} />
			<Navbar>
				<NavbarLeft>
					<div className="inline-flex items-center gap-4">
						<Image src={LOGO} height={32} alt="logo" />
						<h1 className="font-semibold text-[--color-berry-800] text-base">
							Mooya
						</h1>
					</div>
				</NavbarLeft>
				<NavbarRight>
					<div className="inline-flex items-center">
						<Dropdown placement="bottom-right">
							<DropdownTrigger>
								<Button variant="outline" rounded="full">
									Mon Compte
								</Button>
							</DropdownTrigger>
							<DropdownContent variant="flat" size="md" color="basic">
								<DropdownItem
									className="font-medium"
									onClick={() => setOpen(true)}
								>
									Inscription
								</DropdownItem>
								<DropdownItem
									className="font-medium"
									onClick={() => setOpen(true)}
								>
									Connexion
								</DropdownItem>
								<DropdownSeparator />
								<DropdownItem>Louer mon logement</DropdownItem>
								<DropdownItem>Trouver un logement</DropdownItem>
								<DropdownItem>Aide</DropdownItem>
							</DropdownContent>
						</Dropdown>
					</div>
				</NavbarRight>
			</Navbar>
		</>
	);
};
