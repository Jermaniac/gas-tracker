import { fetchCardData } from '@/app/lib/data';
import ClientComponent from './client-component';

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
