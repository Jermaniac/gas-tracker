import { fetchCardData } from '@/app/lib/data';
import ClientComponent from './client-component';
import { GasStationInfoKeys } from '@/app/lib/definitions';

export default async function GasPricesInfo ({ provinceId }: { provinceId: string }) {
    const data = await fetchCardData(provinceId)
    const availableTypes = Object.keys(data)
    return (
        <>
            {data && <>
                <ClientComponent data={data} availableTypes={availableTypes as GasStationInfoKeys[]}></ClientComponent>
            </>}
        </>
    );
}
