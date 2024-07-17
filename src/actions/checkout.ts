"use server";
import Stripe from "stripe";

import { CartProduct } from "@/providers/cart";
import { NextResponse } from "next/server";

export const createCheckout = async (productsJSON: string, orderId: string) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  });
  const products: CartProduct[] = JSON.parse(productsJSON);
  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ["card", "boleto"],
    mode: "payment",
    success_url: process.env.HOST_URL,
    cancel_url: process.env.HOST_URL,
    metadata: { orderId },
    line_items: products.map((product) => {
      return {
        price_data: {
          currency: "BRL",
          product_data: {
            name: product.name,
            description: product.description,
            images: product.image_urls,
          },
          unit_amount: product.totalPrice * 100,
        },
        quantity: product.quantity,
      };
    }),
  });
  return JSON.stringify(checkout);
};
