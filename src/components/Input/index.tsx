import { ComponentProps, useId } from "react";

interface Props {
  label: string;
}

const Input = ({ label, ...rest }: Props & ComponentProps<"input">) => {
  const id = useId();
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium opacity-70">
        {label}
      </label>
      <input
        id={id}
        {...rest}
        className="outline-none border-b-2 border-black/20 mt-2 w-full bg-transparent duration-200 focus:border-accent py-2"
      />
    </div>
  );
};

export default Input;
