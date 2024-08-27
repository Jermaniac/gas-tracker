'use client';

import { FUEL_TYPES } from '@/app/lib/constants';
import { GasStationInfo } from '@/app/lib/definitions';
import { lusitana } from '@/app/ui/fonts';

export default function FuelTypeDropdown ({ keys, setter }: { keys: string[], setter: React.Dispatch<React.SetStateAction<keyof GasStationInfo>> }) {
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setter(event.target.value as keyof GasStationInfo);
    };

    return (
        <div className="mb-6 flex items-center">
            <label htmlFor="fuelTypes" className={`${lusitana.className} hidden truncate text-md text-gray-700 mr-4 sm:block`}>
                Your fuel type:
            </label>
            <select
                className={`${lusitana.className} text-md w-56 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                id="fuelTypes"
                onChange={handleSelectChange}
            >
                {keys.map((key: string) => (
                    <option key={key} value={key}>
                        {FUEL_TYPES[key]}
                    </option>
                ))}
            </select>
        </div>
    );
};
