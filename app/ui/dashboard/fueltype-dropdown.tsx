'use client';

import { FUEL_TYPES } from '@/app/lib/constants';
import { GasStationInfo } from '@/app/lib/definitions';

export default function FuelTypeDropdown ({ keys, setter }: { keys: string[], setter: React.Dispatch<React.SetStateAction<keyof GasStationInfo>> }) {
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setter(event.target.value as keyof GasStationInfo);
    };

    return (
        <select className="mb-6" id="fuelTypes" onChange={handleSelectChange}>
            {keys.map((key: string) => (
                <option key={key} value={key}>
                    {FUEL_TYPES[key]}
                </option>
            ))}
        </select>
    );
};
