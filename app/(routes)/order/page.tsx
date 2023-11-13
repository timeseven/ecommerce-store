"use client;";

import React from "react";
import { addDays, format } from "date-fns";
import orderServices from "@/services/orderServices";
import Container from "@/components/ui/container";
import { Truck } from "lucide-react";
import OrderItemCard from "@/components/order-item-card";

const Order = async () => {
  const orders = await orderServices.getOrders({ isPaid: true });
  console.log(orders);
  return (
    <div className="bg-white">
      <Container>
        <h1 className="mt-10 flex items-center">
          <Truck className="text-green-400" size={25} />
          <span className="ml-4 text-lg">Orders</span>
        </h1>
        <div className="mt-5 ml-10">
          {orders.map((order) => (
            <div key={order.id}>
              <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">Order Id:</h3>
                <div>{order.id}</div>
              </div>
              <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">Delivery Address:</h3>
                <div>{order.address}</div>
              </div>
              <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">Total Price:</h3>
                <div>AUD ${order.totalPrice}</div>
              </div>
              <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">Order Created:</h3>
                <div>{format(new Date(order.createdAt), "MMM dd, yyyy")}</div>
              </div>
              <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">Delivery Time:</h3>
                <div>{format(addDays(new Date(order.createdAt), 3), "MMM dd, yyyy")}</div>
              </div>
              <div className="flex items-center gap-x-4">
                {order.orderItems.map((item, index) => (
                  <OrderItemCard key={index} data={item.product} />
                ))}
              </div>
              <hr className="my-2" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Order;
