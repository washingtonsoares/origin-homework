export function getMonthlyDeposits(totalAmount = 0, monthsAmount: number) {
  const monthlyDeposits = totalAmount / monthsAmount;

  return Math.ceil(monthlyDeposits);
}
