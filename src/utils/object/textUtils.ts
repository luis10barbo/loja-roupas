export function formatCEP(cep: string) {
  let newCep = cep.replaceAll(/\D/g, "").substring(0, 8);
  if (newCep.length > 5)
    newCep = [newCep.slice(0, 5), "-", newCep.slice(5)].join("");
  return newCep;
}
