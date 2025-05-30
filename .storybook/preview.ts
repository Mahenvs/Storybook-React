import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      //   storySort: (a, b) =>
      //     a.id === b.id
      //       ? 0
      //       : a.id.localeCompare(b.id, undefined, { numeric: true }),
      // },
      storySort: {
        method: "alphabetical",
      },
    },
  },
};

export default preview;
