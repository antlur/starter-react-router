import { Image as UnpicImage, type ImageProps } from "@unpic/react";
import { env } from "~/lib/env";

export function Image(props: ImageProps) {
  const defaultCdn = env("Netlify") ? "netlify" : undefined;
  const cdn = props.cdn ? props.cdn : defaultCdn;
  return <UnpicImage {...props} cdn={cdn} />;
}
