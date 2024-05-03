export default async function Page() {
	return (
		<div className="flex flex-col h-full w-full">
			{/* <div className="w-[44rem]">
				<div className="font-semibold text-2xl text-[--color-basic-800]">
					Votre dossier locataire
				</div>
			</div> */}
			<div className="grow"></div>
			<div className="border-t w-full h-16 flex flex-col items-center justify-center">
				<div className="font-medium text-sm text-[--color-basic-800]">
					0 documents a envoyer
				</div>
			</div>
		</div>
	);
}
