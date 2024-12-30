import React from "react";

const Button = ({ children, ...rest }) => {
    return (
        <button
            {...rest}
            className="bg-orange-600 text-white text-2xl  px-4 py-1 my-1 hover:cursor-pointer hover:bg-opacity-90 rounded-md"
        >
            {children}
        </button>
    );
};

export default Button;
