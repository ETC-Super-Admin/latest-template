import { Product } from "@/features/products/types";

export function getLocalizedProductName(
  product: Product,
  locale: string,
): string {
  return (
    product.productNames.find((name) => name.languageCode === locale)?.name ||
    product.productNames[0]?.name ||
    "ไม่มีชื่อ"
  );
}
