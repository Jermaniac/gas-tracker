'use client';

import { SPANISH_PROVINCES_CODES } from "@/app/lib/definitions";
import { useRouter, usePathname } from "next/navigation";


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

export default function ProvincesDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const provinceId = pathname.split('/').pop();


  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProvinceId = e.target.value;
    router.push(`/dashboard/${selectedProvinceId}`);
  };
  return (
    <select
      className="flex justify-center mb-4 p-2 border rounded"
      onChange={handleProvinceChange}
      value={provinceId}
    >
      {Object.entries(SPANISH_PROVINCES_CODES).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
}
