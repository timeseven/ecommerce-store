import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";

import billboardServices from "@/services/billboardServices";
import productServices from "@/services/productServices";

export const revalidate = 0;

const Home = async () => {
  const products = await productServices.getProducts({ isFeatured: true });
  const billboards = await billboardServices.getHomepageBillboards({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        {billboards && <Billboard data={billboards} />}
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
