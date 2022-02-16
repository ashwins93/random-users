export default function SwitchToggle(props: any) {
  return (
    <label className="flex items-center cursor-pointer">
      <input type="checkbox" {...props} />
      <div
        className={`w-11 h-6 rounded-full relative flex items-center p-1 transition ${
          props.checked ? "bg-gray-200" : "bg-neutral-300"
        }`}
      >
        <div
          className={`w-4 h-4 rounded-full transition bg-raven-500 ${
            props.checked ? "translate-x-5" : ""
          }`}
        ></div>
      </div>
      <span className="ml-3 text-sm font-medium text-gray-100">
        {props.text}
      </span>
    </label>
  );
}
