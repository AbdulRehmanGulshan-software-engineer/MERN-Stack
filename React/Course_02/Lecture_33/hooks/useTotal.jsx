export default function useTotal(expenses) {
  let total = 0;
  for (let x of expenses) {
    total += x.amount;
  }
  return total;
}
