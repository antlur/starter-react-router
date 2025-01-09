import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Image } from "@unpic/react";

export function meta({}: Route.MetaArgs) {
  return [{ title: "New React Router App" }, { name: "description", content: "Welcome to React Router!" }];
}

export default function Home() {
  return (
    <div>
      <Image
        src="https://cdn.bckstg.app/media/4560/3T3A5824.jpg"
        layout="constrained"
        width={400}
        height={300}
        alt="A lovely bath"
        cdn="netlify"
      />
    </div>
  );
}
