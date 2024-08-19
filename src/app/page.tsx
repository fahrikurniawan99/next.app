import { ButtonAddProduct } from "@/components/button";
import { unstable_noStore } from "next/cache";
import Image from "next/image";
import { Suspense } from "react";

async function ProductList() {
  unstable_noStore();
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {data.products.map((product: any) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <main className="px-20 py-10">
      <div className="">
        <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
        <p className="mt-4 text-lg text-gray-600">
          Get started by editing <code>pages/index.tsx</code>
        </p>

        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={72}
          height={16}
          className="mt-10 mb-10"
        />
      </div>
      <Suspense fallback={<p className="">Loading...</p>}>
        <ProductList />
      </Suspense>
      <ButtonAddProduct />
    </main>
  );
}
