import { FC, lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import loadingGif from "./assets/loading/boxes-loader.gif"

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
(
  <Suspense fallback={
    <div
      className="d-flex justify-center align-center"
      style={{
        height: "100vh",
        // backgroundColor:"#fff",
        width: "100%",
        position: 'fixed',
        left: "0",
        top: "0",
      }}
    >
      {/* <Spin indicator={antIcon} /> */}
      <img src={loadingGif} width={60} alt="" />
    </div>
  }>
    <Component {...props} />
  </Suspense>
);
const MainLayout = Loadable(lazy(() => import("./layout/mainLayout")));
const LandingPage = Loadable(lazy(() => import("./pages/dashboard")));
const SignIn = Loadable(lazy(() => import("./pages/signIn")));
const SignUp = Loadable(lazy(() => import("./pages/signUp")));
const Chat = Loadable(lazy(() => import("./pages/chat")));

const PendingOrders = Loadable(lazy(() => import("./pages/orders/pendingOrders")));
const DeclineOrders = Loadable(lazy(() => import("./pages/orders/declineOrders")));
const CompletedOrders = Loadable(lazy(() => import("./pages/orders/completedOrders")));
const ProcessOrder = Loadable(lazy(() => import("./pages/processOrder")));

const MyProducts = Loadable(lazy(() => import("./pages/myProducts")));
const AddProduct = Loadable(lazy(() => import("./pages/addProduct")));

const StoreProfile = Loadable(lazy(() => import("./pages/storeProfile")));
const Packages = Loadable(lazy(() => import("./pages/sqPackages")));
const ProductVerification = Loadable(lazy(() => import("./pages/productVerification")));

const Marketing = Loadable(lazy(() => import("./pages/marketing")));


const EhbWallet = Loadable(lazy(() => import("./pages/ehbWallet")));


export const routes: any = [
  { path: "/", element: <Navigate to="home" /> },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <LandingPage />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "orders/pending-orders",
        element: <PendingOrders />,
      },
      {
        path: "orders/decline-orders",
        element: <DeclineOrders />,
      },
      {
        path: "orders/completed-orders",
        element: <CompletedOrders />,
      },
      {
        path: "process-order",
        element: <ProcessOrder />,
      },
      {
        path: "my-products",
        element: <MyProducts />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "store-settings",
        element: <StoreProfile />,
      },
      {
        path: "packages",
        element: <Packages />,
      },
      {
        path: "marketing",
        element: <Marketing />,
      },
      {
        path: "product-verification",
        element: <ProductVerification />,
      },
      {
        path: "ehb-wallet",
        element: <EhbWallet />,
      },
    ],
  },
];
