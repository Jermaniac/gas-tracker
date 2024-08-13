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
  info: Info;
}

export type Info = {
  stations: GasStation[];
  averages: Averages;
}

export type Averages = {
  g95_e10_avg_price: number | null;
  g95_e5_avg_price:  number | null;
  g98_e10_avg_price: number | null;
  g98_e5_avg_price:  number | null;
  biodiesel_avg_price:        number | null;
  bioetanol_avg_price:        number | null;
  gas_natural_comprimido_avg_price: number | null;
  gas_natural_licuado_avg_price:   number | null;
  gases_licuados_petroleo_avg_price: number | null;
  gasoleo_a_avg_price:            number | null;
  gasoleo_b_avg_price:            number | null;
  gasoleo_premium_avg_price:      number | null;
  hidrogeno_avg_price:            number | null;
}

export type InfoFormated = {
  list: GasStation[];
  averages: AveragesFormated;
}

export type AveragesFormated = {
  avgPrice95E10: string;
  avgPrice95E5:  string;
  avgPrice98E10: string;
  avgPrice98E5:  string;
  avgPriceBiodiesel:       string;
  avgPriceBioetanol:       string;
  avgPriceGasNaturalComprimido: string;
  avgPriceGasNaturalLicuado:  string;
  avgPriceGasesLicuadosPetroleo: string;
  avgPriceGasoleoA:        string;
  avgPriceGasoleoB:        string;
  avgPriceGasoleoPremium:  string;
  avgPriceHidrogeno:       string;
}

export type GasStation = {
  "% BioEtanol":                        string;
  "% Éster metílico":                   string;
  "C.P.":                               string;
  Dirección:                            string;
  Horario:                              string;
  IDCCAA:                               string;
  IDEESS:                               string;
  IDMunicipio:                          string;
  IDProvincia:                          string;
  Latitud:                              string;
  Localidad:                            string;
  "Longitud (WGS84)":                   string;
  Margen:                               string;
  Municipio:                            string;
  "Precio Biodiesel":                   number;
  "Precio Bioetanol":                   number;
  "Precio Gas Natural Comprimido":      number;
  "Precio Gas Natural Licuado":         number;
  "Precio Gases licuados del petróleo": number;
  "Precio Gasoleo A":                   number;
  "Precio Gasoleo B":                   number;
  "Precio Gasoleo Premium":             number;
  "Precio Gasolina 95 E10":             number;
  "Precio Gasolina 95 E5":              number;
  "Precio Gasolina 95 E5 Premium":      string;
  "Precio Gasolina 98 E10":             number;
  "Precio Gasolina 98 E5":              number;
  "Precio Hidrogeno":                   number;
  Provincia:                            string;
  Remisión:                             string;
  Rótulo:                               string;
  "Tipo Venta":                         string;
}

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
