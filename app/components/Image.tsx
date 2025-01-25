import { type ComponentPropsWithoutRef } from "react";

type Layout = "constrained" | "fixed" | "fullWidth";

interface ImageProps extends Omit<ComponentPropsWithoutRef<"img">, "src"> {
  src: string;
  image?: { url: string };
  width?: number;
  height?: number;
  quality?: number;
  layout?: Layout;
}

export function Image({
  image,
  src,
  width = 2000,
  height,
  quality,
  loading = "lazy",
  alt = "",
  layout = "constrained",
  style,
  ...props
}: ImageProps) {
  const imageUrl = src ?? image?.url;
  if (!imageUrl) throw new Error("Either src or image.url must be provided");

  const breakpoints = [1, 2, 3].map((multiplier) => ({
    width: multiplier * width,
    url: imgproxyLoader({
      src: imageUrl,
      width: multiplier * width,
      height,
      quality,
    }),
  }));

  const layoutStyles = {
    constrained: { maxWidth: `${width}px`, width: "100%" },
    fixed: { width: `${width}px` },
    fullWidth: { width: "100%" },
  };

  return (
    <picture>
      {breakpoints.map(({ width, url }) => (
        <source key={url} srcSet={url} media={`(min-width: ${width / 2}px)`} type="image/webp" />
      ))}
      <img
        src={breakpoints[0].url}
        loading={loading}
        alt={alt}
        width={width}
        height={height}
        style={{ ...layoutStyles[layout], ...style }}
        {...props}
      />
    </picture>
  );
}

interface ImgproxyLoaderProps {
  src: string;
  width?: number;
  height?: number;
  quality?: number;
}

export default function imgproxyLoader({ src, width, height, quality }: ImgproxyLoaderProps) {
  const path =
    `/size:${width ? width : 0}:${height ? height : 0}` +
    `/resizing_type:fill` +
    (quality ? `/quality:${quality}` : "") +
    `/sharpen:0.5` +
    `/plain/${src}` +
    `@webp`;

  const host = "https://imgproxy.antlur.co";

  const imgUrl = `${host}/insecure${path}`;

  return imgUrl;
}
