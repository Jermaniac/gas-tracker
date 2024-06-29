'use client';

import React, { useState } from 'react';
import ProvincesDropdown from '@/app/ui/dashboard/dropdown';
import CardWrapper from '@/app/ui/dashboard/cards';
import { CardsSkeleton } from '@/app/ui/skeletons';

const ClientSideWrapper = () => {
    const [selectedProvince, setSelectedProvince] = useState<number>(28);

    return (
        <div>
            <h1 className="mb-4 text-xl md:text-2xl">
                <ProvincesDropdown onChange={setSelectedProvince} />
            </h1>
        </div>
    );
};

export default ClientSideWrapper;
