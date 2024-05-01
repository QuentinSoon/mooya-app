export default async function Page() {
	return (
		<div className="relative h-screen w-screen grid grid-cols-2">
			<div></div>
			<div className="flex flex-col justify-between bg-red-200">
				<div className="border-b h-20"></div>
				<div className="grow"></div>
			</div>
		</div>
	);
}
