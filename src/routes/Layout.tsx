import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="bg-black text-white min-h-screen ">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-y-0 left-0 right-0">
          <div className="absolute inset-y-0 left-[20%] w-[0.1px] bg-gray-900" />
          <div className="absolute inset-y-0 left-[40%] w-[0.1px] bg-gray-900" />
          <div className="absolute inset-y-0 left-[60%] w-[0.1px] bg-gray-900" />
          <div className="absolute inset-y-0 left-[80%] w-[0.1px] bg-gray-900" />
        </div>
      </div>

      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
