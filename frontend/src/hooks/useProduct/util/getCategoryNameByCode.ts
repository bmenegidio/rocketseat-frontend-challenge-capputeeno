type categoryCodes = 't-shirts' | 'mugs';

export function getCategoryNameByCode(categoryCode: string) {
  const categoryParse = {
    't-shirts': 'Camiseta',
    mugs: 'Caneca',
  };

  return categoryParse[categoryCode as categoryCodes] ?? categoryCode;
}
