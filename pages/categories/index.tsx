import Head from "next/head";
import Image from "next/image";
import ContentCard from "../../components/ContentCard";
import Footer from "../../components/Footer";
import { RegistrationFooterBanner } from "../../components/FooterBanner";
import Header from "../../components/Header";
import { CategoriesTopBanner } from "../../components/TopBanner";
import styles from "./styles.module.scss";

declare type AwardItemProps = {
  children: string;
};

const defaultText = "";

function AwardItem({ children }: AwardItemProps) {
  return (
    <div className={styles.awardItemContainer}>
      <Image
        className={styles.logo4}
        src="/logo4.svg"
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

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Categories</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <CategoriesTopBanner />
        <ContentCard title={"\\\n2023 AADA\nDisciplines"}>
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
            <div className={styles.oneImage}>
              <Image src="/square.svg" alt="Square" fill />
              <div className={styles.badgeContent}>ARCHITECTURE DESIGN</div>
            </div>
            <div className={styles.oneImage}>
              <Image src="/square.svg" alt="Square" fill />
              <div className={styles.badgeContent}>INTERIOR DESIGN</div>
            </div>
            <div className={styles.oneImage}>
              <Image src="/square.svg" alt="Square" fill />
              <div className={styles.badgeContent}>FURNITURE DESIGN</div>
            </div>
          </div>
          <div className={styles.images}>
            <div className={styles.oneImage}>
              <Image src="/square.svg" alt="Square" fill />
              <div className={styles.badgeContent}>
                FIRMS FOR ARCHITECTURE DESIGN
              </div>
            </div>
            <div className={styles.oneImage}>
              <Image src="/square.svg" alt="Square" fill />
              <div className={styles.badgeContent}>
                FIRMS FOR INTERIOR DESIGN
              </div>
            </div>
            <div className={styles.oneImage}>
              <Image src="/square.svg" alt="Square" fill />
              <div className={styles.badgeContent}>
                FIRMS IN FURNITURE MANUFACTURING & RETAILING
              </div>
            </div>
          </div>
        </ContentCard>
        <ContentCard title={"\\\nBest\nArchitecture\nDesign"}>
          <h3>
            Rewarding the work of professional architects that exemplifies
            design excellence and architectural innovation whilst delivering
            meaningful social impact. For commercial or residential projects
            that break beyond the boundaries of the accepted and forge a new
            path in sustainable, ground-breaking constructions.
          </h3>
          <AwardItem>2023 BEST RESORT ARCHITECTURE DESIGN</AwardItem>
          <div>
            This award is presented to design excellence in resort project that
            demonstrate creative flair and innovative sustainability approaches,
            not limited to holiday camps and nature resort.
          </div>
          <AwardItem>2023 BEST HOTEL ARCHITECTURE DESIGN</AwardItem>
          <div>
            This award is presented to recognize hotel design projects which
            need to service commercial realities but also the personal needs and
            desires of guests, not limited to hotels, boutique hotels or
            serviced apartments.
          </div>
          <AwardItem>2023 BEST F&B ARCHITECTURE DESIGN</AwardItem>
          <div>
            The creation of a specific space for the F&B industry that elevated
            an establishment far beyond what it prepares and serves.
          </div>
          <AwardItem>BEST LANDSCAPE ARCHITECTURE DESIGN</AwardItem>
          <div>
            This award honors landscape design true to the vision that
            landscapes have an impact on the lives of those who interact with
            these spaces.
          </div>
          <AwardItem>
            2023 BEST LEISURE & WELLNESS ARCHITECTURE DESIGN
          </AwardItem>
          <div>
            An award for exceptional design of spaces and facilities such as
            pools and recreation facilities that contribute significantly to a
            larger project
          </div>
          <AwardItem>2023 BEST RESIDENTIAL ARCHITECTURE DESIGN</AwardItem>
          <div>
            The ultimate accolade for the design of a truly exceptional,
            innovative, and livable home.
          </div>
          <AwardItem>
            2023 BEST COMMERCIAL BUILDING ARCHITECTURE DESIGN
          </AwardItem>
          <div>
            An award to honor the greatest visionaries of the architectural
            world whose creations can become synonymous with a city for
            generations.
          </div>
        </ContentCard>
        <ContentCard title={"\\\nBest\nInterior\nDesign"}>
          <h3>
            Honoring the innovative visions and remarkable works of interior
            designers. The very best interior design elevates a space to more
            than the sum of its parts and makes it something with true
            personality we want to live with.
          </h3>
          <AwardItem>2023 BEST RESORT INTERIOR DESIGN</AwardItem>
          <div>
            For interior design which makes an indelible mark on a resort
            project that demonstrates creative flair and imbues a project with a
            distinctive personality.
          </div>
          <AwardItem>2023 BEST HOTEL INTERIOR DESIGN</AwardItem>
          <div>
            Recognizing the best interior design project which successfully
            balanced commercial realities with the personal needs and desires of
            guests.
          </div>
          <AwardItem>2023 BEST F&B INTERIOR DESIGN</AwardItem>
          <div>
            This award honors an interior design project which weaves the
            commercial with the personal touch needed for the best hospitality
            designs.
          </div>
          <AwardItem>2023 BEST RESIDENTIAL INTERIOR DESIGN</AwardItem>
          <div>
            Perhaps one of the most personal and consequential design projects
            to undertake, this awards the very best example of this craft.
          </div>
          <AwardItem>2023 BEST RETAIL INTERIOR DESIGN</AwardItem>
          <div>
            The award goes to the creator of a space that best reflects a
            brand’s personality and positioning, and communicates this clearly
            to the consumer.
          </div>
          <AwardItem>2023 BEST LEISURE & WELLNESS INTERIOR DESIGN</AwardItem>
          <div>
            These spaces have functional, physical purposes, but also serve to
            soothe and refresh the mind, and this award honors its best example.
          </div>
          <AwardItem>2023 BEST COMMERCIAL INTERIOR DESIGN</AwardItem>
          <div>
            One of the greatest challenges the interior designer can face is
            making a significant space functional and appreciable, this awards
            the very best example of this.
          </div>
          <AwardItem>2023 BEST WORKPLACE INTERIOR DESIGN</AwardItem>
          <div>
            The award recognizes the best example of innovative workplace design
            that encourages collaboration, well-being, and productivity.
          </div>
        </ContentCard>
        <ContentCard title={"\\\nBest\nFurniture\nDesign"}>
          <h3>
            Best Furniture Design – An indication and celebration of quality and
            perfection in Furniture Design. The best furniture combines both art
            and functionality, it is where we engage with physical objects but
            they are also deeply personal parts of our life.
          </h3>
          <AwardItem>2023 BEST HOUSEHOLD FURNITURE DESIGN</AwardItem>
          <div>
            A demonstrated showcase of a portfolio of pieces that are both
            intimate and innovative, and which demonstrate a superior level of
            creative flair.
          </div>
          <AwardItem>2023 BEST FURNITURE ACCESSORIES DESIGN</AwardItem>
          <div>
            Even the best furniture can be improved with the right accessories
            and this award recognizes design that improves the function and
            beauty of furniture.
          </div>
          <AwardItem>2023 BEST LIGHTING DESIGN</AwardItem>
          <div>
            An award honoring the design of light pieces that not only
            illuminate spaces but are created and designed to make every day
            more beautiful and brighter.
          </div>
          <AwardItem>
            2023 BEST BATHROOM FURNITURE & SANITARY WARE DESIGN
          </AwardItem>
          <div>
            Illustrating a consistently high combination of form and
            functionality in this highly-specialized design field.
          </div>
        </ContentCard>
        <ContentCard title={"\\\nBest Firms in\nArchitecture\nDesign"}>
          <h3>
            Honoring the excellence of full-serviced Architectural & Landscaping
            firms, showcasing the phenomenal and undeniable impact architect in
            daily lives.
          </h3>
          <AwardItem>2023 BEST ARCHITECTURE DESIGN FIRM</AwardItem>
          <div>
            Honoring the excellence of full-service architectural and
            landscaping firms, showcasing the phenomenal and undeniable impact
            of architecture in daily lives. In recognizing this sustained
            dedication to excellence, the Best Firms In Architecture award is
            the ultimate accolade for a superior body of work.
          </div>
          <AwardItem>2023 BEST FIRM IN CONSTRUCTION & MATERIAL</AwardItem>
          <div>
            This award recognizes the excellence a firm has demonstrated in the
            course of its existence across a varying portfolio of construction
            and material projects.
          </div>
          <AwardItem>2023 BEST LANDSCAPE ARCHITECTURE DESIGN FIRM</AwardItem>
          <div>
            Honoring the firm that has consistently demonstrated how landscapes
            can help redesign the way we live our lives for the better.
          </div>
          <AwardItem>2023 BEST HOSPITALITY ARCHITECTURE DESIGN FIRM</AwardItem>
          <div>
            Recognizing the firm that has a track record of weaving the
            commercial with the personal touch needed for the best hospitality
            designs.
          </div>
          <AwardItem>2023 BEST PROPERTY DEVELOPMENT FIRM</AwardItem>
          <div>
            An award for the organization that has proven it can take projects
            from inception to completion and transform landscapes, communities,
            and lives.
          </div>
        </ContentCard>
        <ContentCard title={"\\\nBest Firms in\nInterior\nDesign"}>
          <h3>
            A certification of excellence for interior design firms in providing
            outstanding, inspiring projects that are truly exemplary within the
            industry. The Best Firms in Interior Design award recognizes
            organizations that have consistently displayed this focus and
            attention to detail.
          </h3>
          <AwardItem>2023 BEST INTERIOR DESIGN FIRM</AwardItem>
          <div>
            The award for the firm that has shown a consistent ability to focus
            on the big picture as much as the details, and work within context
            but still be true to their vision.
          </div>
          <AwardItem>2023 BEST HOTEL & RESORT INTERIOR FIRM</AwardItem>
          <div>
            Recognizing the best firm in a field where large projects need to
            service commercial realities but also the personal needs and desires
            of guests.
          </div>
          <AwardItem>2023 BEST BOUTIQUE INTERIOR DESIGN FIRM</AwardItem>
          <div>
            The award recognizes smaller firms who have performed above their
            perceived stature and limited resources to accomplish outstanding
            design results.
          </div>
        </ContentCard>
        <ContentCard
          title={"\\\nBest Firms in\nFurniture\nManufacturing\n& Retailing"}
        >
          <h3>
            A category acknowledging the end-to-end process required for success
            in all facets of the furniture industry.
          </h3>
          <AwardItem>2023 BEST FURNITURE MANUFACTURER</AwardItem>
          <div>
            Recognizing the consistently high quality of the manufacturing
            process, attention to detail, and dedication to making superior
            designs a reality.
          </div>
          <AwardItem>2023 BEST FURNITURE RETAILER</AwardItem>
          <div>
            The award for the organization providing the best representation for
            designers and manufacturers and their connection to the end
            consumer.
          </div>
          <AwardItem>2023 BEST INNOVATIVE FURNITURE DESIGN FIRM</AwardItem>
          <div>
            An award honoring the demonstration of true innovation in design,
            sustainability and functionality for furniture.
          </div>
        </ContentCard>
        <RegistrationFooterBanner />
      </main>
      <Footer />
    </div>
  );
}
