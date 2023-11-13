import React from "react";

import Info from "@/components/info";
import Gallery from "@/components/gallery";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import { ProductPageProps } from "@/lib/interface";

import productServices from "@/services/productServices";

export const revalidate = 0;

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await productServices.getProduct(params.productId);
  const suggestedProducts = await productServices.getProducts({
    categoryId: product?.category?.id,
  });
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Gallery */}
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {/* Info */}
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
