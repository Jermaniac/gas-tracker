// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type APIGasolineResponse = {
  gasStationInfo: GasStationInfo;
}

export type GasStationInfo = {
  gas95E5: FuelPrice;
  gas98E5: FuelPrice;
  gas95E10: FuelPrice;
  gas98E10: FuelPrice;
  biodiesel: FuelPrice;
  bioetanol: FuelPrice;
  gasNaturalComprimido: FuelPrice;
  gasNaturalLicuado: FuelPrice;
  gasesLicuadosPetroleo: FuelPrice;
  gasoleoA: FuelPrice;
  gasoleoB: FuelPrice;
  gasoleoPremium: FuelPrice;
  hydrogen: FuelPrice;
  gas95E5Premium: FuelPrice;
};

export type FuelPrice = {
  bestStations: GasStation[];
  average: number;
  totalStations: number
}

export type GasStation = {
  address: string;
  autonomousCommunityId: string;
  bioethanolPercentage: string;
  hours: string;
  latitude: string;
  locality: string;
  longitude: string;
  margin: string;
  methylEsterPercentage: string;
  municipality: string;
  municipalityId: string;
  postalCode: string;
  price95E10: number;
  price95E5: number;
  price95E5Premium: number;
  price98E10: number;
  price98E5: number;
  priceBiodiesel: number;
  priceBioethanol: number;
  priceGasNaturalComprimido: number;
  priceGasNaturalLicuado: number;
  priceGasesLicuadosPetroleo: number;
  priceGasoleoA: number;
  priceGasoleoB: number;
  priceGasoleoPremium: number;
  priceHydrogen: number;
  province: string;
  provinceId: string;
  saleType: string;
  stationId: string;
  stationName: string;
  submission: string;
};


export const SPANISH_PROVINCES_CODES: { [key: string]: string } = {
  "01": "Álava",
  "02": "Albacete",
  "03": "Alicante",
  "04": "Almería",
  "05": "Ávila",
  "06": "Badajoz",
  "07": "Baleares",
  "08": "Barcelona",
  "09": "Burgos",
  "10": "Cáceres",
  "11": "Cádiz",
  "12": "Castellón",
  "13": "Ciudad Real",
  "14": "Córdoba",
  "15": "A Coruña",
  "16": "Cuenca",
  "17": "Girona",
  "18": "Granada",
  "19": "Guadalajara",
  "20": "Guipúzcoa",
  "21": "Huelva",
  "22": "Huesca",
  "23": "Jaén",
  "24": "León",
  "25": "Lleida",
  "26": "La Rioja",
  "27": "Lugo",
  "28": "Madrid",
  "29": "Málaga",
  "30": "Murcia",
  "31": "Navarra",
  "32": "Ourense",
  "33": "Asturias",
  "34": "Palencia",
  "35": "Las Palmas",
  "36": "Pontevedra",
  "37": "Salamanca",
  "38": "Santa Cruz de Tenerife",
  "39": "Cantabria",
  "40": "Segovia",
  "41": "Sevilla",
  "42": "Soria",
  "43": "Tarragona",
  "44": "Teruel",
  "45": "Toledo",
  "46": "Valencia",
  "47": "Valladolid",
  "48": "Vizcaya",
  "49": "Zamora",
  "50": "Zaragoza",
  "51": "Ceuta",
  "52": "Melilla"
};
