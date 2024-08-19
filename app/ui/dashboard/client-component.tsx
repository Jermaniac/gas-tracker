'use client';

import { useState } from 'react';
import CardWrapper from './cards';
import { FUEL_TYPES } from '@/app/lib/constants';
import { GasStation, GasStationInfo } from '@/app/lib/definitions';
import GasStationList from './gas-station-list';
import dynamic from 'next/dynamic';
import Map from '../map';

type GasStationInfoKeys = keyof GasStationInfo;

interface ClientComponentProps {
    data: GasStationInfo
}

const ClientComponent: React.FC<ClientComponentProps> = ({ data }) => {
    const [selectedFuelType, setSelectedFuelType] = useState<GasStationInfoKeys>('gas95E5');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFuelType(event.target.value as GasStationInfoKeys);
    };

    return (
        <>
            <select className="mb-6" id="fuelTypes" onChange={handleSelectChange} value={selectedFuelType}>
                {Object.keys(data).map((key: string) => (
                    <option key={key} value={key}>
                        {FUEL_TYPES[key]}
                    </option>
                ))}
            </select>
            <div className="grid gap-6">
                <CardWrapper average={data[selectedFuelType].average} />
            </div>
            <div className="mt-6">
                <GasStationList list={data[selectedFuelType].bestStations} selectedFuel={selectedFuelType as keyof GasStation} />
            </div>
            <div>
                <Map posix={[40.416775, -3.703790]} list={data[selectedFuelType].bestStations} />
            </div>
        </>
    );
};

export default ClientComponent;
