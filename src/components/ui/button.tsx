import { twMerge } from "tailwind-merge";
interface ButtonProps {
  title: string;
  className?: string;
  icon?: React.ReactNode;
}
function Button({ title, className = "", icon }: ButtonProps) {
  return (
    <button
      /* Line 1: Wrap your classes in twMerge() */
      className={twMerge(
        `bg-secondary text-base  py-[7px] px-[20px] rounded-[7px] font-[550] capitalize font-lora flex items-center justify-center gap-2`,
        className,
      )}>
      {icon && <span>{icon}</span>}
      {title}
    </button>
  );
}

export default Button;
