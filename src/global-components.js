import { defineAsyncComponent } from "vue";

export const registerComponents = (app) => {
  app.component(
    "Header",
    defineAsyncComponent(() => import("@/components/Header.vue"))
  );

  app.component(
    "Footer",
    defineAsyncComponent(() => import("@/components/Footer.vue"))
  );

  app.component(
    "Gnb",
    defineAsyncComponent(() => import("@/components/Gnb.vue"))
  );
};
