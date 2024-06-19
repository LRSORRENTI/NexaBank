import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      onClick={() => document.getElementById('cta-section').scrollIntoView({ behavior: 'smooth' })}
      type="button"
      className={`bg-blue-gradient px-6 py-4 font-poppins text-[18px] font-medium text-primary outline-none ${styles} rounded-[10px] transition-opacity duration-300 ease hover:opacity-70`}
    >
      Get Started
    </button>
  );
};

export default Button;
