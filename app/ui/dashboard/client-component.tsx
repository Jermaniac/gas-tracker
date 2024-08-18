'use client';

import { useState } from 'react';
import CardWrapper from './cards'; // Import the server-side component
import { FUEL_TYPES } from '@/app/lib/constants';
import { GasStationInfo } from '@/app/lib/definitions';
import GasStationList from './gas-station-list';

interface ClientComponentProps {
    data: GasStationInfo
}

const ClientComponent: React.FC<ClientComponentProps> = ({ data }) => {
    const [selectedFuelType, setSelectedFuelType] = useState<string>('gas95E5');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFuelType(event.target.value);
    };

    return (
        <>
            <select name="fuelTypes" id="fuelTypes" onChange={handleSelectChange} value={selectedFuelType}>
                {Object.keys(data).map((key: string) => (
                    <option key={key} value={key}>
                        {FUEL_TYPES[key]}
                    </option>
                ))}
            </select>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <CardWrapper average={data[selectedFuelType].average || 'No Data'} />
            </div>
            <div className="mt-6">
                <GasStationList list={data[selectedFuelType].bestStations} selectedFuel={selectedFuelType} />
            </div>
        </>
    );
};

export default ClientComponent;
