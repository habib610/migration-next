import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
    const history = useHistory();
    return (
        <div>
            <h1 className="text-5xl border-b mb-2 bg-cyan-400">Home page</h1>
            <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                deleniti nostrum suscipit fugit. Id consequuntur dolore, nulla
                cum sapiente ex?
            </p>
            <img src={`/city.jpg`} alt="city" className="w-2/12" />
            <Button onClick={() => history.push("/profile")}>Profile</Button>
        </div>
    );
};

export default Home;
