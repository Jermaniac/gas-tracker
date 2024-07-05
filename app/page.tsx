import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col justify-center items-center gap-4 md:flex-row">
        <div className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-10 max-w-xs md:w-2/5 md:px-20 md:max-w-md">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-2xl md:leading-normal`}>
            <strong className="text-3xl">Gas Tracker</strong> <br/>
            This is a dashboard app where you can find real gasoline prices from every spanish province.
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Select a Province</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}
