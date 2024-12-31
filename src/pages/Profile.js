import Link from "next/link";
import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
const Profile = () => {
    const history = useHistory();
    return (
        <div>
            <h1 className="text-5xl border-b mb-2 bg-red-600 text-white">
                Profile || Client
            </h1>
            <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                deleniti nostrum suscipit fugit. Id consequuntur dolore, nulla
                cum sapiente ex?
            </p>

            <img src={"/profile.jpg"} alt="profile" className="w-6/12" />

            <Button>
                <Link href="/">Home</Link>
            </Button>
        </div>
    );
};

export default Profile;
