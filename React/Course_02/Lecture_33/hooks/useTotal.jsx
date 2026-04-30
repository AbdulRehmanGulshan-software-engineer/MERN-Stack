export default function useTotal(expenses) {
  let total = 0;
  for (let x of expenses) {
    total += Number(x.amount);
  }
  return total;
}
