'use client';

import React, { useState } from 'react';
import ProvincesDropdown from '@/app/ui/dashboard/dropdown';
import CardWrapper from '@/app/ui/dashboard/cards';
import { CardsSkeleton } from '@/app/ui/skeletons';

const ClientSideWrapper = () => {
    const [selectedProvince, setSelectedProvince] = useState<number>(28);
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div>
            <h1 className="mb-4 text-xl md:text-2xl">
                <ProvincesDropdown onChange={setSelectedProvince} />
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {loading ? (
                    <CardsSkeleton />
                ) : (
                    <CardWrapper provinceId={selectedProvince} setLoading={setLoading} />
                )}
            </div>
        </div>
    );
};

export default ClientSideWrapper;
