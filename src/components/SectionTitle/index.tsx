const SectionTitle = ({
  subTitle,
  title,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="flex items-end gap-x-3 relative">
      <div className="w-2.5"></div>
      <div className="absolute top-1/2 -translate-y-1/2 left-0 h-[90%] w-2.5 bg-accent/40"></div>
      <h2 className="text-[56px]/[56px] font-extrabold -tracking-[.18px]">
        {title}
      </h2>
      {/* <p className="capitalize __gradient2 -translate-y-1 font-extrabold -tracking-[.18px]">
        {subTitle}
      </p> */}
    </div>
  );
};

export default SectionTitle;
