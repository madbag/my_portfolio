import React from "react";

function Form() {
  return (
    <div className="bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] flex flex-col rounded-[20px] items-start h-[490px] w-[300px] p-[20px]">
      <h2 className="mb-[20px] text-[20px]">Send a Message</h2>

      <form className="w-full flex flex-col gap-[15px]">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            //   value={}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all"
            required
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
