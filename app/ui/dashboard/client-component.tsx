'use client';

import { useState } from 'react';
import CardWrapper from './cards'; // Import the server-side component
import { FUEL_TYPES } from '@/app/lib/constants';
import { GasStation } from '@/app/lib/definitions';
import GasStationList from './gas-station-list';

interface ClientComponentProps {
    averages: Record<string, string>;
    list: GasStation[]
}

const ClientComponent: React.FC<ClientComponentProps> = ({ averages, list }) => {
    const [selectedFuelType, setSelectedFuelType] = useState<string>('gas95E5');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFuelType(event.target.value);
    };

    return (
        <>
            <select name="fuelTypes" id="fuelTypes" onChange={handleSelectChange} value={selectedFuelType}>
                {Object.keys(averages).map((key: string) => (
                    <option key={key} value={key}>
                        {FUEL_TYPES[key]}
                    </option>
                ))}
            </select>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <CardWrapper average={averages[selectedFuelType] || 'No Data'} />
            </div>
            <div className="mt-6">
                <GasStationList list={list[selectedFuelType]} />
            </div>
        </>
    );
};

export default ClientComponent;
