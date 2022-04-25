export const convertMoney = (money) => {
  return money.toFixed(0).toString().split(/(?=(?:\d{3})+(?:\.|$))/g).join('.') + '₫';
};
