import Header from "@/components/header/Header";

export default function PageWrapper({children} : {children: React.ReactElement}) {
  return (
  <>
<div className="flex justify-center w-full border-b border-dashed">
  <div className="hidden lg:block grow border-r border-dashed"></div>

  <div className="w-full max-w-[1260px]">
    <Header />
    <div className="p-6">
      {children}
    </div>
  </div>

  <div className="hidden lg:block grow border-l border-dashed"></div>
</div>
  </>
  );
}