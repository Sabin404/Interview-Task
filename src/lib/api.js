const BASE_URL = "https://fakeapi.net";

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/products/categories`, {
    cache: "no-store",
  });

  const data = await res.json();
  // console.log(data);

  return data;
}

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products?limit=20`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data.data;
}
