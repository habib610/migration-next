import React from "react";

const AboutLayout = ({ children }) => {
    return (
        <div>
            <div>
                <h1>About Layout</h1>
                <main>{children}</main>
            </div>
        </div>
    );
};

export default AboutLayout;
