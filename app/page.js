import Image from "next/image";

const brands = [
  { name: "Ooski Music Records", url: "https://ooski.bigcartel.com", logo: "/brands/ooski.png" },
  { name: "Honey Money Entertainment", url: "https://www.honeymoneyent.com", logo: "/brands/honeymoney.png" },
  { name: "Real Motion Cartel", url: "https://www.realmotioncartel.com", logo: "/brands/realmotioncartel.png" },

  { name: "4daho3s.mob", url: "https://www.instagram.com/4daho3s.mob/", logo: "/brands/4daho3s.mob.png" },
  { name: "losdiablosofficial", url: "https://www.instagram.com/losdiablosofficial/", logo: "/brands/losdiablosnew.png" },
  { name: "XVSTRANGE", url: "https://xvstrange.com", logo: "/brands/xvstrange.png" },

  { name: "TrueCbby", url: "https://linktr.ee/TrueCbby", logo: "/brands/truecbbynew.png" },
  { name: "Trapaholikzzz", url: "https://www.instagram.com/Trapaholikzzz/", logo: "/brands/Trapaholikzzz.png" },
  { name: "Moneychaserszzz", url: "https://www.instagram.com/moneychaserszzz/", logo: "/brands/moneychaserszzz.png" },
];

export default function Home() {
  return (
    <div className="page">
      <main className="main">

        {/* GRID DE LOGOS */}
        <section className="grid" aria-label="Brands">
          {brands.map((b) => (
            <a
              key={b.name}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={b.name}
              className="cell"
            >
              <div className="logoBox">
                <Image
                  src={b.logo}
                  alt={b.name}
                  fill
                  sizes="(max-width: 767px) 240px, 260px"
                  className="logo"
                  priority
                />
              </div>
            </a>
          ))}
        </section>

        {/* PLAYLIST SPOTIFY */}
        <section className="spotify">
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/7l9NVdqfgs1PYhSajgBob1?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </section>

      </main>

      <footer className="footer">
        © {new Date().getFullYear()} PAIN B4 PLEASURE — ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}