import "server-only";
import type { ConfigFactory } from "@/config/config.interface";

const configFactory: ConfigFactory = () => ({
  canonicalBaseUrl: new URL(process.env.CANONICAL_BASE_URL!),
  analyticsEnable: process.env.ANALYTICS === "true",
});

export { configFactory };
