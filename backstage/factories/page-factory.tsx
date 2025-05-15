import type { Page } from "@antlur/backstage";
import { PageMeta } from "@antlur/backstage/components/page-meta";
import { LayoutFactory } from "./layout-factory";

export function PageFactory({ page }: { page: Page }) {
  return (
    <>
      <PageMeta page={page} />
      <LayoutFactory slug={page.layout?.slug ?? "default"}>
        <div>Page: {page.title}</div>
      </LayoutFactory>
    </>
  );
}
