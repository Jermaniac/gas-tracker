import { APIGasolineResponse, GasStation, Revenue } from './definitions';

export const sortGasStationListByPriceType = (list: GasStation[]) => {
  return list.filter((gs) => typeof gs['Precio Gasolina 95 E5'] === 'number' && gs['Precio Gasolina 95 E5'] !== 0)
             .sort((a, b) => {
               if (typeof a['Precio Gasolina 95 E5'] === 'number' && typeof b['Precio Gasolina 95 E5'] === 'number') {
                 return a['Precio Gasolina 95 E5'] - b['Precio Gasolina 95 E5'];
               }
               return 0;
             });
}

export const formatResponseGasolinePrices = (response: APIGasolineResponse) => {
  const { info } = response;
  // const list = info.stations;

  const list = sortGasStationListByPriceType(info.stations);

  const list2 = [...list]

  const avgPrice95E5 = formatGasolinePrice(info.averages.g95_e5_avg_price ?? 0);
  const avgPrice98E5 = formatGasolinePrice(info.averages.g98_e5_avg_price ?? 0);
  const avgPrice95E10 = formatGasolinePrice(info.averages.g95_e10_avg_price ?? 0);
  const avgPrice98E10 = formatGasolinePrice(info.averages.g98_e10_avg_price ?? 0);
  const avgPriceBiodiesel = formatGasolinePrice(info.averages.biodiesel_avg_price ?? 0);
  const avgPriceBioetanol = formatGasolinePrice(info.averages.bioetanol_avg_price ?? 0);
  const avgPriceGasNaturalComprimido = formatGasolinePrice(info.averages.gas_natural_comprimido_avg_price ?? 0);
  const avgPriceGasNaturalLicuado = formatGasolinePrice(info.averages.gas_natural_licuado_avg_price ?? 0);
  const avgPriceGasesLicuadosPetroleo = formatGasolinePrice(info.averages.gases_licuados_petroleo_avg_price ?? 0);
  const avgPriceGasoleoA = formatGasolinePrice(info.averages.gasoleo_a_avg_price ?? 0);
  const avgPriceGasoleoB = formatGasolinePrice(info.averages.gasoleo_b_avg_price ?? 0);
  const avgPriceGasoleoPremium = formatGasolinePrice(info.averages.gasoleo_premium_avg_price ?? 0);
  const avgPriceHidrogeno = formatGasolinePrice(info.averages.hidrogeno_avg_price ?? 0);

  const averages = { 
    avgPrice95E5, 
    avgPrice98E5, 
    avgPrice95E10, 
    avgPrice98E10, 
    avgPriceBiodiesel, 
    avgPriceBioetanol, 
    avgPriceGasNaturalComprimido, 
    avgPriceGasNaturalLicuado, 
    avgPriceGasesLicuadosPetroleo, 
    avgPriceGasoleoA, 
    avgPriceGasoleoB, 
    avgPriceGasoleoPremium, 
    avgPriceHidrogeno 
  }

  return { averages, list, list2}
}

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
  if (currentPage > 2 && currentPage < totalPages - 1){
    return [
      1,
      currentPage-1,
      currentPage,
      currentPage+1,
      totalPages
    ];
  }
  if (currentPage === totalPages - 1 || currentPage === totalPages) {
    const isLastPage = currentPage === totalPages
    return [
      1,
      isLastPage ? currentPage - 2 : currentPage - 1,
      isLastPage ? currentPage - 1 : currentPage,
      totalPages,
    ];
  }
  
  return [
      1,
      2,
      3,
      totalPages,
  ]
}
