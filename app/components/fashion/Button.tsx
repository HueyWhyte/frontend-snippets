const Button = ({ name, className }: { name: string; className?: string }) => {
  return (
    <p
      className={`cursor-pointer rounded-sm border
       border-yellow-600 p-4 text-center text-yellow-600 
      transition-all duration-150 
      hover:bg-yellow-600 hover:text-white hover:shadow-sm 
      hover:shadow-yellow-600 ${className}`}
    >
      {name}
    </p>
  );
};

export default Button;
