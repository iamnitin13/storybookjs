/** @type { import('@storybook/react-webpack5').Preview } */
import "../src/index.css";

const preview = {
  parameters: {
    //control behaviour of storybook feature & addson
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
