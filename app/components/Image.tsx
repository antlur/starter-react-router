import { Image as UnpicImage, type ImageProps } from "@unpic/react";

export function Image(props: ImageProps) {
  props.cdn ??= "netlify";
  return <UnpicImage {...props} />;
}
