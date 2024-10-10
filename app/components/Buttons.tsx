import clsx from "clsx";

interface ButtonProps {
  variant: "primary" | "secondary" | "outlined";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ variant, size = "md", onClick, children }: ButtonProps) => {
  const baseClasses =
    "rounded-full font-semibold transition duration-200 ease-in-out";

  const sizeClasses = clsx({
    "px-4 py-2 text-sm": size === "sm",
    "px-6 py-3 text-md": size === "md",
    "px-8 py-4 text-lg": size === "lg",
  });

  const variantClasses = clsx({
    "bg-light-primary text-light-textPrimary dark:bg-dark-primary dark:text-dark-textPrimary shadow-neon":
      variant === "primary",
    "bg-light-secondary text-light-textPrimary dark:bg-dark-secondary dark:text-dark-textPrimary shadow-neon":
      variant === "secondary",
    "border-2 border-light-primary text-light-primary dark:border-dark-primary dark:text-dark-primary":
      variant === "outlined",
  });

  return (
    <button
      onClick={onClick}
      className={clsx(baseClasses, sizeClasses, variantClasses)}
    >
      {children}
    </button>
  );
};

export default Button;
