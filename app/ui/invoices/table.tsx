import { DashboardLink } from '@/app/ui/invoices/buttons';
import { sortProvinces } from '@/app/lib/utils';
import { ITEMS_PROVINCES_PER_PAGE } from '@/app/lib/constants';

export default function ProvincesTable ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const filteredPostalCodes = sortProvinces(query)

  const startIndex = (currentPage - 1) * ITEMS_PROVINCES_PER_PAGE;
  const endIndex = startIndex + ITEMS_PROVINCES_PER_PAGE;
  const paginatedPostalCodes = filteredPostalCodes.slice(startIndex, endIndex);

  return (
    <div className="mt-3 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {paginatedPostalCodes.map(([code, name]) => (
              <div
                key={code}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="mb-2 flex items-center">
                    <p>{name}</p>
                  </div>
                  <div className="mb-2 flex items-center">
                    <DashboardLink id={code} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Code
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Name
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {paginatedPostalCodes.map(([code, name]) => (
                <tr
                  key={code}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    {code}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {name}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <DashboardLink id={code} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
