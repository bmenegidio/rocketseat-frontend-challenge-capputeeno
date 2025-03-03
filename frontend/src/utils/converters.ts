export function convertPriceInCentsToBrl(priceInCents: number) {
  const formattedValue = priceInCents / 100;
  return formattedValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
