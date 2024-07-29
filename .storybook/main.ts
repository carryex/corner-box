import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ['../src/app/**/*.stories.tsx'],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  features: { experimentalRSC: true }
};
export default config;
