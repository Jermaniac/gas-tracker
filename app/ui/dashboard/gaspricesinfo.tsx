import { fetchCardData } from '@/app/lib/data';
import CardWrapper from './cards';
import LatestInvoices from './latest-invoices';

export default async function GasPricesInfo({ provinceId }: { provinceId: number }) {
    const response = await fetchCardData(provinceId);
    return (
        <>
            {response && <>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <CardWrapper info={response} />
                </div>
                <LatestInvoices info={response} />
            </>}
        </>
    );
}
