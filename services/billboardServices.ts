import { Billboard } from "@/lib/interface";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (): Promise<Billboard> => {
  const res = await fetch(URL);
  return res.json();
};
const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);
  return res.json();
};

const billboardServices = { getBillboards, getBillboard };

export default billboardServices;
