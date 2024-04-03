'use client';

import { Button } from '@/library/button';
import {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownSeparator,
	DropdownTrigger,
} from '@/library/dropdown';
import {
	Navbar,
	NavbarCenter,
	NavbarLeft,
	NavbarRight,
} from '@/library/navbar';
import { HandleLogout } from '@/utils/supabase/supabase';
import Image from 'next/image';
import MESSAGES from '../../../messages.json';
import LOGO from '../../../public/logo.png';

export const NavbarHosting = () => {
	return (
		<Navbar>
			<NavbarLeft>
				<div className="inline-flex items-center gap-4">
					<Image src={LOGO} height={32} alt="logo" />
					<h1 className="font-semibold text-[--color-berry-800] text-base">
						Espace Locataire
					</h1>
				</div>
			</NavbarLeft>
			<NavbarCenter>
				<Button variant="light" rounded="full">
					{MESSAGES.TODAY}
				</Button>
			</NavbarCenter>
			<NavbarRight>
				<div className="inline-flex items-center">
					<Dropdown placement="bottom-right">
						<DropdownTrigger>
							<Button variant="outline" rounded="full">
								Mon Compte
							</Button>
						</DropdownTrigger>
						<DropdownContent variant="flat" size="md" color="basic">
							<DropdownItem className="font-medium">Profile</DropdownItem>
							<DropdownItem className="font-medium">Compte</DropdownItem>
							<DropdownItem className="font-medium">
								Obtenir de l`aide
							</DropdownItem>
							<DropdownSeparator />
							<DropdownItem>Français (FR)</DropdownItem>
							<DropdownItem>€ EUR</DropdownItem>
							<DropdownSeparator />
							<DropdownItem>Parrainer un hôte</DropdownItem>
							<DropdownItem color="poppy" onClick={HandleLogout}>
								Déconnexion
							</DropdownItem>
						</DropdownContent>
					</Dropdown>
				</div>
			</NavbarRight>
		</Navbar>
	);
};
