import { default as defaultTheme } from "mdx-deck/themes";

const { css: defaultCss } = defaultTheme;

const linkColor = "#6f0";
export const BibleStudy = {
  ...defaultTheme,
  font: "Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  css: {
    ...defaultCss,
    backgroundImage: "linear-gradient(135deg, #036, #306)"
  },
  colors: {
    text: "#fff",
    background: "#036",
    link: linkColor
  },
  link: {
    borderBottom: "1px dashed currentColor",
    textDecoration: "none",

    "&:hover": {
      color: linkColor
    }
  }
};
