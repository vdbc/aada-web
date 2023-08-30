import Head from "next/head";
import Image from "next/image";
import { Grid, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ContentCard from "../../components/ContentCard";
import Footer from "../../components/Footer";
import { RegistrationFooterBanner } from "../../components/FooterBanner";
import Header from "../../components/Header";
import { CategoriesTopBanner } from "../../components/TopBanner";
import styles from "./styles.module.scss";

declare type AwardItemProps = {
  children: string;
};

function AwardItem({ children }: AwardItemProps) {
  return (
    <div className={styles.awardItemContainer}>
      <Image
        className={styles.logo4}
        src="/logo5.svg"
        alt="Logo"
        width={114}
        height={38}
      />
      <div className={styles.spacer1} />
      <div className={styles.title}>{children}</div>
      <div className={styles.spacer} />
    </div>
  );
}

function BoxContent({ children }: { children: any }) {
  return (
    <div className={styles.oneImage}>
      <Image src="/square1.svg" alt="Square" fill />
      <div className={styles.badgeContent}>{children}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Categories</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <CategoriesTopBanner />
        <ContentCard title={"\\\n2024 AADA\nDisciplines"}>
          <h2>DISCIPLINES</h2>
          <br />
          <div>
            The appreciation of Architecture & Design works, ranging from
            independent work to full-serviced firms that has substantial
            contribution to the society. The AADA is open to all entities from
            independent submission to brands, architecture offices, design
            studios, creative agencies or manufacturers, distributors…
          </div>
          <div className={styles.images}>
            <Swiper
              spaceBetween={10}
              slidesPerView={1.4}
              grid={{ rows: 1, fill: "row" }}
              modules={[Grid, Pagination]}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                500: {
                  slidesPerView: 2.4,
                  grid: { rows: 1, fill: "row" },
                },
                650: {
                  slidesPerView: 3.4,
                  grid: { rows: 1, fill: "row" },
                },
                800: {
                  slidesPerView: 1.4,
                  grid: { rows: 1, fill: "row" },
                },
                900: {
                  slidesPerView: 2.4,
                  grid: { rows: 1, fill: "row" },
                },
                1000: {
                  slidesPerView: 3,
                  grid: { rows: 2, fill: "row" },
                },
              }}
            >
              <SwiperSlide>
                <BoxContent>ARCHITECTURE DESIGN</BoxContent>
              </SwiperSlide>
              <SwiperSlide>
                <BoxContent>INTERIOR DESIGN</BoxContent>
              </SwiperSlide>
              <SwiperSlide>
                <BoxContent>FURNITURE DESIGN</BoxContent>
              </SwiperSlide>
              <SwiperSlide>
                <BoxContent>FIRMS IN ARCHITECTURE DESIGN</BoxContent>
              </SwiperSlide>
              <SwiperSlide>
                <BoxContent>FIRMS IN INTERIOR DESIGN</BoxContent>
              </SwiperSlide>
              <SwiperSlide>
                <BoxContent>
                  FIRMS IN FURNITURE MANUFACTURING & RETAILING
                </BoxContent>
              </SwiperSlide>
            </Swiper>
          </div>
        </ContentCard>
        <ContentCard title={"\\\nBest\nArchitecture\nDesign"}>

          <h3>
            Rewarding architects who blend design brilliance and innovation with tangible social impact, applauding hospitality, commercial and residential projects that redefine sustainability and break new ground in construction.
          </h3>
          <AwardItem>2024 ASIA’S BEST HOSPITALITY ARCHITECTURE DESIGN</AwardItem>
          <div>
            This award is granted to exceptional design excellence in hospitality projects that showcase both creative ingenuity and innovative sustainability strategies.
          </div>
          <AwardItem>2024 ASIA’S BEST F&B ARCHITECTURE DESIGN</AwardItem>
          <div>
            This award is bestowed to acknowledge F&B design projects that skillfully balance commercial imperatives with the individual preferences and expectations of guests.
          </div>
          <AwardItem>2024 ASIA’S BEST COMMERCIAL BUILDING ARCHITECTURE DESIGN</AwardItem>
          <div>
            The award commends outstanding vision and expertise in shaping civic structures that contribute harmoniously to their surroundings while serving functional and societal needs.
          </div>
          <AwardItem>2024 ASIA’S BEST CIVIC BUILDING ARCHITECTURE DESIGN</AwardItem>
          <div>
            This award honors landscape design true to the vision that landscapes have an impact on the lives of those who interact with these spaces.
          </div>
          <AwardItem>
            2024 ASIA’S BEST RESIDENTIAL ARCHITECTURE DESIGN
          </AwardItem>
          <div>
            Recognizing and celebrating the artistry involved in meticulously designing residential spaces that effortlessly amalgamate innovative concepts, functional practicality, and captivating aesthetic charm.
          </div>
          <AwardItem>2024 ASIA’S BEST CONCEPTUAL ARCHITECTURE DESIGN(concept,in-progress project)</AwardItem>
          <div>
            Celebrating visionary brilliance in conceptualizing and advancing architectural projects that are in-progress, embodying the forefront of creative innovation and design thinking.
          </div>
          <AwardItem>
            2024 ASIA’S BEST LANDSCAPE PLANNING
          </AwardItem>
          <div>
            An award to honor outstanding excellence in designing and planning outdoor spaces that seamlessly blend nature, aesthetics, and functionality.
          </div>
        </ContentCard>
        <ContentCard title={"\\\nBest\nInterior\nDesign"}>
          <h3>
            Celebrating the visionary creativity and exceptional achievements of interior designers, the finest interior design transcends mere components to infuse spaces with distinct personalities that resonate and inspire our way of life.
          </h3>
          <AwardItem>2024 ASIA’S BEST HOSPITALITY INTERIOR DESIGN</AwardItem>
          <div>
            Recognizing exceptional interior design that leaves an indelible mark on hospitality projects, infusing them with a unique personality and creative flair.
          </div>
          <AwardItem>2024 ASIA’S BEST F&B INTERIOR DESIGN </AwardItem>
          <div>
            Commending the finest interior design project that skillfully harmonized commercial imperatives with the individual preferences and aspirations of guests.
          </div>
          <AwardItem>2024 ASIA’S BEST RESIDENTIAL INTERIOR DESIGN</AwardItem>
          <div>
            This award pays tribute to exceptional mastery in curating living spaces that harmoniously amalgamate artistic aesthetics with practical functionality.
          </div>
          <AwardItem>2024 ASIA’S BEST COMMERCIAL BUILDING INTERIOR DESIGN</AwardItem>
          <div>
            Acknowledging pioneering accomplishments in crafting compelling and functional spaces that reshape the landscape of commercial environments.
          </div>
          <AwardItem>2024 ASIA’S BEST RETAIL INTERIOR DESIGN</AwardItem>
          <div>
            The accolade is presented to the designer of a space that most accurately embodies a brand’s identity and market positioning, effectively conveying this message to the customer.
          </div>
          <AwardItem>2024 ASIA’S BEST WORKPLACE INTERIOR DESIGN</AwardItem>
          <div>
            Recognizing exemplary achievement in interior design, the award honors spaces that ingeniously fuse aesthetics and functionality to cultivate inspiring and productive work settings.
          </div>
          <AwardItem>2024 ASIA’S BEST CONCEPTUAL INTERIOR DESIGN(concept,in-progress project)</AwardItem>
          <div>
            Recognizing visionary excellence in conceptualizing and advancing interior design projects that are in-progress, celebrating the forefront of creative ideation and innovation.
          </div>
        </ContentCard>
        <ContentCard title={"\\\nBest\nFurniture\nDesign"}>
          <h3>
            A testament to excellence and a celebration of precision in Furniture Design, where the apex of craftsmanship seamlessly intertwines artistic expression with practical utility, creating not just objects, but cherished extensions of our individuality and daily existence.
          </h3>
          <AwardItem>2024 ASIA’S BEST HOUSEHOLD FURNITURE DESIGN</AwardItem>
          <div>
            An exhibited array of pieces that combine intimacy and innovation, showcasing an exceptional level of creative flair and ingenuity.
          </div>
          <AwardItem>2024 ASIA’S BEST FURNITURE ACCESSORIES DESIGN</AwardItem>
          <div>
            This award honors designs that enhance both the functionality and aesthetics of furniture, underscoring the transformative power of accessories even for the finest pieces.
          </div>
          <AwardItem>2024 ASIA’S BEST LIGHTING DESIGN</AwardItem>
          <div>
            Celebrating exceptional innovation and artistry in the realm of illuminating spaces, recognizing the most outstanding contributions to visual aesthetics and ambiance.
          </div>
          <AwardItem>
            2024 ASIA’S BEST BATHROOM FURNITURE & SANITARY WARE DESIGN
          </AwardItem>
          <div>
            This award commends the skillful fusion of form and functionality in the intricacies of this highly specialized design field.
          </div>
        </ContentCard>
        <ContentCard title={"\\\nBest Firms in\nArchitecture\nDesign"}>
          <h3>
            Celebrating top-tier architectural and landscaping firms, these awards underscore architecture’s transformative role in daily life, with the Best Firms in Architecture award epitomizing exceptional accomplishment.
          </h3>
          <AwardItem>2024 ASIA’S BEST FIRM IN ARCHITECTURE DESIGN</AwardItem>
          <div>
            Acknowledging architecture’s profound impact on daily life, the award honors outstanding full-service architectural and landscaping firms.
          </div>
          <AwardItem>2024 ASIA’S BEST FIRM IN MASTER PLANNING</AwardItem>
          <div>
            Celebrating the preeminent firm showcasing ingenuity and excellence in crafting holistic urban development strategies across the Asian continent.
          </div>
          <AwardItem>2024 ASIA’S BEST FIRM IN CONSTRUCTION & MATERIAL</AwardItem>
          <div>
            Extolling the virtues of the company that has consistently and artfully demonstrated the transformative potential of landscapes, reshaping the way we experience and enriching the very fabric of our lives.
          </div>
          <AwardItem>2024 ASIA’S BEST FIRM IN HOSPITALITY ARCHITECTURE DESIGN FIRM</AwardItem>
          <div>
            Acknowledging the company with a proven history of skillfully intertwining commercial aspects with the essential personal touch required for creating exceptional hospitality designs.
          </div>
          <AwardItem>2024 ASIA’S BEST FIRM IN PROPERTY DEVELOPMENT</AwardItem>
          <div>
            A recognition bestowed upon the organization that has showcased its adeptness in shepherding projects from their inception to finalization, thereby metamorphosing landscapes, communities, and lives.
          </div>
        </ContentCard>
        <ContentCard title={"\\\nBest Firms in\nInterior\nDesign"}>
          <h3>
            An emblem of excellence for interior design firms that consistently deliver exceptional, inspiring projects setting industry benchmarks; the Best Firms in Interior Design award acknowledges their unwavering commitment to meticulous craftsmanship and innovation.
          </h3>
          <AwardItem>2024 ASIA’S BEST FIRM IN INTERIOR DESIGN</AwardItem>
          <div>
            The accolade for the company that has consistently demonstrated the skill to balance a holistic perspective with intricate details, seamlessly operating within the context while remaining steadfast to their unique vision.
          </div>
          <AwardItem>2024 ASIA’S BEST FIRM IN HOSPITALITY INTERIOR DESIGN</AwardItem>
          <div>
            Acknowledging the foremost firm in a sector where substantial projects must align with commercial imperatives while also catering to the individual needs and preferences of guests, with a specialization in hospitality interior design.
          </div>
          <AwardItem>2024 ASIA’S BEST BOUTIQUE INTERIOR DESIGN FIRM</AwardItem>
          <div>
            This award acknowledges smaller enterprises that have exceeded their perceived size and limited resources to achieve exceptional design outcomes.
          </div>
          <AwardItem>2024 ASIA’S BEST FIRM IN COMMERCIAL INTERIOR DESIGN</AwardItem>
          <div>
            The award awaits the visionary company that exemplifies unparalleled innovation and expertise in transforming commercial spaces into captivating environments.
          </div>
        </ContentCard>
        <ContentCard
          title={"\\\nBest Firms in\nFurniture\nManufacturing\n& Retailing"}
        >
          <h3>
            Recognizing the forefront of Furniture Manufacturing & Retailing firms in 2023, these awards highlight the pinnacle of craftsmanship and business acumen in the industry. The Best Firms in Furniture Manufacturing & Retailing award pays homage to those consistently redefining standards and experiences.
          </h3>
          <AwardItem>2024 ASIA’S BEST FURNITURE MANUFACTURER</AwardItem>
          <div>
            Acknowledging the unwavering commitment to superior manufacturing processes, meticulous attention to detail, and the relentless pursuit of turning exceptional designs into tangible reality.
          </div>
          <AwardItem>2024 ASIA’S BEST FURNITURE RETAILER/AGENCY</AwardItem>
          <div>
            The accolade for the entity that offers the most effective portrayal of designers and manufacturers, highlighting their vital link to the ultimate consumer.
          </div>
          <AwardItem>2024 ASIA’S BEST FIRM IN INNOVATIVE FURNITURE DESIGN</AwardItem>
          <div>
            A recognition celebrating genuine innovation in the realms of furniture design, sustainability, and functionality.
          </div>
        </ContentCard>
        <RegistrationFooterBanner />
      </main>
      <Footer />
    </div>
  );
}
