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
import MESSAGES from '@/utils/messages.json';
import { HandleLogout } from '@/utils/supabase/supabase';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LOGO from '../../../public/logo.png';

export const NavbarAdmin = () => {
	const router = useRouter();

	return (
		<Navbar>
			<NavbarLeft>
				<div className="inline-flex items-center gap-4">
					<Image src={LOGO} height={32} alt="logo" />
					<h1 className="font-semibold text-[--color-basic-800] text-base">
						Espace Administration
					</h1>
				</div>
			</NavbarLeft>
			<NavbarCenter>
				<Button
					variant="light"
					rounded="full"
					onClick={() => router.push('/hosting', { scroll: false })}
				>
					{MESSAGES.TODAY}
				</Button>
				<Button variant="light" rounded="full">
					{MESSAGES.USERS}
				</Button>
				<Button variant="light" rounded="full">
					{MESSAGES.INFORMATIONS}
				</Button>
				<Button variant="light" rounded="full">
					{MESSAGES.CALENDAR}
				</Button>
				<Dropdown placement="bottom-right">
					<DropdownTrigger>
						<Button
							variant="light"
							rounded="full"
							endContent={
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="m6 9 6 6 6-6" />
								</svg>
							}
						>
							{MESSAGES.MENU}
						</Button>
					</DropdownTrigger>
					<DropdownContent variant="flat" size="md" color="basic">
						<DropdownItem className="font-medium">
							{MESSAGES.FOLDERS}
						</DropdownItem>
						<DropdownItem className="font-medium">
							{MESSAGES.BOOKINGS}
						</DropdownItem>
						<DropdownItem className="font-medium">
							{MESSAGES.MY_FOLDER_HOSTING}
						</DropdownItem>
						<DropdownSeparator />
						<DropdownItem>Guides</DropdownItem>
						<DropdownItem>Historique des transactions</DropdownItem>
						<DropdownItem>Forum de la communauté</DropdownItem>
					</DropdownContent>
				</Dropdown>
			</NavbarCenter>
			<NavbarRight>
				<div className="inline-flex items-center">
					<Button variant="light" rounded="full" className="text-red-400">
						Sortir du mode administration
					</Button>
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
