import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { MdArrowForward } from "react-icons/md";

function _ButtonLink({ href, children }: any) {
  return (
    <Link href={href}>
      <div className={styles.buttonLink}>
        <div className={styles.wrapper}>{children}</div>
        <MdArrowForward size={20} />
      </div>
    </Link>
  );
}

export function TheAwardFooterBanner() {
  return (
    <_View bgUrl="/bg_the_award.webp">
      <h1>{"Why you\nshould submit"}</h1>
      <_ButtonLink href="/categories">EXPLORE 2024 AADA CATEGORIES</_ButtonLink>
    </_View>
  );
}

export function AdvisorsFooterBanner({ className }: any) {
  return (
    <_View bgUrl="/bg_the_award.webp" className={className}>
      <h1>{"Ready to\nSubmit your Work?"}</h1>
      <_ButtonLink href="/categories">EXPLORE 2024 AADA CATEGORIES</_ButtonLink>

    </_View>
  );
}

export function GetInvolvedFooterBanner() {
  return (
    <_View bgUrl="/bg_the_award.webp">
      <h1>{"EXCITED TO BECOME\nA SPONSOR?"}</h1>
      <_ButtonLink href="mailto:hello@aadawards.com">CONTACT US NOW</_ButtonLink>
    </_View>
  );
}

export function RegistrationFooterBanner({ className }: any) {
  return (
    <_View bgUrl="/bg_the_award.webp" className={className}>
      <h1>{"READY TO\nSUBMIT YOUR WORK?"}</h1>
      <_ButtonLink href="/open-account">
        OPEN YOUR ACCOUNT NOW
      </_ButtonLink>
    </_View>
  );
}

declare type FooterPropProps = {
  bgUrl: string;
  children: any;
  className?: string;
};

export default function _View({
  bgUrl,
  children,
  className = "",
}: FooterPropProps) {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.background}>
        <div>
          <Image src={bgUrl} alt="Background" fill />
        </div>
      </div>
      <Image src="/logo2.svg" alt="Logo" width={97} height={80} />
      {children}
    </div>
  );
}
