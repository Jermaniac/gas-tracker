import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import DashboardSkeleton from '@/app/ui/skeletons';
import GasPricesInfo from '@/app/ui/dashboard/gaspricesinfo';
import { SPANISH_PROVINCES_CODES } from '@/app/lib/definitions';

export default function Page({ params }: { params: { provinceId: string } }) {
    const provinceName = SPANISH_PROVINCES_CODES[params.provinceId]
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard {provinceName}
            </h1>
            <div>
                <Suspense fallback={<DashboardSkeleton />}>
                    <GasPricesInfo provinceId={params.provinceId} />
                </Suspense>
            </div>
        </main >
    );
}
