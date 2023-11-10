import { Category } from "@/lib/interface";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);
  console.log("getCategories");
  return res.json();
};

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

const categoryService = { getCategories, getCategory };

export default categoryService;
