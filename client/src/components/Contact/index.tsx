import { FormEvent, useState } from "react";
import { useCreateContactMutation } from "../../hooks/contactHook";
import { toast } from "react-toastify";
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
            {/* Contact Us */}
            <div className="bg-base-100 px-4 py-10 sm:px-6 lg:py-14 mx-auto lg:px-24">
                <div>
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-base-content sm:text-4xl">
                            Contact us
                        </h1>
                        <p className="mt-1 text-base-content/60">
                            We'd love to talk about how we can help you.
                        </p>
                    </div>
                    <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
                        <div className="divide-y divide-gray-200">
                            {/* Icon Block */}
                            <div className="flex gap-x-7 py-6">
                                <svg
                                    className="flex-shrink-0 size-6 mt-1.5 text-base-content"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx={12} cy={12} r={10} />
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                    <path d="M12 17h.01" />
                                </svg>
                                <div className="grow">
                                    <h3 className="font-semibold text-base-content">
                                        Knowledgebase
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        We're here to help with any questions or
                                        code.
                                    </p>
                                    <a
                                        className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-base-content/60 hover:text-base-content"
                                        href="#"
                                    >
                                        Contact support
                                        <svg
                                            className="flex-shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            {/* End Icon Block */}
                            {/* Icon Block */}
                            <div className="flex gap-x-7 py-6">
                                <svg
                                    className="flex-shrink-0 size-6 mt-1.5 text-base-content"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                                </svg>
                                <div className="grow">
                                    <h3 className="font-semibold text-base-content">
                                        FAQ
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Search our FAQ for answers to anything
                                        you might ask.
                                    </p>
                                    <a
                                        className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-base-content/60 hover:text-base-content"
                                        href="#"
                                    >
                                        Visit FAQ
                                        <svg
                                            className="flex-shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            {/* End Icon Block */}
                            {/* Icon Block */}
                            <div className=" flex gap-x-7 py-6">
                                <svg
                                    className="flex-shrink-0 size-6 mt-1.5 text-base-content"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m7 11 2-2-2-2" />
                                    <path d="M11 13h4" />
                                    <rect
                                        width={18}
                                        height={18}
                                        x={3}
                                        y={3}
                                        rx={2}
                                        ry={2}
                                    />
                                </svg>
                                <div className="grow">
                                    <h3 className="font-semibold text-base-content">
                                        Developer APIs
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Check out our development quickstart
                                        guide.
                                    </p>
                                    <a
                                        className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-base-content/60 hover:text-base-content"
                                        href="#"
                                    >
                                        Contact sales
                                        <svg
                                            className="flex-shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            {/* End Icon Block */}
                            {/* Icon Block */}
                            <div className=" flex gap-x-7 py-6">
                                <svg
                                    className="flex-shrink-0 size-6 mt-1.5 text-base-content"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                                </svg>
                                <div className="grow">
                                    <h3 className="font-semibold text-base-content">
                                        Contact us by email
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        If you wish to write us an email instead
                                        please use
                                    </p>
                                    <a
                                        className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-base-content/60 hover:text-base-content"
                                        href="#"
                                    >
                                        example@site.com
                                    </a>
                                </div>
                            </div>
                            {/* End Icon Block */}
                        </div>
                        {/* Card */}
                        <div className="flex flex-col border border-base-300 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
                            <h2 className="mb-8 text-xl font-semibold text-base-content">
                                Fill in the form
                            </h2>
                            <form>
                                <div className="grid gap-4">
                                    <div>
                                        <label
                                            htmlFor="hs-email-contacts-1"
                                            className="sr-only"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            autoComplete="email"
                                            className="py-3 px-4 block w-full border border-base-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="hs-phone-number-1"
                                            className="sr-only"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            value={subject}
                                            onChange={(e) =>
                                                setSubject(e.target.value)
                                            }
                                            className="py-3 px-4 block w-full border border-base-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            placeholder="Subject"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="hs-about-contacts-1"
                                            className="sr-only"
                                        >
                                            Details
                                        </label>
                                        <textarea
                                            id="message"
                                            value={message}
                                            onChange={(e) =>
                                                setMessage(e.target.value)
                                            }
                                            rows={5}
                                            className="py-3 px-4 block w-full border border-base-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            placeholder="Details"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                {/* End Grid */}
                                <div className="mt-4 grid">
                                    <button
                                        type="submit"
                                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-warning text-warning-content hover:bg-warning/70 disabled:opacity-50 disabled:pointer-events-none"
                                        onClick={submitHandler}
                                    >
                                        Send inquiry
                                    </button>
                                </div>
                                <div className="mt-3 text-center">
                                    <p className="text-sm text-gray-500">
                                        We'll get back to you in 1-2 business
                                        days.
                                    </p>
                                </div>
                            </form>
                        </div>
                        {/* End Card */}
                    </div>
                </div>
            </div>
            {/* End Contact Us */}
            {/* <section className="mt-20">
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
            </section> */}
        </>
    );
};

export default Contact;
