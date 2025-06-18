"use client";
// import { Image } from "@/components/image";
// import { cn } from "@/v1/lib/utils";
import { Image, type ImageProps } from "@unpic/react";
import { env } from "@/lib/env";

interface BackstageImageProps extends ImageProps {
  image: any;
  // maxWidth?: number;
  // src?: string;
  // loading?: "lazy" | "eager";
  // width?: number;
  // height?: number;
  // className?: string;
  // alt?: string;
}

export default function BackstageImage({ image, src, alt, loading = "lazy", ...props }: ImageProps) {
  return (
    <Image
      src={(src || image?.url) ?? ""}
      alt={(alt || image?.alt) ?? ""}
      width={props.width ?? image?.width}
      height={props.height ?? image?.height}
      className={cn("object-cover w-full h-full", props.className)}
      cdn={env("NETLIFY") ? "netlify" : undefined}
    />
  );
}
