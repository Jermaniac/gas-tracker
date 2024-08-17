import { fetchCardData } from '@/app/lib/data';
import dynamic from 'next/dynamic';
import CardWrapper from './cards';
import GasStationList from './gas-station-list';
import { FUEL_TYPES } from '@/app/lib/constants';
import ClientComponent from './client-component';

const Map = dynamic(() => import('../map/index'), { ssr: false });

export default async function GasPricesInfo ({ provinceId }: { provinceId: string }) {
    const { averages, list } = await fetchCardData(provinceId);
    return (
        <>
            {averages && list.length != 0 && <>
                <ClientComponent averages={averages} list={list}></ClientComponent>
                {/* <div className="mt-6">
                    <GasStationList list={list} />
                </div>
                <div>
                    <Map posix={[40.416775, -3.703790]} list={list} />
                </div> */}
            </>}
        </>
    );
}
