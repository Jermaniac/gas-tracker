'use client';

import { useEffect, useState } from 'react';
import CardWrapper from './cards';
import { FuelPrice, GasStation, GasStationInfo } from '@/app/lib/definitions';
import GasStationList from './gas-station-list';
import FuelTypeDropdown from './fueltype-dropdown';

type GasStationInfoKeys = keyof GasStationInfo;

interface ClientComponentProps {
    data: GasStationInfo
}

const ClientComponent: React.FC<ClientComponentProps> = ({ data }) => {
    const [selectedFuelType, setSelectedFuelType] = useState<GasStationInfoKeys>('gas95E5');
    const [dataFromFuelType, setDataFromFuelType] = useState<FuelPrice>()
    const keysFromData = Object.keys(data)
    console.log(selectedFuelType)

    useEffect(() => {
        const realData = data[selectedFuelType]
        setDataFromFuelType(realData)
    }, [selectedFuelType])
    return (
        <>
            <FuelTypeDropdown keys={keysFromData} setter={setSelectedFuelType} />
            {
                dataFromFuelType && (
                    <div className="grid gap-6">
                        <CardWrapper average={dataFromFuelType.average} />
                        <div className="mt-6 flex flex-col md:flex-row">
                            <GasStationList list={dataFromFuelType.bestStations} selectedFuel={selectedFuelType as keyof GasStation} />
                        </div>
                    </div>)
            }


        </>
    );
};

export default ClientComponent;
