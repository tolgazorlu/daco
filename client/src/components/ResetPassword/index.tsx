import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [passwordValidate, setPasswordValidate] = useState("");
    const param = useParams();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const token = param.token;

        if (!token) {
            alert("Token is missing!");
            return;
        }

        if (password == passwordValidate) {
            try {
                // Replace with your API endpoint
                await axios.put(
                    "http://localhost:8000/api/auth/reset-password",
                    {
                        token,
                        password,
                    },
                );
                alert("Your password has been reset successfully.");
            } catch (error) {
                console.error("Error resetting password", error);
            }
        } else {
            alert("Passwords not matching!");
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
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter a new password"
                            required
                            className="w-full input input-bordered input-primary"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">
                                Password Confirm
                            </span>
                        </label>
                        <input
                            type="password"
                            value={passwordValidate}
                            onChange={(e) =>
                                setPasswordValidate(e.target.value)
                            }
                            placeholder="Enter a new password"
                            required
                            className="w-full input input-bordered input-primary"
                        />
                    </div>

                    <div>
                        <button className="btn w-full bg-gradient-to-r from-[#694dff] to-[#4716eb] text-white font-poppins">
                            <span>Reset Password</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
