import { fetchCardData } from '@/app/lib/data';
import CardWrapper from './cards';
import GasStationList from './gas-station-list';

export default async function GasPricesInfo({ provinceId }: { provinceId: string }) {
    const response = await fetchCardData(provinceId);
    return (
        <>
            {response && <>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <CardWrapper info={response} />
                </div>
                <div className="mt-6">
                    <GasStationList info={response} />
                </div>
            </>}
        </>
    );
}
