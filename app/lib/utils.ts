import { APIGasolineResponse, GasStation, Revenue } from './definitions';

export const sortGasStationListByPriceType = (list: GasStation[], type: string) => {
  return list.filter((gs) => gs[type]!=0).sort((a,b) => a[type] - b[type])
}

export const formatResponseGasolinePrices = (response: APIGasolineResponse) => {
  const { info } = response;
  const list = sortGasStationListByPriceType(info.data)

  const avgPrice95E5 = formatGasolinePrice(info.g95_e5_avg_price ?? 0);
  const avgPrice98E5 = formatGasolinePrice(info.g98_e5_avg_price ?? 0);
  const avgPrice95E10 = formatGasolinePrice(info.g95_e10_avg_price ?? 0);
  const avgPrice98E10 = formatGasolinePrice(info.g98_e10_avg_price ?? 0);
  const avgPriceBiodiesel = formatGasolinePrice(info.biodiesel_avg_price ?? 0);
  const avgPriceBioetanol = formatGasolinePrice(info.bioetanol_avg_price ?? 0);
  const avgPriceNaturalComprimido = formatGasolinePrice(info.gas_natural_comprimido_avg_price ?? 0);
  const avgPriceNaturalLicuado = formatGasolinePrice(info.gas_natural_licuado_avg_price ?? 0);
  const avgPriceLicuadosPetroleo = formatGasolinePrice(info.gases_licuados_petroleo_avg_price ?? 0);
  const avgPriceGasoleoA = formatGasolinePrice(info.gasoleo_a_avg_price ?? 0);
  const avgPriceGasoleoB = formatGasolinePrice(info.gasoleo_b_avg_price ?? 0);
  const avgPriceGasoleoPremium = formatGasolinePrice(info.gasoleo_premium_avg_price ?? 0);
  const avgPriceHidrogeno = formatGasolinePrice(info.hidrogeno_avg_price ?? 0);

  return { 
    avgPrice95E5, 
    avgPrice98E5, 
    avgPrice95E10, 
    avgPrice98E10, 
    avgPriceBiodiesel, 
    avgPriceBioetanol, 
    avgPriceNaturalComprimido, 
    avgPriceNaturalLicuado, 
    avgPriceLicuadosPetroleo, 
    avgPriceGasoleoA, 
    avgPriceGasoleoB, 
    avgPriceGasoleoPremium, 
    avgPriceHidrogeno, 
    list 
  };}

export const formatGasolinePrice = (amount: number) => {
  return amount == 0 ? 'No Data' : formatCurrency(amount)
}

export const formatCurrency = (amount: number) => {
  return amount.toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR',
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const generateYAxis = (revenue: Revenue[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};
