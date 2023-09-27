import Image from "next/image";
import { useRef, useState } from "react";

const supportDomain = ["files.aadawards.com", "files-uat.aadawards.com"];

function isOptimizeImage(src: string) {
  if (!src) return false;
  try {
    const url = new URL(src);
    return supportDomain.includes(url.hostname);
  } catch (error) {
    return false;
  }
}

function getSrcWithSize(src: string, size: string): string {
  if (!size || !src) return src;

  const url = new URL(src);
  url.searchParams.append("size", size);
  url.searchParams.append("format", "webp");

  return url.href;
}

const _sizes = ["w10", "w100"];

declare type CustomImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
};
export default function _View({
  src,
  className,
  width,
  height,
  fill,
  alt,
}: CustomImageProps) {
  const [size, setSize] = useState(0);

  const ref = useRef<HTMLImageElement>(null);
  const clientWidth = ref.current?.clientWidth;
  const _width = (clientWidth ?? 0) > 1000 ? 1000 : clientWidth;
  const sizes = [..._sizes, _width ? `w${_width * 2}` : ""];

  const url = !isOptimizeImage(src) ? src : getSrcWithSize(src, sizes[size]);

  return (
    <Image
      unoptimized
      ref={ref}
      className={className}
      width={width}
      height={height}
      fill={fill}
      src={url}
      alt={alt}
      onLoad={() => {
        if (size < sizes.length - 1) setSize(size + 1);
      }}
    />
  );
}
