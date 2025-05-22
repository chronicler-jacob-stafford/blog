export default function PageWrapper({ children }: { children: React.ReactElement }) {
  return (
    <div className="flex w-full min-h-screen">
      <div className="hidden lg:flex w-full max-w-[1fr] border-r border-dashed"></div>

      <div className="flex flex-col justify-center items-center w-full max-w-[1260px] px-6 py-12 shrink-0">
          {children}
      </div>

      <div className="hidden lg:flex w-full max-w-[1fr] border-l border-dashed"></div>
    </div>
  );
}