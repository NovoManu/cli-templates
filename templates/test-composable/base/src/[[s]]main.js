import { createApp } from "vue";

import App from "./App.vue";
{{routerImport}}

const app = createApp(App);

{{routerUse}}

app.mount("#app");
