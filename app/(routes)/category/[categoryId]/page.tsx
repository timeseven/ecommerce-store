import React, { useEffect } from "react";

import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import ProductCard from "@/components/product-card";
import NoResults from "@/components/no-result";

import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";

import { CategoryPageProps } from "@/lib/interface";

import productServices from "@/services/productServices";
import sizeServices from "@/services/sizeServices";
import colorServices from "@/services/colorServices";
import categoryService from "@/services/categoryServices";

const CategoryPage: React.FC<CategoryPageProps> = async ({ params, searchParams }) => {
  const products = await productServices.getProducts({
    categoryId: params.categoryId,
    // colorId: searchParams.colorId,
    // sizeId: searchParams.sizeId,
  });
  const sizes = await sizeServices.getSizes();
  const colors = await colorServices.getColors();
  const category = await categoryService.getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        {category.billboard && <Billboard data={category.billboard} />}
        <div className="pt-4 px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div> */}
            <div className="mt-6 lg:col-span-8 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
