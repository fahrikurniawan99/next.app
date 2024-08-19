"use server";

export async function addProduct({ title }: { title: string }) {
  if (!title) {
    throw new Error("Title is required");
  }
  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      /* other product data */
    }),
  })
    .then((res) => res.json())
    .then(console.log);
}
