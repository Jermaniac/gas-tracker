import {
  BanknotesIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

const iconMap = {
  price: BanknotesIcon,
  pending: ClockIcon,
};

export default function CardWrapper ({ average }: { average: string }) {
  return (
    <>
      {average && <>
        <Card title="Average Price Card" value={average} />
      </>}
    </>
  );
}

export function Card ({
  title,
  value
}: {
  title: string;
  value: number | string;
}) {
  const type = value === 'No Data' ? 'pending' : 'price'
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
