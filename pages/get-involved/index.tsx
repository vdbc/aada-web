import Head from "next/head";
import Image from "next/image";
import ContentCard from "../../components/ContentCard";
import Footer from "../../components/Footer";
import { GetInvolvedFooterBanner } from "../../components/FooterBanner";
import Header from "../../components/Header";
import { GetInvolvedTopBanner } from "../../components/TopBanner";
import styles from "./styles.module.scss";

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
            Winning the 2023 ASIA ARCHITECTURE DESIGN AWARDS is a prestigious
            accolade, giving businesses a springboard on an international level
            and augmenting their global profile.
          </div>
          <h2>SPONSORING THE AWARD</h2>
          <div>
            2023 AADA welcomes sponsorships in 4 levels from companies,
            organizations and individuals.
          </div>
        </ContentCard>
        <ContentCard title={"\\\nNominate\nYour Work"}>
          <h2>FOR NOMINEES</h2>
          <div className={styles.images}>
            <div className={styles.groupImage}>
              <div className={styles.oneImage}>
                <Image src="/brand_rect.svg" alt="Square" fill />
                <div className={styles.badgeContent}>BRAND DIFFERENTIATION</div>
              </div>
              <div className={styles.imageDesc}>
                Create a niche and stand-out by the recognition of 2023 AADA
                with the hard work to be valued and qualified.
              </div>
            </div>
            <div className={styles.groupImage}>
              <div className={styles.oneImage}>
                <Image src="/brand_rect.svg" alt="Square" fill />
                <div className={styles.badgeContent}>INCREASED CREDIBILITY</div>
              </div>
              <div className={styles.imageDesc}>
                Winning 2023 AADA is a worthy opportunity to have a brand
                identity boost, not only on the brand’s direct marketing
                platforms, but also across various international and local media
                channels.
              </div>
            </div>
            <div className={styles.groupImage}>
              <div className={styles.oneImage}>
                <Image src="/brand_rect.svg" alt="Square" fill />
                <div className={styles.badgeContent}>
                  EXCELLENT MARKETING OPPORTUNITIES
                </div>
              </div>
              <div className={styles.imageDesc}>
                AADA supports promoting the brand’s projects and products to
                professionals and potential clients on an international scale.
                The follow-up upon achieving 2023 AADA shall create a remark to
                your brand identity.
                <br />
                Winners are provided the exclusive 2023 AADA Winners’ Kit
                including collaterals in print and digital for marketing
                purposes: 2023 AADA Winner logo license; 2023 AADA Hall of Fame
                yearbook, trophy and certificate.
              </div>
            </div>
          </div>
        </ContentCard>
        <ContentCard title={"\\\nSponsor\nThe Awards"}>
          <h2>SPONSORSHIP</h2>
          <div className={styles.images}>
            <div className={styles.groupImage}>
              <div className={styles.oneImage}>
                <Image src="/brand_rect.svg" alt="Square" fill />
                <div className={styles.badgeContent}>DIRECT MEDIA APPROACH</div>
              </div>
              <div className={styles.imageDesc}>
                Get published to AADA international media list upon winning 2023
                AADA by a bundle of press releases, interviews and spotlight
                videos throughout the competition.
              </div>
            </div>
            <div className={styles.groupImage}>
              <div className={styles.oneImage}>
                <Image src="/brand_rect.svg" alt="Square" fill />
                <div className={styles.badgeContent}>
                  EXCELLENT MARKETING OPPORTUNITIES
                </div>
              </div>
              <div className={styles.imageDesc}>
                Customized pre and post-event marketing campaigns mentioning
                Sponsors across various platforms, mainly newswires and website
                promotion.
                <br />
                AADA provides core col lateral of 2023 AADA that contains both
                physical and digital assets for marketing purposes: Brand’s logo
                placement on all AADA POSM throughout the competition, exclusive
                exhibition in Winners’ Gala Night…
              </div>
            </div>
            <div className={styles.groupImage}>
              <div className={styles.oneImage}>
                <Image src="/brand_rect.svg" alt="Square" fill />
                <div className={styles.badgeContent}>GLOBAL PROMOTION</div>
              </div>
              <div className={styles.imageDesc}>
                Generate brand exposure to an expanded media list across and
                beyond Asia and reach numerous audiences in the field yet
                demonstrate the brand’s leadership and support within the
                architecture and design industry.
              </div>
            </div>
          </div>
          <div className={styles.images}>
            <div className={styles.groupImage}>
              <div className={styles.oneImage}>
                <Image src="/brand_rect.svg" alt="Square" fill />
                <div className={styles.badgeContent}>RECOGNITION</div>
              </div>
              <div className={styles.imageDesc}>
                Fostering recognition within and beyond the industry, by earning
                credibility from industry leaders (from industry professionals,
                journalists, scholars, and entrepreneurs) based on a
                standardized scoring system for each and every criterion.
              </div>
            </div>
            <div className={styles.groupImage}>
              <div className={styles.oneImage}>
                <Image src="/brand_rect.svg" alt="Square" fill />
                <div className={styles.badgeContent}>INCREASED CREDIBILITY</div>
              </div>
              <div className={styles.imageDesc}>
                Tailor-fit sponsorship opportunities are available for
                businesses to enhance their brand position and strengthen the
                bond between businesses and design enthusiasts.
              </div>
            </div>
            <div className={styles.groupImage}>
              <div className={styles.oneImage}>
                <Image src="/brand_rect.svg" alt="Square" fill />
                <div className={styles.badgeContent}>NETWORKING</div>
              </div>
              <div className={styles.imageDesc}>
                Connect with industry key players and experts whist forging new
                business opportunities during the 2023 AADA Winners’ Gala night
                at Fairmont Singapore.
              </div>
            </div>
          </div>
        </ContentCard>
        <ContentCard title={"\\\nSponsorship\nAdvantages"}>
          <h2>DIRECT ADVERTISEMENT</h2>
          <div>
            Give your brand and product an opportunity to be involved in direct
            marketing, get the right solicitation of advertisement to specific
            segmented audience for better exposure and reach out. Be part of our
            strategies in direct communication through effective channels such
            as online adverts, newspapers, magazines, newswires and collateral
            advertising.
          </div>
          <h2>REASON TO GET PUBLIC</h2>
          <div>
            Hopping into the next level of business growth is the ultimate
            reason for getting involved whilst demonstrating the beautiful
            creation of creativities that the world has come to expect. Increase
            your business prestige is the chance that this partnership can
            provide.
          </div>
          <h2>ENGAGEMENT</h2>
          <div>
            It is your value that drives your business to delight the users or
            customers. Enormous engagement creates a path to better reach out
            which essentially generate wider awareness.
          </div>
          <h2>DIFFERENTIATION</h2>
          <div>
            The focus into innovation and sustainability are what our next
            generation of creation will be moving forward. Be part of this
            strategy to position your creation in a unique proposition and stand
            out amongst competitors.
          </div>
          <h2>EXCLUSIVE ACCESS</h2>
          <div>
            Get your exclusive access to all our events, networks, and other
            events organized by AAO, alongside with our strategic business
            partners for boundless connection. You will have a full liberty to
            showcase your invention that generate higher prospect of wider
            audience.
          </div>
        </ContentCard>
        <GetInvolvedFooterBanner />
      </main>
      <Footer />
    </div>
  );
}
