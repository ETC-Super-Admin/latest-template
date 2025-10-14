// example of implementing product services with tanstack/react-query to handle product data fetching and caching
import { QueryClient } from "@tanstack/react-query";
import { PageCursor, Product, ProductsResponse } from "./types";
import productsData from "./data/product.json";

// Interface for query parameters
interface ProductQueryParams {
  cursor?: number;
  pageSize?: number;
  organizeId?: number;
  classificationId?: number;
  sort?: "newest" | "oldest" | "high" | "low";
  categoryId?: number;
  limiter?: number;
}

// Function to fetch products (now using local JSON data)
export async function fetchProducts(
  params: ProductQueryParams = {},
): Promise<ProductsResponse> {
  try {
    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 500));

    let products: Product[] = productsData as unknown as Product[];

    // Simulate limiter for featured products
    if (params.limiter) {
      products = products.slice(0, params.limiter);
    }

    // Return data in the expected format
    return {
      products: products,
      totalCount: products.length,
      totalPage: 1,
      pageCursor: [],
    };
  } catch (error) {
    throw new Error(`Unable to fetch products: ${(error as Error).message}`);
  }
}

// Function to prefetch product data
export async function prefetchProducts(
  queryClient: QueryClient,
  params: ProductQueryParams = {},
) {
  await queryClient.prefetchQuery({
    queryKey: ["products", params],
    queryFn: () => fetchProducts(params),
  });
}

// Function to preload images
export async function preloadImages(products: Product[]) {
  if (typeof window === "undefined" || !window.Image) {
    return;
  }

  const imagePromises = products
    .map((product) => product.imageCoverPath)
    .filter((path): path is string => !!path)
    .map((path) => {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.src = path; // Use path directly
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

  await Promise.all(imagePromises);
}

// Function to fetch a single product by id or productId from local data
export async function fetchProductByIdOrProductId({
  id,
  productId,
}: {
  id?: number;
  productId?: string;
}): Promise<Product> {
  if (!id && !productId) {
    throw new Error("Either 'id' or 'productId' must be provided.");
  }

  // Simulate async operation
  await new Promise((resolve) => setTimeout(resolve, 100));

  const product = (productsData as unknown as Product[]).find(
    (p) =>
      (id !== undefined && p.id === id) ||
      (productId !== undefined && p.productId.trim() === productId.trim()),
  );

  if (!product) {
    throw new Error("Product not found or invalid response.");
  }
  return product;
}
