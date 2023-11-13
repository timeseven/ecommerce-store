import qs from "query-string";

import { Billboard, Query } from "@/lib/interface";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getHomepageBillboards = async (query: Query): Promise<Billboard[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};

const getBillboards = async (): Promise<Billboard> => {
  const res = await fetch(URL);
  return res.json();
};
const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);
  return res.json();
};

const billboardServices = { getBillboards, getBillboard, getHomepageBillboards };

export default billboardServices;
