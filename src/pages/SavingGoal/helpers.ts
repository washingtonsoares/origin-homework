export function getMonthlyDeposits(totalAmount = 0, monthsAmount: number) {
  if (monthsAmount <= 0) {
    return 0;
  }

  const monthlyDeposits = totalAmount / monthsAmount;

  return Math.ceil(monthlyDeposits);
}
