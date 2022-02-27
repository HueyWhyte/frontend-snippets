const Button = ({ name, className }: { name: string; className?: string }) => {
  return (
    <p
      className={`text-yellow-600 border border-yellow-600 p-4 rounded-sm cursor-pointer text-center ${className} hover:bg-yellow-600 hover:text-white transition-all duration-150 hover:shadow-sm hover:shadow-yellow-600`}
    >
      {name}
    </p>
  );
};

export default Button;
