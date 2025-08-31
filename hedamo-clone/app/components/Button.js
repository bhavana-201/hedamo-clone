"use client";

export default function Button({ content }) {
  return (
    <div className="flex justify-center items-center">
      <button
        className="max-w-[384px] w-full border-2 border-[#004D40] 
                   text-[#004D40] text-[16px] leading-[1.3] 
                   bg-white py-4 px-6 rounded-md hover:bg-gray-200
                   cursor-pointer"
      >
        {content}
      </button>
    </div>
  );
}
