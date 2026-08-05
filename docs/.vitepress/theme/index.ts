import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    // Global components can be registered here if necessary
  },
};
