import Image from "next/image";

export default function BrandCard({ name, url, logo }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group flex items-center justify-center
        transition-transform duration-300
        hover:scale-[1.04]
      "
      aria-label={name}
    >
      <Image
        src={logo}
        alt={name}
        width={220}
        height={220}
        className="object-contain"
        priority
      />
    </a>
  );
}