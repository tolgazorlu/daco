import { FormEvent, useState } from "react";
import Layout from "../Layouts";
import { useCreateContactMutation } from "../../hooks/contactHook";
import { ToastContainer, toast } from "react-toastify";
import { getError } from "../../utils/getError";
import { ApiError } from "../../types/ApiError";

const Contact = () => {
    const { mutateAsync: createContact } = useCreateContactMutation();

    const [email, setEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await createContact({
                email: email,
                subject: subject,
                message: message,
            });
            toast.success("Message sended!");
        } catch (error) {
            toast.error(getError(error as ApiError));
        }
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Layout />
            <section className="mt-20">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md font-poppins">
                    <h2 className="mb-4 text-4xl tracking-tight font-poppins text-center font-extrabold">
                        Contact Us
                    </h2>
                    <p className="mb-8 lg:mb-16 font-poppins text-center sm:text-xl">
                        Got a technical issue? Want to send feedback about a
                        beta feature? Need details about our Business plan? Let
                        us know.
                    </p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input input-bordered w-full rounded "
                                placeholder="name@flowbite.com"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block mb-2 text-sm font-medium"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="input input-bordered w-full rounded"
                                placeholder="Let us know how we can help you"
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium"
                            >
                                Your message
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="textarea textarea-bordered textarea-md w-full rounded"
                                placeholder="Leave a message..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary text-primary-content float-right rounded"
                            onClick={submitHandler}
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
