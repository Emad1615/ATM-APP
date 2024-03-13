export function ConvertCurrency(number) {
  return new Intl.NumberFormat("us", {
    style: "currency",
    currency: "USD",
  }).format(number);
}
