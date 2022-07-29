import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import { createHead } from "@vueuse/head";
import "./vars.css";

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // register global components
    // app.component('MetaComponent', MetaComponent);
    const head = createHead();
    app.use(head);
  },
};
