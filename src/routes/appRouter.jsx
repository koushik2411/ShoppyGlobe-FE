import React, { lazy, Suspense } from "react";

import { createBrowserRouter } from "react-router-dom";

import Loader from "../components/Loader";

const Home = lazy(() => import("../pages/Home"));

const ProductDetail = lazy(() => import("../pages/ProductDetails"));

const Cart = lazy(() => import("../pages/Cart"));

const Checkout = lazy(() => import("../pages/Checkout"));

const NotFound = lazy(() => import("../pages/NotFound"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    ),
  },

  {
    path: "/product/:id",
    element: (
      <Suspense fallback={<Loader />}>
        <ProductDetail />
      </Suspense>
    ),
  },

  {
    path: "/cart",
    element: (
      <Suspense fallback={<Loader />}>
        <Cart />
      </Suspense>
    ),
  },

  {
    path: "/checkout",
    element: (
      <Suspense fallback={<Loader />}>
        <Checkout />
      </Suspense>
    ),
  },

  {
    path: "*",
    element: (
      <Suspense fallback={<Loader />}>
        <NotFound />
      </Suspense>
    ),
  },
]);
