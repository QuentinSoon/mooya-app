import { cn } from '@/utils/cn';
import 'mapbox-gl/dist/mapbox-gl.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import GoogleAnalytics from './GoogleAnalytics';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Mooya | Location et gestion de biens immobiliers nouvelle génération',
	description:
		'Mooya est une plateforme de location et gestion de biens immobiliers nouvelle génération. Trouvez votre prochain logement en quelques clics !',
	openGraph: {
		title: 'Mooya',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={cn(inter.className, 'h-screen w-screen')}>
				<GoogleAnalytics ga_id="G-5HL0S92N8R" />
				{children}
			</body>
		</html>
	);
}
