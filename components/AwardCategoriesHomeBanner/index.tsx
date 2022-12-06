import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import styles from "./styles.module.scss";

declare type SliderItemProps = {
  isActive?: boolean;
  isLeft?: boolean;
  title: any;
  description: any;
};

function SliderItem({
  isActive = false,
  isLeft = false,
  title,
  description,
}: SliderItemProps) {
  const logo = isActive
    ? "/home/slider_active_logo.svg"
    : "/home/slider_inactive_logo.svg";
  const container = [
    isActive ? styles.active : isLeft ? styles.left : styles.right,
    styles.sliderItemContainer,
  ].join(" ");
  return (
    <div className={container}>
      <div className={styles.spacer} />
      <div className={styles.sliderLogo}>
        <Image src={logo} alt="Logo" fill />
      </div>
      <h2>{title}</h2>
      <div>{description}</div>
      <div className={styles.spacer} />
    </div>
  );
}

declare type Item = {
  title: string;
  description: string;
};
declare type SliderProps = {
  items: Item[];
};

function getSlideItems(children: any[], index: number): Item[] {
  const length = children.length;
  if (length < 3) return children;
  const i = index % length;
  if (i == 0) return [children[length - 1], children[0], children[1]];
  if (i == length - 1) return [children[i - 1], children[i], children[0]];
  return [children[i - 1], children[i], children[i + 1]];
}

function Slider({ items }: SliderProps) {
  const [index, setIndex] = useState(1);
  const length = items.length;
  const itemsDisplay = getSlideItems(items, index);

  return (
    <div className={styles.sliders}>
      <button
        className={styles.button}
        onClick={() => setIndex((index - 1) % length)}
      >
        <MdArrowBack size={25} />
      </button>
      <SliderItem
        key={index - 1}
        isLeft
        title={itemsDisplay[0].title}
        description={itemsDisplay[0].description}
      />
      <SliderItem
        key={index}
        isActive
        title={itemsDisplay[1].title}
        description={itemsDisplay[1].description}
      />
      <SliderItem
        key={index + 1}
        title={itemsDisplay[2].title}
        description={itemsDisplay[2].description}
      />
      <button
        className={styles.button}
        onClick={() => setIndex((index + 1) % length)}
      >
        <MdArrowForward size={25} />
      </button>
    </div>
  );
}

const sliderItems: Item[] = [
  {
    title: "2023 best architecture design",
    description:
      "Rewarding the work of professional architect that exemplifies design excellence and architectural innovation whilst delivering meaningful social impact.",
  },
  {
    title: "2023 Best Interior Design",
    description:
      "Rewarding the work of professional architect that exemplifies design excellence and architectural innovation whilst delivering meaningful social impact.",
  },
  {
    title: "2023 Best Furniture Design",
    description:
      "Rewarding the work of professional architect that exemplifies design excellence and architectural innovation whilst delivering meaningful social impact.",
  },
  {
    title: "2023 Best Firms in Architecture Design",
    description:
      "Rewarding the work of professional architect that exemplifies design excellence and architectural innovation whilst delivering meaningful social impact.",
  },
  {
    title: "2023 Best Firms in Interior Design",
    description:
      "Rewarding the work of professional architect that exemplifies design excellence and architectural innovation whilst delivering meaningful social impact.",
  },
  {
    title: "2023 Best Furniture Manufacturer/ Distributor",
    description:
      "Rewarding the work of professional architect that exemplifies design excellence and architectural innovation whilst delivering meaningful social impact.",
  },
];

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

export default function _View() {
  return (
    <div className={styles.container}>
      <h1>AWARD CATEGORIES</h1>
      <div className={styles.subTitle}>
        The appreciation of Architecture & Design works, ranging from
        independent work to full-serviced firms that has substantial
        contribution to the society.
      </div>
      <div className={styles.spacer} />
      <div className={styles.awardCategories}>
        {/* <Image alt="Award Categories" src="/home/award_categories.svg" fill /> */}
        <Slider items={sliderItems} />
      </div>
      <div className={styles.spacer} />
      <_ButtonLink href="/categories">
        EXPLORE ALL AWARDS CATEGORIES
      </_ButtonLink>
    </div>
  );
}
