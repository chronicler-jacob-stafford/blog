import Header from "@/components/header/Header";

export default function PageWrapper({children} : {children: React.ReactElement}) {
  return (
  <>
    <div className="flex justify-center w-full border-b-1 border-dashed">
      <div className="hidden lg:block grow border-r-1 border-dashed"></div>

      <div className="grow-6 pl-6 pr-6">
        <Header />
      </div>

      <div className="hidden lg:block grow border-l-1 border-dashed"></div>
    </div>

    <div className="flex justify-center w-full border-b-1 border-dashed">
      <div className="hidden lg:block grow border-r-1 border-dashed"></div>

      <div className="flex flex-col grow-6">
        <div className="w-full p-6"> 
          {children}
        </div>
      </div>

      <div className="hidden lg:block grow border-l-1 border-dashed"></div>
    </div>
  </>
  );
}