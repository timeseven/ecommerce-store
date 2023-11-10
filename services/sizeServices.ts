import { Size } from "@/lib/interface";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL);

  return res.json();
};

const sizeServices = { getSizes };

export default sizeServices;
