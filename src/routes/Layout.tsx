import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
