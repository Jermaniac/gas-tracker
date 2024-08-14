import { fetchCardData } from '@/app/lib/data';
import dynamic from 'next/dynamic';
import CardWrapper from './cards';
import GasStationList from './gas-station-list';

const Map = dynamic(() => import('../map/index'), { ssr: false });

export default async function GasPricesInfo ({ provinceId }: { provinceId: string }) {
    const { averages, list, list2 } = await fetchCardData(provinceId);
    return (
        <>
            {averages && list.length != 0 && <>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <CardWrapper averages={averages} />
                </div>
                <div className="mt-6">
                    <GasStationList list={list2} />
                </div>
                <div>
                    <Map posix={[40.416775, -3.703790]} list={list2} />
                </div>
            </>}
        </>
    );
}
