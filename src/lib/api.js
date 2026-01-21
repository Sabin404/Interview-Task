const BASE_URL = "https://fakeapi.net";

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/products/categories`, {
    cache: "no-store",
  });

  const data = await res.json();
  // console.log(data);

  return data;
}

export const LIMIT = 4;

export async function getProducts(page = 1) {
  const res = await fetch(`${BASE_URL}/products?limit=${LIMIT}&page=${page}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}
