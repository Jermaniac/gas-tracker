'use client';

import { useRouter, usePathname } from "next/navigation";


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
interface SpanishPostalCodes {
  [key: number]: string;
}

const spanishPostalCodes: SpanishPostalCodes = {
  1: "Álava",
  2: "Albacete",
  3: "Alicante",
  4: "Almería",
  5: "Ávila",
  6: "Badajoz",
  7: "Baleares",
  8: "Barcelona",
  9: "Burgos",
  10: "Cáceres",
  11: "Cádiz",
  12: "Castellón",
  13: "Ciudad Real",
  14: "Córdoba",
  15: "A Coruña",
  16: "Cuenca",
  17: "Girona",
  18: "Granada",
  19: "Guadalajara",
  20: "Guipúzcoa",
  21: "Huelva",
  22: "Huesca",
  23: "Jaén",
  24: "León",
  25: "Lleida",
  26: "La Rioja",
  27: "Lugo",
  28: "Madrid",
  29: "Málaga",
  30: "Murcia",
  31: "Navarra",
  32: "Ourense",
  33: "Asturias",
  34: "Palencia",
  35: "Las Palmas",
  36: "Pontevedra",
  37: "Salamanca",
  38: "Santa Cruz de Tenerife",
  39: "Cantabria",
  40: "Segovia",
  41: "Sevilla",
  42: "Soria",
  43: "Tarragona",
  44: "Teruel",
  45: "Toledo",
  46: "Valencia",
  47: "Valladolid",
  48: "Vizcaya",
  49: "Zamora",
  50: "Zaragoza",
  51: "Ceuta",
  52: "Melilla"
};

export default function NavLinks() {
  const router = useRouter();
  const pathname = usePathname();
  const provinceId = pathname.split('/').pop();


  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProvinceId = e.target.value;
    router.push(`/dashboard/${selectedProvinceId}`);
  };
  return (
    <select
        className="mb-4 p-2 border rounded"
        onChange={handleProvinceChange}
        value={provinceId}
    >
        {Object.entries(spanishPostalCodes).map(([id, name]) => (
            <option key={id} value={id}>
                {name}
            </option>
        ))}
    </select>
);
}
