// export default async function Page() {
// 	return (
// 		<div className="flex flex-col h-full w-full">
// 			{/* <div className="w-[44rem]">
// 				<div className="font-semibold text-2xl text-[--color-basic-800]">
// 					Votre dossier locataire
// 				</div>
// 			</div> */}
// 			<div className="grow flex flex-col items-center justify-center">
// 				{/* <div className="w-[30rem]">
// 					<div className="font-medium text-xl text-[--color-basic-800]">
// 						Ressources
// 					</div>
// 					<div className="font-normal text-base text-[--color-basic-600]">
// 						Le locataire peut fournir une copie du document original. Mais le
// 						proprietare a le droit d'exiger la presentation de l'original. Le
// 						document doit etre redige ou traduit en francais.
// 					</div>
// 					<div className="border rounded-2xl p-4">
// 						<div className="font-medium text-base text-[--color-basic-800]">
// 							Bulletins de salaires
// 						</div>
// 						<div className="font-medium text-sm text-[--color-basic-600]">
// 							Ajoutez vos bulletins de salaires de preference en format PDF.
// 						</div>
// 					</div>
// 				</div> */}
// 			</div>
// 			<div className="border-t w-full h-16 flex flex-col items-center justify-center">
// 				<div className="font-medium text-sm text-[--color-basic-800]">
// 					0 documents a envoyer
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

export default async function Page() {
	return (
		<div className="grid grid-cols-2 h-full w-full">
			<div className="h-full w-full"></div>
			<div className="flex flex-col h-full w-full">
				<div className="grow flex flex-col items-center justify-center">e</div>
				<div className="border-t w-full h-16 flex flex-col items-center justify-center">
					<div className="font-medium text-sm text-[--color-basic-800]">
						0 documents a envoyer
					</div>
				</div>
			</div>
		</div>
	);
}
