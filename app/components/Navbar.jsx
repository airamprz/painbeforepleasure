export default function Navbar({ fontClass }) {
  return (
    <nav className="w-full bg-black h-32 flex items-center justify-center">
      <span className={`${fontClass} text-white text-[36px] leading-none select-none`}>
        PAIN BEFORE PLEASURE
      </span>
    </nav>
  );
}