import Head from "next/head";
import Image from "next/image";
import ContentCard from "../../components/ContentCard";
import Footer from "../../components/Footer";
import { GetInvolvedFooterBanner } from "../../components/FooterBanner";
import Header from "../../components/Header";
import { GetInvolvedTopBanner } from "../../components/TopBanner";
import styles from "./styles.module.scss";

declare type ItemContent = {
  title: string;
  description: string;
};

const nomineesContents: ItemContent[] = [
  {
    title: "BRAND DIFFERENTIATION",
    description:
      "Create a niche and stand-out by the recognition of 2023 AADA with the hard work to be valued and qualified.",
  },
  {
    title: "INCREASED CREDIBILITY",
    description:
      "Winning 2023 AADA is a worthy opportunity to have a brand identity boost, not only on the brand’s direct marketing platforms, but also across various international and local media channels.",
  },
  {
    title: "EXCELLENT MARKETING OPPORTUNITIES",
    description:
      "AADA is committed to endorsing the brand's initiatives and offerings to professionals and prospective customers globally. When we achieve the 2024 AADA goal, it will significantly enhance your brand's reputation. Those who win will receive the prestigious 2024 AADA Winners' Kit, which comprises various printed and digital materials for marketing, such as the 2024 AADA Winner logo license, the 2024 AADA Hall of Fame yearbook, a trophy, and a certificate."
  },
];

const sponsorshipsContents: ItemContent[] = [
  {
    title: "DIRECT MEDIA APPROACH",
    description:
      "Upon forging a partnership with the 2024 AADA, you will have the privilege of being featured on the esteemed AADA international media list. This exposure will be facilitated through an extensive package that includes meticulously crafted press releases, in-depth interviews, and captivating spotlight videos, strategically disseminated throughout the competition.",
  },
  {
    title: "MARKETING OPPORTUNITIES",
    description:
      "Partners affiliated with AADA possess the capacity to harness a wide spectrum of valuable marketing prospects designed to boost their brand's visibility and broaden its reach, encompassing various avenues such as social media, newswire services, and digital outreach.",
  },
  {
    title: "GLOBAL PROMOTION",
    description:
      "Create brand visibility across an extended media network spanning both Asia and global regions, effectively engaging diverse audiences within the architecture and design sector while showcasing the brand's leadership and commitment to this industry..",
  },
  {
    title: "RECOGNITION",
    description:
      "Building recognition within and outside the industry by earning credibility from influential figures including industry professionals, journalists, scholars, and entrepreneurs, all assessed using a standardized scoring system for each individual criterion.",
  },
  {
    title: "INCREASED CREDIBILITY",
    description:
      "Customized sponsorship options are on offer, allowing businesses to refine their brand positioning and fortify the connection between their enterprise and the community of design enthusiasts.",
  },
  {
    title: "NETWORKING",
    description:
      "Establish connections with industry leaders and experts while simultaneously forging new business opportunities at the 2024 AADA Winners' Night in Bangkok, Thailand.",
  },
];

function ListContent({ contents }: { contents: ItemContent[] }) {
  return (
    <div className={styles.listContentsContainer}>
      {contents.map(({ title, description }) => (
        <div key={title} className={styles.itemContentContainer}>
          <div className={styles.titleContainer}>
            <Image src="/brand_rect.svg" alt="Square" fill />
            <div className={styles.title}>{title}</div>
          </div>
          <div className={styles.description}>{description}</div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Get Involved</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <GetInvolvedTopBanner />
        <ContentCard title={"\\\nGet Involved \nwith AADA"}>
          <h2>FOR NOMINEES</h2>
          <div>
            Securing the coveted accolade of the 2024 ASIA ARCHITECTURE DESIGN AWARDS stands as an unparalleled achievement, one that transcends mere recognition and propels businesses into the global spotlight.
          </div>
          <div> This prestigious honor serves as an influential catalyst, igniting a journey of heightened prominence and resonance on the international stage, subsequently elevating the global profile of the awardee.</div>
          <h2>SPONSORING THE AWARD</h2>
          <div>
            The 2024 ASIA ARCHITECTURE DESIGN AWARDS warmly extends an invitation to companies, organizations, and individuals to partake in this remarkable celebration of architectural excellence through our comprehensive sponsorship program, structured into four distinct and engaging levels. Each sponsorship level offers unique benefits and opportunities for exposure, allowing our valued sponsors to align themselves with the prestige and grandeur of the AADA event while enjoying a host of exclusive privileges.
          </div>
        </ContentCard>
        <ContentCard title={"\\\nNominate\nYour Work"}>
          <h2>FOR NOMINEES</h2>
          <ListContent contents={nomineesContents} />
        </ContentCard>
        <ContentCard title={"\\\nSponsor\nThe Awards"}>
          <h2>SPONSORSHIP</h2>
          <ListContent contents={sponsorshipsContents} />
        </ContentCard>
        <ContentCard title={"\\\nSponsorship\nAdvantages"}>
          <h2>DIRECT ADVERTISEMENT</h2>
          <div>
            Provide your brand and product with a chance to engage in targeted marketing, ensuring precise advertisement to segmented audiences for enhanced exposure and outreach. Join our initiatives for direct communication through highly effective channels, including online advertisements, newspapers, magazines, newswires, and collateral advertising.
          </div>
          <h2>REASON TO GET PUBLIC</h2>
          <div>
            Elevating your business to the next level of growth is the primary objective of involvement, all while showcasing the exceptional creative endeavors that the world has grown to anticipate. Enhancing your business’s prestige is a distinct opportunity that this partnership can deliver.
          </div>
          <h2>ENGAGEMENT</h2>
          <div>
            Your business’s value is what propels it to delight users or customers. Substantial engagement paves the way for improved outreach, ultimately generating broader awareness.
          </div>
          <h2>DIFFERENTIATION</h2>
          <div>
            Our forward-looking approach centers on innovation and sustainability as the cornerstones of our next generation of creations. Join us in embracing this strategy to position your creation with a distinctive proposition, setting it apart from competitors in the market.
          </div>
          <h2>EXCLUSIVE ACCESS</h2>
          <div>
            Gain exclusive access to all our events, networks, and those organized by AAO, in addition to our esteemed strategic business partners, facilitating limitless connections. Enjoy the freedom to showcase your innovation, greatly expanding the potential for a wider audience to discover your creation.
          </div>
        </ContentCard>
        <GetInvolvedFooterBanner />
      </main>
      <Footer />
    </div>
  );
}
