
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export default function MapGas(props: any) {
    const Map = () => dynamic(
        () => import('../../ui/map/index'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
      )
    return (
        <Map posix={props.posix} list={props.list} />
        );
}
