import { CardHost, CardHostProps } from '@/components/card/card-host';
import { NavbarHome } from '@/components/navbar/navbar-home';

export default async function Home() {
	const hosts: CardHostProps[] = [
		{
			title: 'Studio à louer',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/c9/bc/bf/c9bcbf71fab9e84d5ff79938edeea2cf25e409e1.jpg?rule=classified-628x380-avif',
			price: 7456,
			city: 'Paris',
			country: 'France',
		},
		{
			title: 'Host 2',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/33/28/29/332829c86086160c8f06bfc50cb1904e257bfe55.jpg?rule=classified-628x380-avif',
			price: 564,
			city: 'Nantes',
			country: 'France',
		},
		{
			title: 'Host 3',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/91/01/9e/91019e4c1b5fa84133b7351152347517294e7585.jpg?rule=classified-628x380-avif',
			price: 423,
			city: 'Angers',
			country: 'France',
		},
		{
			title: 'Host 4',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/5d/d0/98/5dd0982878195e8f0a9756a95a6e0d93ea2bea04.jpg?rule=classified-628x380-avif',
			price: 876,
			city: 'Montaigu',
			country: 'France',
		},
		{
			title: 'Host 5',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/5e/35/d9/5e35d95f02d4bdc6ee4a7d3e753b94148b2142e5.jpg?rule=classified-628x380-avif',
			city: 'Bouffere',
			country: 'France',
			price: 54,
		},
		{
			title: '',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/4e/5c/f5/4e5cf5ef92210cf8ae64369a333d7f5f861ed527.jpg?rule=classified-628x380-avif',
			city: 'Saint Jean de Monts',
			country: 'France',
			price: 500,
		},
		{
			title: '',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/53/cf/77/53cf779a5f9ce689a39b75496ecd26ab5d4551e0.jpg?rule=classified-628x380-avif',
			price: 500,
			city: 'Cholet',
			country: 'France',
		},
		{
			title: '',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/bc/89/cc/bc89cc79d80157bbb6a9948d45fa53daf9a2871b.jpg?rule=classified-628x380-avif',
			price: 89,
			city: 'Marseille',
			country: 'France',
		},
		{
			title: '',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/ea/a6/d1/eaa6d1f823149038c3eb22e4450bf98638dd58e6.jpg?rule=classified-628x380-avif',
			price: 76,
			city: 'Nantes',
			country: 'France',
		},
		{
			title: '',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/ab/d1/23/abd12356fe145da766138fccbf44212c38caa1ce.jpg?rule=classified-628x380-avif',
			price: 84,
			city: 'Bordeaux',
			country: 'France',
		},
		{
			title: '',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/59/89/f1/5989f187350ac8db8175ba0125b9aad57f6375d0.jpg?rule=classified-628x380-avif',
			price: 786,
			city: 'Paris',
			country: 'France',
		},
		{
			title: '',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/ce/6b/54/ce6b5420f026f31f08ef80e14c3f2fa83b1503ec.jpg?rule=classified-628x380-avif',
			price: 500,
			city: 'Angers',
			country: 'France',
		},
		{
			title: '',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/a8/cc/0a/a8cc0a11a88ec3e0a627a6c37d908d07ebda033b.jpg?rule=classified-628x380-avif',
			price: 753,
			city: 'Ancenie',
			country: 'France',
		},
		{
			title: '',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/f3/66/64/f3666434b541e09c42ee49af4e406268b9e46cb3.jpg?rule=classified-628x380-avif',
			city: 'Angers',
			country: 'France',
			price: 500,
		},
		{
			title: '',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/0f/ca/b9/0fcab91bd13a54f9fdda51b824f41f2fa3651370.jpg?rule=classified-628x380-avif',
			city: 'Montaigu',
			country: 'France',
			price: 798,
		},
		{
			title: '',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/57/7f/d5/577fd52099ca7a649e9beca024316c102094c568.jpg?rule=classified-628x380-avif',
			city: 'Nantes',
			country: 'France',
			price: 480,
		},
		{
			title: '',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/fa/91/60/fa9160a95dca30b17624fa8f809815d8968a82b5.jpg?rule=classified-628x380-avif',
			price: 9898,
			city: 'Treize Septiers',
			country: 'France',
		},
		{
			title: '',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/39/6e/58/396e588cddd75a8ff1f366aed927cdcfdf710d10.jpg?rule=classified-628x380-avif',
			price: 356,
			city: 'Montpellier',
			country: 'France',
		},
		{
			title: '',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/04/eb/81/04eb816a8fbc3fd20a1c9d30adc1a6f7fe3e7687.jpg?rule=classified-628x380-avif',
			price: 858,
			city: 'Nantes',
			country: 'France',
		},
		{
			title: '',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/76/24/2e/76242eb05b7aaa101dddd0da503d6094e958c65f.jpg?rule=classified-628x380-avif',
			price: 386,
			city: 'Fontenay le Comte',
			country: 'France',
		},
		{
			title: '',
			url: 'https://img.leboncoin.fr/api/v1/lbcpb1/images/49/bc/00/49bc000ceeabb77668e96b9f92354bcbb556066e.jpg?rule=classified-628x380-avif',
			price: 449,
			city: 'Herbiers',
			country: 'France',
		},
	];

	return (
		<main>
			<NavbarHome />
			<div className="px-16 grid grid-cols-5 gap-8">
				{hosts.map((host: CardHostProps, index: any) => (
					<CardHost
						key={index}
						title={host.title}
						url={host.url}
						price={host.price}
						city={host.city}
						country={host.country}
					/>
				))}
			</div>
		</main>
	);
}
