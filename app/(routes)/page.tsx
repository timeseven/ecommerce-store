import Image from "next/image";

import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";

import billboardServices from "@/services/billboardServices";
import productServices from "@/services/productServices";

const Home = async () => {
  const products = await productServices.getProducts({ isFeatured: true });
  const billboard = await billboardServices.getBillboard("b749a4b8-2d4b-4493-a5c7-72eae6973229");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};

export default Home;
