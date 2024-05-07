import { Button } from '@/library/button';
import { Icon } from '@/library/icon';
import Image from 'next/image';
import ImageBecome from '../../../../public/assets/become.jpg';

export default async function Page() {
	return (
		<div className="relative grid grid-cols-2 h-screen">
			<div className="relative bg-gradient-to-b from-pink-700 to-purple-700">
				{/* <Image
					className="object-cover w-full h-full"
					alt="BecomeAHost"
					src={ImageHero}
				/>
				<div className="absolute inset-0 opacity-40 bg-gradient-to-br from-neutral-600 via-black to-neutral-500"></div> */}
				<div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2">
					<div className="font-semibold text-4xl text-white">
						Bon retour Quentin,
					</div>
				</div>
			</div>
			<div className="flex flex-col">
				<div className="border-b h-20 flex flex-row items-center justify-between px-8">
					<Button variant="ghost">Question?</Button>
					<Button variant="light" color="berry">
						Quitter
					</Button>
				</div>
				<div className="grow flex flex-col gap-20 items-center justify-center m-auto w-[32rem]">
					<div className="flex flex-col space-y-4 w-full">
						<div className="font-medium text-xl text-[--color-basic-800] text-left">
							Commencer une nouvelle annonce
						</div>
						<div>
							<Button
								fullWidth
								contentFullWidth
								size="lg"
								variant="outline"
								startContent={<Icon name="Home" />}
								className="h-16 font-medium"
							>
								Créer une nouvelle annonce
							</Button>
						</div>
					</div>
					<div className="flex flex-row gap-1 bg-[--color-basic-100] rounded-2xl w-full h-52 overflow-hidden">
						<div className="flex flex-col grow p-4">
							<div className="flex flex-col h-full">
								<div className="font-semibold text-lg text-[--color-basic-800]">
									Besoin d&apos;aide ?
								</div>
								<div className="font-normal text-sm text-[--color-basic-800]">
									Certains locataires ce portent volontaire gratuitement pour
									vous aider dans votre demarche de location de votre bien.
								</div>
							</div>
							<div>
								<Button>Contacter un proprietaire</Button>
							</div>
						</div>
						<div className="w-[35rem] h-full">
							<Image
								className="object-cover w-full h-full"
								alt="BecomeAHost"
								src={ImageBecome}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
