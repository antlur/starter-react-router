import type { Route } from "./+types/index";
import { Image } from "~/components/Image";

export default function Home() {
  return (
    <div>
      <title>Hello</title>
      <h1>Hello</h1>
      <Image
        src="https://cdn.bckstg.app/media/4560/3T3A5824.jpg"
        layout="constrained"
        width={400}
        height={300}
        alt="A lovely bath"
      />
    </div>
  );
}
