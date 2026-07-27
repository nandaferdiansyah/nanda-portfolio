import Sidebar from "./sidebar";

const Layouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-12">
      <div className="mx-auto flex flex-col lg:flex-row lg:gap-5 lg:py-4">
        <Sidebar />
        <main className="max-w-[854px] pb-16 pt-28 transition-all duration-300 lg:w-4/5 lg:pt-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layouts;
