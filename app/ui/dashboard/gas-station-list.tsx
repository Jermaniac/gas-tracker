import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';
import { GasStation } from '@/app/lib/definitions';
import { FUEL_TYPES } from '@/app/lib/constants';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../map/index'), { ssr: false })

export default function GasStationList ({ list, selectedFuel, totalStations }: { list: GasStation[], selectedFuel: keyof GasStation, totalStations: number }) {
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl p-2 md:text-2xl`}>
        Cheapest Gas Stations By {FUEL_TYPES[selectedFuel]}
      </h2>
      {list && (
        <div className="flex flex-col lg:flex-row bg-gray-50 lg:gap-6">
          <div className="flex grow flex-col justify-between rounded-xl p-4">
            <div className="bg-white px-6">
              {list && list.map((gasStation, i) => {
                return (
                  <div
                    key={`${gasStation.stationName}_${i}`}
                    className={clsx(
                      'flex flex-col sm:flex-row items-start sm:items-center justify-between py-4',
                      {
                        'border-t': i !== 0,
                      },
                    )}
                  >
                    <div className="text-sm">
                      <p className="truncate font-semibold sm:text-base">
                        {gasStation.stationName}
                      </p>
                      <p className="sm:block text-gray-500">
                        {gasStation.address}. {gasStation.locality}
                      </p>
                    </div>
                    <p
                      className={`${lusitana.className} mt-2 md:mt-0 truncate text-sm font-medium md:text-base`}
                    >
                      {gasStation[selectedFuel]} €
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center pb-2 pt-6">
              <ArrowPathIcon className="h-5 w-5 text-gray-500" />
              <h3 className="ml-2 text-sm text-gray-500">Showing {list.length} of {totalStations} gas stations</h3>
            </div>

          </div>
          <div className="w-full lg:w-2/5 p-4">
            <Map list={list} />

          </div>

        </div>)
      }
    </div>
  );
}
