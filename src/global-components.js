import { defineAsyncComponent } from "vue";

export const registerComponents = (app) => {
  app.component(
    "Header",
    defineAsyncComponent(() => import("@/components/Header.vue"))
  );

  app.component(
    "HeaderMain",
    defineAsyncComponent(() => import("@/components/HeaderMain.vue"))
  );

  app.component(
    "Footer",
    defineAsyncComponent(() => import("@/components/Footer.vue"))
  );

  app.component(
    "GnbOpen",
    defineAsyncComponent(() => import("@/components/GnbOpen.vue"))
  );

  // Main page 내부 component
  app.component(
    "GnbOpenMain",
    defineAsyncComponent(() => import("@/components/mainPage/GnbOpenMain.vue"))
  );

  app.component(
    "VisualMain",
    defineAsyncComponent(() => import("@/components/mainPage/VisualMain.vue"))
  );

  app.component(
    "BestMain",
    defineAsyncComponent(() => import("@/components/mainPage/BestMain.vue"))
  );

  app.component(
    "Col2Left",
    defineAsyncComponent(() => import("@/components/mainPage/Col2Left.vue"))
  );

  app.component(
    "Col2Right",
    defineAsyncComponent(() => import("@/components/mainPage/Col2Right.vue"))
  );

  app.component(
    "ExpressMain",
    defineAsyncComponent(() => import("@/components/mainPage/ExpressMain.vue"))
  );

  app.component(
    "GmarketServiceMain",
    defineAsyncComponent(() =>
      import("@/components/mainPage/GmarketServiceMain.vue")
    )
  );
};
