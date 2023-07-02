type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="px-8 py-4 font-poppins rounded-lg bg-yellow-primary text-black-primary font-semibold">
      {children}
    </button>
  );
};

export default Button;
