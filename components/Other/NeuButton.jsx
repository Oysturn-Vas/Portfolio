import { FiSend } from "react-icons/fi";

export default function NeuButton({
  children,
  icon,
  color,
  hoverColor = "hover:text-white"
}) {
  return (
    <button
      className={`
        px-2 py-2 h-full rounded-full 
        flex items-center gap-2 
        ${color}
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        ${hoverColor}
        hover:bg-black
    `}
    >
      {icon}
      {children}
    </button>
  );
}
