'use client';

import mapboxgl from '!mapbox-gl';
import { cn } from '@/utils/cn';
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
		const mapContainer = useRef(null);
		const map = useRef(null);
		const [lng, setLng] = useState(-70.9);
		const [lat, setLat] = useState(42.35);
		const [zoom, setZoom] = useState(9);

		useEffect(() => {
			if (map.current) return; // initialize map only once
			mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
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
