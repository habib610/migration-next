import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
const Dashboard = () => {
    const history = useHistory();
    return (
        <div>
            <h1 className="text-5xl border-b mb-2 bg-red-600 text-white">
                Dashboard page || Client
            </h1>
            <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                deleniti nostrum suscipit fugit. Id consequuntur dolore, nulla
                cum sapiente ex?
            </p>
            <img src={"/city.jpg"} />
            <Button onClick={() => history.push("/auth/profile")}>
                Profile
            </Button>
        </div>
    );
};

export default Dashboard;
