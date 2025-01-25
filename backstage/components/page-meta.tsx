import type { Page } from "@antlur/backstage";

export function PageMeta(props: { page: Page }) {
  const { meta } = props.page;

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
    </>
  );
}
