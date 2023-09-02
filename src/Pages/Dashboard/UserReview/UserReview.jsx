import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle";

const UserReview = () => {
    const [success, setSuccess] = useState(" ")
    const handleReview = (event) => {
        event.preventDefault()
        setSuccess("Your Review Was Sent")
    }
    return (
        <div>
            <SectionTitle subHeading="Write Your Review" heading="Review"/>
            <div>
                <form onSubmit={handleReview}>
                    <textarea className="bg-[#7a5e32] w-full text-white text-xl font-bold p-6" placeholder="Type Your review" name="" id="" rows="10"></textarea>
                    <input className="bg-[#D1A054] w-full py-2 text-white text-xl font-semibold mt-6" type="submit" value="Sent Your Review" />
                    <p className="mt-4 text-sm text-center text-green-500">{success}</p>
                </form>
            </div>
        </div>
    );
};

export default UserReview;