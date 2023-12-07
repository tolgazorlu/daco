/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { getError } from "../../utils/getError";
import { ApiError } from "../../types/ApiError";
import { useCreateFaqMutation } from "../../hooks/faqHook";

const AddFAQModal = () => {
  const { mutateAsync: createFAQ } = useCreateFaqMutation();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const createFAQHandler = async () => {
    try {
      await createFAQ({
        title: title,
        description: description,
      });
    } catch (err) {
      console.log(getError(err as ApiError));
    }
  };

  return (
    <>
      <dialog id="add-faq-modal" className="modal">
        {/* <!-- Modal content --> */}
        <div className="modal-box">
          {/* <!-- Modal header --> */}
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b border-base-content sm:mb-5">
            <h3 className="text-lg font-semibold">Add Faq</h3>
            <button
              type="button"
              className="rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={() => {
                let el: any = document.getElementById("add-faq-modal")!;
                el.close();
              }}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          {/* FORM */}

          <form action="#">
            <div className="flex flex-col gap-2">
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="input input-bordered input-sm input-primary w-full"
                  placeholder="FAQ title"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium"
                >
                  Detail
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="textarea textarea-primary w-full"
                  placeholder="Write FAQ description here"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <button
              className="float-right btn btn-sm bg-success text-success-content hover:bg-success/50"
              onClick={() => createFAQHandler()}
            >
              Add FAQ
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AddFAQModal;
