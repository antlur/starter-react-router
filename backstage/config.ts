import { defineConfig } from "@antlur/backstage";
import { env } from "~/lib/env";

// import hero from "./blocks/hero";
// import mediaWithText from "./blocks/media-with-text";

export default defineConfig({
  // baseURL: "https://backstage.test/api",
  accountId: env("BACKSTAGE_ACCOUNT_ID"),
  token: env("BACKSTAGE_API_KEY"),
  // blocks: [hero, mediaWithText],
});
