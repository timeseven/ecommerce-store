import qs from "query-string";
import { Order, OrderQuery } from "@/lib/interface";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/orders`;

const getOrders = async (query: OrderQuery): Promise<Order[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      isPaid: query.isPaid,
    },
  });
  const res = await fetch(url);
  return res.json();
};

const orderServices = { getOrders };

export default orderServices;
