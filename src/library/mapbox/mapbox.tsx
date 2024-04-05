'use client';

import { cn } from '@/utils/cn';
import mapboxgl from 'mapbox-gl';
import {
	HTMLAttributes,
	PropsWithChildren,
	forwardRef,
	useEffect,
	useRef,
	useState,
} from 'react';
import './mapbox.scss';

export type MapboxProps = PropsWithChildren<{}>;

export type UseMapboxProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof MapboxProps
> &
	MapboxProps;

const Mapbox = forwardRef<HTMLDivElement, UseMapboxProps>(
	({ className }, ref) => {
		const mapContainer = useRef<any>();
		const map = useRef<any>();
		const [lng, setLng] = useState(-0.5593);
		const [lat, setLat] = useState(47.4698);
		const [zoom, setZoom] = useState(9);

		useEffect(() => {
			if (map.current) return; // initialize map only once
			mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;
			map.current = new mapboxgl.Map({
				container: mapContainer.current,
				style: 'mapbox://styles/quentint/cl8tcc2h2007o14qgzjwt7f1q',
				center: [lng, lat],
				zoom: zoom,
			});
		});
		return <div className={cn('mapbox', className)} ref={mapContainer} />;
	}
);
Mapbox.displayName = 'Mapbox';

export { Mapbox };
