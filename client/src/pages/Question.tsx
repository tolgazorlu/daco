import ResponsiveGridLayout from "react-grid-layout";
import Navbar from "../layouts/Navbar";
import {
  FullScreen,
  FullScreenHandle,
  useFullScreenHandle,
} from "react-full-screen";
import Editor from "@monaco-editor/react";
import { useState } from "react";

export type programmingLanguage = string;

const programmingLanguage: programmingLanguage[] = [
  "C",
  "C++",
  "C#",
  "Java",
  "Javascript",
  "Typescript",
  "Python",
  "PHP",
  "Go",
  "Ruby",
];

const Question = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  const handle: FullScreenHandle = useFullScreenHandle();

  const layout = [
    {
      i: "a",
      x: 0,
      y: 0,
      w: 8,
      h: 18,
      isResizable: true,
      resizeHandles: ["e", "w", "s"],
    },
    {
      i: "b",
      x: 10,
      y: 0,
      w: 4,
      h: 12,
      minW: 2,
      maxW: 4,
      isResizable: true,
      resizeHandles: ["e", "w", "s"],
    },
    {
      i: "c",
      x: 10,
      y: 0,
      w: 4,
      h: 6,
      isResizable: true,
      resizeHandles: ["e", "w", "s"],
    },
  ];
  return (
    <FullScreen handle={handle}>
      <div id="screen" className="h-screen">
        <div className="px-0 lg:px-20">
          <Navbar fullscreenHandle={handle} />
        </div>
        <ResponsiveGridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1470}
        >
          <div key="a" className="rounded-xl shadow-md border">
            <div className="w-full px-2 py-1 flex items-center gap-1 bg-base-200 rounded-t-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="green"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
              <span className="text-sm font-bold">Code</span>
            </div>
            <div className="w-full px-2 py-1 border-b">
              <select className="select select-bordered select-xs max-w-xs">
                {programmingLanguage.map((item) => {
                  return <option key={item}>{item}</option>;
                })}
              </select>
            </div>
            <Editor
              height={`85%`}
              width={`100%`}
              language={language || "javascript"}
              value={value}
              theme={theme}
              defaultValue="// some comment"
              onChange={handleEditorChange}
            />
          </div>
          <div key="b" className="rounded-xl shadow-md border h-4/6 overflow-hidden">
          <div className="w-full px-2 py-1 flex items-center gap-1 bg-base-200 rounded-t-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="orange"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            <span className="text-sm font-bold">Description</span>
          </div>
          <div className="p-4 overflow-scroll max-h-full">
            <span className="font-bold text-2xl">1. </span>
            <span className="font-bold text-2xl">Two Sum</span>
            <div>
              <span className="badge badge-success">Easy</span>
            </div>
            <p className="py-4">
              Given an array of n integers nums, a 132 pattern is a subsequence
              of three integers nums[i], nums[j] and nums[k] such that i j k and
              nums[i] nums[k] nums[j]. Return true if there is a 132 pattern in
              nums, otherwise, return false.
              Given an array of n integers nums, a 132 pattern is a subsequence
              of three integers nums[i], nums[j] and nums[k] such that i j k and
              nums[i] nums[k] nums[j]. Return true if there is a 132 pattern in
              nums, otherwise, return false.
              Given an array of n integers nums, a 132 pattern is a subsequence
              of three integers nums[i], nums[j] and nums[k] such that i j k and
              nums[i] nums[k] nums[j]. Return true if there is a 132 pattern in
              nums, otherwise, return false.
              Given an array of n integers nums, a 132 pattern is a subsequence
              of three integers nums[i], nums[j] and nums[k] such that i j k and
              nums[i] nums[k] nums[j]. Return true if there is a 132 pattern in
              nums, otherwise, return false.
              Given an array of n integers nums, a 132 pattern is a subsequence
              of three integers nums[i], nums[j] and nums[k] such that i j k and
              nums[i] nums[k] nums[j]. Return true if there is a 132 pattern in
              nums, otherwise, return false.
            </p>
          </div>
          </div>
          <div key="c" className="rounded-xl shadow-md border min-h-16">
          <div className="w-full px-2 py-1 flex items-center gap-1 bg-base-200 rounded-t-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
              />
            </svg>

            <span className="text-sm font-bold">Output</span>
            
          </div>
          </div>
        </ResponsiveGridLayout>
      </div>
    </FullScreen>
  );
};

export default Question;
