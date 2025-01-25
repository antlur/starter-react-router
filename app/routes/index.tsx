import type { Route } from "./+types/index";
import { Image } from "@/components/Image";
import { client } from "@backstage/client";
import { PageMeta } from "@backstage/components/page-meta";

export async function loader({}: Route.LoaderArgs) {
  const page = await client.pages.getHomePage();
  return {
    page,
  };
}

export default function Home(props: Route.ComponentProps) {
  const { page } = props.loaderData;

  return (
    <>
      <PageMeta page={page} />
      <h1>Hello</h1>
      <div className="w-1/2">
        <Image
          src="https://cdn.bckstg.app/media/4560/3T3A5824.jpg"
          layout="fullWidth"
          width={600}
          height={200}
          alt="A lovely bath"
          loading="eager"
        />
      </div>
    </>
  );
}
