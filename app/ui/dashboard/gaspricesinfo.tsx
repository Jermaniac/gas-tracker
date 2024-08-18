import { fetchCardData } from '@/app/lib/data';
import dynamic from 'next/dynamic';
import ClientComponent from './client-component';

const Map = dynamic(() => import('../map/index'), { ssr: false });

export default async function GasPricesInfo ({ provinceId }: { provinceId: string }) {
    const data = await fetchCardData(provinceId);
    return (
        <>
            {data && <>
                <ClientComponent data={data}></ClientComponent>
            </>}
        </>
    );
}
