const Button = ({ styles,text }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-green-gradient rounded-[10px] outline-none ${styles}`}
  >
    {text}
  </button>
);

export default Button;