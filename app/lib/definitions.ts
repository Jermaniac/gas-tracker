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
  data:           GasStation[];
  gas_95_e10_avg: number | null;
  gas_95_e5_avg:  number | null;
  gas_98_e10_avg: number | null;
  gas_98_e5_avg:  number | null;
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
  "Precio Biodiesel":                   string;
  "Precio Bioetanol":                   string;
  "Precio Gas Natural Comprimido":      string;
  "Precio Gas Natural Licuado":         string;
  "Precio Gases licuados del petróleo": string;
  "Precio Gasoleo A":                   string;
  "Precio Gasoleo B":                   string;
  "Precio Gasoleo Premium":             string;
  "Precio Gasolina 95 E10":             number;
  "Precio Gasolina 95 E5":              number;
  "Precio Gasolina 95 E5 Premium":      string;
  "Precio Gasolina 98 E10":             number;
  "Precio Gasolina 98 E5":              number;
  "Precio Hidrogeno":                   string;
  Provincia:                            string;
  Remisión:                             string;
  Rótulo:                               string;
  "Tipo Venta":                         string;
}
