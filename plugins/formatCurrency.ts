export default defineNuxtPlugin(() => {
  const formatCurrency = (value: number | string): string => {
    let numericValue =
      typeof value === "number" ? value : parseInt(value, 10) || 0;

    return new Intl.NumberFormat("id-ID", {
      //   style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(numericValue);
  };

  return {
    provide: {
      formatCurrency,
    },
  };
});
