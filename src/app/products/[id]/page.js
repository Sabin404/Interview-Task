import Image from "next/image";
import img from "@/assets/phone.jpg";

const BASE_URL = "https://fakeapi.net";

async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`, { cache: "no-store" });
  const data = await res.json();
  return data;
}

export default async function ProductDetail({ params }) {
  const { id } = await params;
  const product = await getProductById(id);
  // console.log(product, id);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>

      <div className="flex flex-col md:flex-row gap-4">
        <Image
          src={img}
          alt={product.title}
          width={300}
          height={300}
          className="object-contain"
        />

        <div className="flex flex-col gap-2">
          <p>{product.description}</p>
          <p className="font-semibold">Price: ${product.price}</p>
          <p className="text-gray-500 capitalize">
            Category: {product.category}
          </p>
        </div>
      </div>
    </main>
  );
}
