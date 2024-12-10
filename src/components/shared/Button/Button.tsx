interface ButtonProps {
  text: string;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  return link ? (
    <a
      href={link}
      className="bg-gradient-primary px-5 py-3 rounded-md font-medium text-[16px] text-center text-[#252728] w-fit "
    >
      {text}
    </a>
  ) : (
    <button className="bg-gradient-primary px-5 py-3 rounded-md font-medium text-[16px] text-center text-[#252728] w-fit ">
      {text}
    </button>
  );
};

export default Button;
