import { getProductByIdFromStrapi } from "@/lib/strapi";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const product = await getProductByIdFromStrapi(id);

    if (!product) {
      return Response.json({ error: "Product not found" }, { status: 404 });
    }

    return Response.json({ data: product });
  } catch (error) {
    return Response.json(
      {
        error: "Unable to fetch product",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
