import type { Route } from "./+types/backstage-route";
import { client } from "@backstage/client";
import { PageFactory } from "@backstage/factories/page-factory";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  const page = await client.pages.getPageByPathname(pathname);

  if (!page) {
    throw new Response("Not found", { status: 404 });
  }

  return {
    page,
  };
}

export default function BackstageRoutes(props: Route.ComponentProps) {
  const { page } = props.loaderData;

  return <PageFactory page={page} />;
}
