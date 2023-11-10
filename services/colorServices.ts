import { Color } from "@/lib/interface";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL);

  return res.json();
};

const colorServices = { getColors };

export default colorServices;
