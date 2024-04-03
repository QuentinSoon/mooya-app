import { Card } from '@/library/card';

export type CardHostProps = {
	title?: string;
	url?: string;
	city?: string;
	country?: string;
	price?: number;
};

export const CardHost = ({
	title = 'Lorem grem mfdd',
	url = 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	city = 'Nantes',
	country = 'France',
	price = 637,
}: CardHostProps) => (
	<Card className="flex flex-col gap-2 w-full h-full">
		<div className="aspect-[1/0.95] rounded-2xl overflow-hidden w-full h-full">
			<img
				className="object-cover object-center w-full h-full decoration-transparent"
				alt={title}
				src={url}
			/>
		</div>
		<div className="flex flex-col gap-1">
			<div className="flex flex-col">
				<div className="text-base font-medium">
					{city}, {country}
				</div>
				<div className="text-sm font-normal text-[--color-basic-600]">
					Profesionnel
				</div>
				<div className="text-sm font-normal text-[--color-basic-600]">
					Libre maintenant
				</div>
			</div>
			<div>
				<div className="text-sm font-semibold text-[--color-basic-900] gap-1">
					{price} €
					<span className="font-normal text-[--color-basic-800]">par mois</span>
				</div>
			</div>
		</div>
	</Card>
);
