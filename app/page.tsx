
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import Pagination from '@/app/ui/invoices/pagination';

export default async function Page ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col justify-center items-center gap-4 md:flex-row">
        <div className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-10 max-w-xs md:w-2/5 md:px-20 md:max-w-md">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-2xl md:leading-normal`}>
            <strong className="text-3xl">Gas Tracker</strong> <br />
            This is a dashboard app where you can find real gasoline prices from every spanish province.
          </p>
          <div className="w-full">
            <div className="flex w-full items-center justify-between">
              <h1 className={`${lusitana.className} text-2xl`}>Select a province to see stats</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
              <Search placeholder="Search spanish province..." />
            </div>
            <Table query={query} currentPage={currentPage} />
            <div className="mt-5 flex w-full justify-center">
              <Pagination totalPages={6} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
