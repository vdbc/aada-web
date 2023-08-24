import Head from "next/head";
import Image from "next/image";
import ContentCard from "../../components/ContentCard";
import Footer from "../../components/Footer";
import { AdvisorsFooterBanner } from "../../components/FooterBanner";
import Header from "../../components/Header";
import { AdvisorsTopBanner } from "../../components/TopBanner";
import styles from "./styles.module.scss";
import bgCard from "/public/advisors/bg_advisor_new.jpg";

declare type AdvisorModel = {
  name: string;
  avatar: string;
  country: string;
  title: string;
  description: string;
  rtl?: boolean;
};

const contents: AdvisorModel[] = [
  {
    name: "ALBERTO BERETTA (Mr.)",
    avatar: "/advisors/berretta.svg",
    country: "Italy",
    title:
      "Founder & Managing Partner of Italian Fit Out SRL, a competent project director in the fit out sector with over 25 years in the industry.",
    description:
      "Founded the Interior Design Fit Out & Furniture company, Mr. Alberto Beretta has been acting as founder, managing partners regarding the production of modern and contemporary furniture, furnishing accessories for the Luxury residences, Luxury Hotels and Executive offices worldwide.",
  },
  {
    name: "TAN QUEE PENG (Mr.)",
    avatar: "/advisors/mr_tan_quee_peng.jpg",
    country: "Singapore",
    title:
      "Singapore registered architect as well as a certified Green Mark Manager, Universal Design Assessor and Design for Safety Professional, General Director at RSP Vietnam.",
    description:
      "Quee Peng has more than 20 years of architectural experience leading major projects across Asia. He believes that architecture is an inextricable part of our experience and has the power to transform and inform our sensibilities and perceptions, from personal spaces to our interaction with society at large. Quee Peng takes a whole-of-life cycle approach on projects, from new development to brownfield asset enhancement, to deliver quality to stakeholders at all levels.",
  },
  {
    name: "GIANFRANCO BIANCHI (Mr.)",
    avatar: "/advisors/mr_bianchi.jpg",
    country: "Italy",
    title:
      "Founder, CEO of Italian Atelier - the most experienced organization in Asia-Pacific that operates across 36 countries.",
    description:
      "Established Italian Atelier in 2008, Mr. Gianfranco Bianchi, is a leader in distributing the most prestigious luxury furniture brands in the Asia Pacific and represents over forty brands worldwide. He has always been fascinated by Asian Culture and history, and had a strong belief that Asia truly represents the future of the world economy. Italian Atelier has contributed a positive impact on the luxury lifestyle of 37 countries",
  },
  {
    name: "WINNY MONICA OEI (Ms.)",
    avatar: "/advisors/ms_oei.jpg",
    country: "Singapore",
    title:
      "Chief Corporate Officer at Chiu Teng Group (CTC), Singapore - a real estate developer and constructor in industrial and commercial sector.",
    description:
      "As adviser roles she is responsible for execution of day-to-day operation of various administration functions of the companies which include to strategize financial and corporate affairs. Before joining CTC, Ms. Winny Oei held position as Chief Commercial Officer at Soil build Group who leads and monitor the Group’s Procurement and Purchasing since 2012. During her past 20 years in the Group since year 2000 , she was responsible for developing an implemented internal work processes and procedure other than to established long term strategic relationships and corporation with external Clients and Vendors.",
  },
  {
    name: "Kevin Cheon (Mr.)",
    avatar: "/advisors/mr_cheon.jpg",
    country: "Singapore",
    title: "General Director Kingsmen Vietnam Company Limited",
    description:
      "After accumulating experience in many different fields, Kevin Cheon found his true passion in life when building Furniture business at Kingsmen Vietnam. He is responsible for the day-to-day operations, sales, marketing and management of Vietnam offices.\nWith more than 15 years of experience in operations and project management of exhibitions, events and retail interiors, Kevin oversees the strategic development of the business.",
  },
  {
    name: "Aticha Chareerat (Ms.)",
    avatar: "/advisors/ms_chareerat.jpg",
    country: "Thailand",
    title:
      "Founder of PAD Space Artisan with numerous hospitality projects across Asia.",
    description:
      "Established PAD Space Artisan in 2015, Ms.Aticha has been leading as founder and design lead. Her studio focuses on craftsmanship, they put a lot of afford into crafting from overall guest experience, branding, feature, joinery, wallpaper, sanitary, ironmongery, small props, graphics, and collateral. There is almost everything that they craft and try to minimize standard objects as much as we could. In order to make her client’s project distinctive and deserves recognition.",
  },

  {
    name: "Thomas Thang (Mr.)",
    avatar: "/advisors/mr_thang.jpg",
    country: "Hong Kong",
    title:
      "Country Head of Mulpha International Bhd of Malaysia in Vietnam\nGeneral Manager of Gaw Capital Advisors Ltd",
    description:
      "Thomas has over 35 years of experience and local knowledge gained from involvement in numbers of projects including mixed use developments, hotels & resorts, commercial buildings and hospitals in Ho Chi Minh City, Danang and Hanoi has equipped him with extensive local relationships in the business cycles from North to South of Vietnam.t",
  },
  {
    name: "Chang Huai-yan (Mr.)",
    avatar: "/advisors/mr_yan.jpg",
    country: "Singapore",
    title: "Founder of Salad Dressing, Award-winning design studio, Singapore.",
    description:
      "Huai-yan is inspired by contemporary culture that is defined by information technology, genomic science and cosmic explorations. He leads a practice that leverages on the flux of humanity during this post-Anthropocene transition. The studio does works range from residential, hospitality, master planning to experiential curation and nation branding.",
  },
  {
    name: "Constance Tew (Ms.)",
    avatar: "/advisors/ms_tew.jpg",
    country: "Singapore",
    title: "Creative Director, Founded Creative Mind Design (CMD)",
    description:
      "Constance is always looking for a way to bring a fresh perspective to space suitable for the configuration and age of countless guests. Her vision is to create interiors that can leave a mark and become an inspiration for the next generation of connectivity.\nUp to now, CMD has affirmed its brand in the field of high-end interior design with more than 500 projects, from the most luxurious residential areas in the region, to international hotels, villas and showrooms.",
  },
  {
    name: "Dylan Yip(Mr)",
    avatar: "/advisors/dylan.jpg",
    country: "Singapore",
    title: "Vice President of Global Business, Asia Awards Organization",
    description:
      "Dylan Yip, a graduate in Business (Real Estate) from the University of South Australia, boasts over 17 years of experience in the real estate sector. He has worked in numerous Asian countries and has held significant positions such as Marketing Manager at Bukit Sembawang Estate Limited and Sales and Portfolio Manager at KOP Properties Private Limited. Currently, Dylan Yip serves as Vice President of Global Business, Asia Awards Organization.",
  },
  {
    name: "Cam Tu Nguyen(Ms.)",
    avatar: "/advisors/ceo.jpg",
    country: "Vietnam",
    title: "CEO, Founder of Vietnam Design & Build Center, COO of Asia Awards Organization",
    description:
      "With several years of experience in the marketing industry, including a five-year tenure in the resort real estate sector, Tu presently holds the position of CEO at D&B Holding. Additionally, she is the founder and manager of the Vietnam Design & Build Center (VDBC). In the year 2022, VDBC and AAO forged a strategic partnership characterized by comprehensive collaboration, with a long-term vision to drive robust development in Asia. This collaboration aims to recognize excellence in products, individuals, organizations, and businesses through prestigious awards.",
  },
];

function AdvisorItem({
  name,
  avatar,
  country,
  title,
  description,
  rtl = true,
}: AdvisorModel) {
  return (
    <div className={[styles.advisorContainer, rtl ? styles.rtl : ""].join(" ")}>
      <Image src={bgCard} alt="Background" fill className={styles.background} />
      <div className={styles.avatar}>
        <Image src={avatar} alt={name} fill />
      </div>
      <div style={{ width: 20 }} />
      <div className={styles.body}>
        <h3>{name}</h3>
        <label>{country}</label>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function View() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Board of Advisors</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <AdvisorsTopBanner />
        <ContentCard title={"\\\nTHE ADVISORS"}>
          <p>
            The Board of Advisors comprises accomplished professionals from various industries and diverse backgrounds, each possessing substantial experience in fields like real estate development, architecture, hospitality, media, and academia.
          </p>
          <p>
            Their impressive expertise in their respective domains empowers us to offer a broad spectrum of plans that align with the expectations of our partners.
          </p>
        </ContentCard>
        <div className={styles.title}>MEET THE ADVISORS</div>
        <div className={styles.advisors}>
          {contents.map((item, index) => (
            <AdvisorItem key={item.name} {...item} rtl={index % 2 == 1} />
          ))}
        </div>

        <AdvisorsFooterBanner />
      </main>
      <Footer />
    </div>
  );
}
