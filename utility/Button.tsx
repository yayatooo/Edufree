type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="py-3 px-8 rounded-xl bg-yellow-primary text-black-primary font-semibold">
      {children}
    </button>
  );
};

export default Button;
