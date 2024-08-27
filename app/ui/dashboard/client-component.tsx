'use client';

import { useEffect, useState } from 'react';
import CardWrapper from './cards';
import { FuelPrice, GasStation, GasStationInfo, GasStationInfoKeys } from '@/app/lib/definitions';
import GasStationList from './gas-station-list';
import FuelTypeDropdown from './fueltype-dropdown';

interface ClientComponentProps {
    data: GasStationInfo,
    availableTypes: GasStationInfoKeys[]
}

const ClientComponent: React.FC<ClientComponentProps> = ({ data, availableTypes }) => {
    const [selectedFuelType, setSelectedFuelType] = useState<GasStationInfoKeys>(availableTypes[0]);
    const [dataFromFuelType, setDataFromFuelType] = useState<FuelPrice>()

    useEffect(() => {
        const realData = data[selectedFuelType]
        setDataFromFuelType(realData)
    }, [selectedFuelType])
    return (
        <>
            <FuelTypeDropdown keys={availableTypes} setter={setSelectedFuelType} />
            {
                dataFromFuelType && (
                    <div className="grid gap-6">
                        <CardWrapper average={dataFromFuelType.average} selectedFuel={selectedFuelType as keyof GasStation} />
                        <div className="mt-6 flex flex-col md:flex-row">
                            <GasStationList list={dataFromFuelType.bestStations} totalStations={dataFromFuelType.totalStations} selectedFuel={selectedFuelType as keyof GasStation} />
                        </div>
                    </div>)
            }
        </>
    );
};

export default ClientComponent;
