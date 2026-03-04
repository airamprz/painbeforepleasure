import BrandCard from "./components/BrandCard.jsx";

export default function Home() {
  const brands = [
    { name: "Ooski Music Records", url: "https://ooski.bigcartel.com", logo: "/brands/ooski.png" },
    { name: "Honey Money Entertainment", url: "https://www.honeymoneyent.com", logo: "/brands/honeymoney.png" },
    { name: "Real Motion Cartel", url: "https://www.realmotioncartel.com", logo: "/brands/realmotioncartel.png" },

    { name: "4daho3s.mob", url: "https://www.instagram.com/4daho3s.mob/", logo: "/brands/4daho3s.mob.png" },
    { name: "losdiablosofficial", url: "https://www.instagram.com/losdiablosofficial/", logo: "/brands/losdiablosnew.png" },
    { name: "XVSTRANGE", url: "https://xvstrange.com", logo: "/brands/xvstrange.png" },
  ];

  return (
    <div className="h-full w-full flex items-start justify-center px-10 pt-10">
      <div className="grid grid-cols-3 grid-rows-2 w-full max-w-7xl place-items-center gap-y-10 gap-x-16">
        {brands.map((brand) => (
          <BrandCard key={brand.name} name={brand.name} url={brand.url} logo={brand.logo} />
        ))}
      </div>
    </div>
  );
}