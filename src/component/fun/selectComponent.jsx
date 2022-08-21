import React from "react";

const SelectComponent = (props) => {
  const options = props.Options;

  return (
    <div>
      <label>
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          {props.Name}
        </span>
        <select class="peer mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
          Please provide a valid {props.Name}.
        </p>
      </label>
    </div>
  );
};

export default SelectComponent;
