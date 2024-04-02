import { Button } from '@/library/button';
import {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownSeparator,
	DropdownTrigger,
} from '@/library/dropdown';
import { Navbar, NavbarLeft, NavbarRight } from '@/library/navbar';
import Image from 'next/image';
import LOGO from '../../../public/logo.png';

export const NavbarHome = () => (
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
						<DropdownItem className="font-medium">Inscription</DropdownItem>
						<DropdownItem className="font-medium">Connexion</DropdownItem>
						<DropdownSeparator />
						<DropdownItem>Louer mon logement</DropdownItem>
						<DropdownItem>Trouver un logement</DropdownItem>
						<DropdownItem>Aide</DropdownItem>
					</DropdownContent>
				</Dropdown>
			</div>
		</NavbarRight>
	</Navbar>
);
