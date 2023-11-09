import { Billboard } from "@/lib/interface";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

const billboardServices = { getBillboard };

export default billboardServices;
