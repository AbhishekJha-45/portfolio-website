export default function TabButton({ active, selectTab, children, id }) {
  const buttonClasses = active
    ? "font-semibold hover:text-white text-white border-b border-purple-500"
    : "font-semibold hover:text-white text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}
        id={id}
      >
        {children}
      </p>
    </button>
  );
}
