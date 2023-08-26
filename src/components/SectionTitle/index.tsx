const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-end gap-x-2 md:gap-x-3 relative">
      <div className="w-2 md:w-2.5"></div>
      <div className="absolute top-1/2 -translate-y-1/2 left-0 h-[90%] w-2 md:w-2.5 bg-accent/40"></div>
      <h2 className="text-3xl md:text-4xl lg:text-[46px]/[46px] font-extrabold -tracking-[.18px]">
        {title}
      </h2>
      {/* <p className="capitalize __gradient2 -translate-y-1 font-extrabold -tracking-[.18px]">
        {subTitle}
      </p> */}
    </div>
  );
};

export default SectionTitle;
