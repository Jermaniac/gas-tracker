import { APIGasolineResponse, GasStation, Revenue, SPANISH_PROVINCES_CODES } from './definitions';

export const formatResponseGasolinePrices = (response: APIGasolineResponse) => {
  const { gasStationInfo } = response;

  // maybe this could be done in backend
  const gas95E5 = formatGasolinePrice(gasStationInfo.gas95E5?.average ?? 0);
  const gas98E5 = formatGasolinePrice(gasStationInfo.gas98E5?.average ?? 0);
  const gas95E10 = formatGasolinePrice(gasStationInfo.gas95E10?.average ?? 0);
  const gas98E10 = formatGasolinePrice(gasStationInfo.gas98E10?.average ?? 0);
  const biodiesel = formatGasolinePrice(gasStationInfo.biodiesel?.average ?? 0);
  const bioetanol = formatGasolinePrice(gasStationInfo.bioetanol?.average ?? 0);
  const gasNaturalComprimido = formatGasolinePrice(gasStationInfo.gasNaturalComprimido?.average ?? 0);
  const gasNaturalLicuado = formatGasolinePrice(gasStationInfo.gasNaturalLicuado?.average ?? 0);
  const gasesLicuadosPetroleo = formatGasolinePrice(gasStationInfo.gasesLicuadosPetroleo?.average ?? 0);
  const gasoleoA = formatGasolinePrice(gasStationInfo.gasoleoA?.average ?? 0);
  const gasoleoB = formatGasolinePrice(gasStationInfo.gasoleoB?.average ?? 0);
  const gasoleoPremium = formatGasolinePrice(gasStationInfo.gasoleoPremium?.average ?? 0);
  const hidrogeno = formatGasolinePrice(gasStationInfo.hydrogen?.average ?? 0);
  
  const averages = { 
    gas95E5, 
    gas98E5, 
    gas95E10, 
    gas98E10, 
    biodiesel, 
    bioetanol, 
    gasNaturalComprimido, 
    gasNaturalLicuado, 
    gasesLicuadosPetroleo, 
    gasoleoA, 
    gasoleoB, 
    gasoleoPremium, 
    hidrogeno 
  };


  return gasStationInfo
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

export const sortProvinces = (query: string) => {
  return Object.entries(SPANISH_PROVINCES_CODES)
    .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
    .filter(([, name]) => name.toLowerCase().includes(query.toLowerCase()))
}
