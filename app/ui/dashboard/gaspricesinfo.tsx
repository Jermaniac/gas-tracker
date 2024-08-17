import { fetchCardData } from '@/app/lib/data';
import dynamic from 'next/dynamic';
import ClientComponent from './client-component';

const Map = dynamic(() => import('../map/index'), { ssr: false });

export default async function GasPricesInfo ({ provinceId }: { provinceId: string }) {
    const { averages, list } = await fetchCardData(provinceId);
    return (
        <>
            {averages && list.length != 0 && <>
                <ClientComponent averages={averages} list={list}></ClientComponent>
            </>}
        </>
    );
}
