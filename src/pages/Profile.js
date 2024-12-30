import React from "react";
import { useHistory } from "react-router-dom";
import { profile } from "../asset";
import Button from "../components/Button";

const Profile = () => {
    const history = useHistory();
    return (
        <div>
            <h1 className="text-5xl border-b mb-2 bg-rose-300">Profile</h1>
            <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                deleniti nostrum suscipit fugit. Id consequuntur dolore, nulla
                cum sapiente ex?
            </p>

            <img src={profile} alt="city" className="w-6/12" />

            <Button onClick={() => history.push("/")}>Home</Button>
        </div>
    );
};

export default Profile;
