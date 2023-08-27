const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-end justify-center">
      <div className="relative isolate">
        <h2 className="text-3xl md:text-4xl lg:text-[46px]/[46px] font-extrabold -tracking-[.18px]">
          {title}
        </h2>
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-accent/30 z-[-1] -rotate-2 origin-left"></div>{" "}
      </div>
    </div>
  );
};

export default SectionTitle;
