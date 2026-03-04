export default function Footer({ fontClass }) {
  return (
    <footer className="w-full bg-black pt-6 pb-4">
      <div className={`${fontClass} max-w-6xl mx-auto px-6 text-center text-white text-[12px] leading-none select-none uppercase`}>
        © {new Date().getFullYear()} Pain B4 Pleasure — All rights reserved
      </div>
    </footer>
  );
}
