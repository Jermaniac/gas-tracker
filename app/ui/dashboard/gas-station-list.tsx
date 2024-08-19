import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';
import { GasStation } from '@/app/lib/definitions';
import { FUEL_TYPES } from '@/app/lib/constants';

export default function GasStationList ({ list, selectedFuel }: { list: GasStation[], selectedFuel: keyof GasStation }) {
  const gasStationsCount = list ? list.length : 0

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Cheapest Gas Stations By {FUEL_TYPES[selectedFuel]}
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {gasStationsCount && list.map((gasStation, i) => {
            return (
              <div
                key={`${gasStation.stationName}_${i}`}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {gasStation.stationName}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {gasStation.address}. {gasStation.locality}
                    </p>
                  </div>
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  {gasStation[selectedFuel]} €
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Showing {gasStationsCount} of {gasStationsCount} gas stations</h3>
        </div>
      </div>
    </div>
  );
}
