import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="bg-black text-white min-h-screen ">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-y-0 left-0 right-0">
          <div className="absolute inset-y-0 left-[20%] w-px overflow-hidden bg-[rgba(243,237,227,0.1)] after:absolute after:top-0 after:left-0 after:h-[18vh] after:w-full after:animate-[grid-line-shine_15s_linear_infinite] after:bg-[linear-gradient(to_bottom,transparent,rgba(243,237,227,1),transparent)] after:content-[''] nth-[1]:after:[animation-delay:1s] motion-reduce:after:animate-none" />
          <div className="absolute inset-y-0 left-[40%] w-px overflow-hidden bg-[rgba(243,237,227,0.1)] after:absolute after:top-0 after:left-0 after:h-[18vh] after:w-full after:animate-[grid-line-shine_15s_linear_infinite] after:bg-[linear-gradient(to_bottom,transparent,rgba(243,237,227,1),transparent)] after:content-[''] nth-[2]:after:[animation-delay:1.3s] motion-reduce:after:animate-none" />
          <div className="absolute inset-y-0 left-[60%] w-px overflow-hidden bg-[rgba(243,237,227,0.1)] after:absolute after:top-0 after:left-0 after:h-[18vh] after:w-full after:animate-[grid-line-shine_15s_linear_infinite] after:bg-[linear-gradient(to_bottom,transparent,rgba(243,237,227,1),transparent)] after:content-[''] nth-[3]:after:[animation-delay:1.6s] motion-reduce:after:animate-none" />
          <div className="absolute inset-y-0 left-[80%] w-px overflow-hidden bg-[rgba(243,237,227,0.1)] after:absolute after:top-0 after:left-0 after:h-[18vh] after:w-full after:animate-[grid-line-shine_15s_linear_infinite] after:bg-[linear-gradient(to_bottom,transparent,rgba(243,237,227,1),transparent)] after:content-[''] nth-[4]:after:[animation-delay:1.9s] motion-reduce:after:animate-none" />
        </div>
      </div>

      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
