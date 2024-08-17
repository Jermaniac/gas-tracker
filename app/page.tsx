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
    <main className="flex min-h-screen flex-col items-center p-6 bg-gray-100">
      <section className="mt-6 flex flex-col w-full max-w-4xl bg-white rounded-lg shadow-lg md:flex-row">
        <aside className="flex flex-col items-center gap-6 p-8 bg-gray-50 rounded-t-lg md:rounded-l-lg md:rounded-tr-none md:w-1/3">
          <h2 className={`${lusitana.className} text-3xl font-bold text-gray-800 text-center`}>
            Gas Tracker
          </h2>
          <p className={`${lusitana.className} text-lg text-gray-700 text-center`}>
            Discover real-time gasoline prices across Spanish provinces.
          </p>
          <div className={`${lusitana.className}`}>
            <Search placeholder="Search province..." />
          </div>
        </aside>
        <section className="flex flex-col flex-grow p-6 md:p-8">
          <h1 className={`${lusitana.className} text-2xl font-semibold text-gray-800 mb-4`}>
            Select a Province
          </h1>
          <div>
            <Table query={query} currentPage={currentPage} />
          </div>
          <div className="mt-8 flex justify-center">
            <Pagination totalPages={7} />
          </div>
        </section>
      </section>
    </main>
  );
}
