import { formatResponseGasolinePrices } from './utils';

async function fetchCurrentGasolinePrices(provinceId: string) {
  const res = await fetch(`${process.env.API_GASOLINE_PRICES}/province/${provinceId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function fetchCardData(provinceId: string) {
  try {
    const data = await fetchCurrentGasolinePrices(provinceId)
    const formatedData = formatResponseGasolinePrices(data);
    return formatedData;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}
