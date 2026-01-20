import Image from "next/image";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import { getCategories, getProducts } from "@/lib/api";
import ProductSection from "@/components/ProductSection";
import Subscribe from "@/components/Subscribe";

export default async function Home() {
  // const page = parseInt(searchParams.page) || 1;
  // const limit = parseInt(searchParams.limit) || 20;
  // console.log(page, limit);

  const categories = await getCategories();
  const products = await getProducts();
  // console.log(products);

  return (
    <>
      <Hero />
      <CategorySection categories={categories} />
      <ProductSection products={products} />
      <Subscribe />
    </>
  );
}
