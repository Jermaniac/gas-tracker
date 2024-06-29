import React from 'react';

type Province = {
    id: number;
    name: string;
};

const provinces: Province[] = [
    { id: 12, name: 'Province 12' },
    { id: 34, name: 'Province 34' },
    // Add more provinces as needed
];

export default async function ProvincesDropdown({ onChange }: { onChange: (provinceId: number) => void }) {
    return (
        <select onChange={(e) => onChange(Number(e.target.value))}>
            {provinces.map((province) => (
                <option key={province.id} value={province.id}>
                    {province.name}
                </option>
            ))}
        </select>
    );
};
