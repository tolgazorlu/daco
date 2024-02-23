import axios from "axios";
import { useState } from "react";

const PasswordReset = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Replace with your API endpoint
            await axios.post("http://localhost:8000/api/auth/forgot-password", {
                email,
            });
        } catch (error) {
            console.error("Error sending password reset email", error);
        }
    };

    return (
        <div className="flex h-screen justify-center items-center">
            <div className="p-2 md:px-8 w-full md:w-1/2">
                <h1 className="text-3xl font-semibold text-center text-primary font-poppins">
                    FORGOT PASSWORD
                </h1>
                <form
                    className="space-y-4 font-poppins"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full input input-bordered input-primary"
                        />
                    </div>
                    <div>
                        <button className="btn w-full bg-gradient-to-r from-[#694dff] to-[#4716eb] text-white font-poppins">
                            <span>Send Email</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PasswordReset;
