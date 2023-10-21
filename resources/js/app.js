import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import MainLayout from "./Layouts/MainLayout.vue";
import '../css/app.css';
import {InertiaProgress} from "@inertiajs/progress";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

// import icon style(s)
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// add the icon style(s) you have installed to the library
library.add(faGithub);

InertiaProgress.init({
    delay: 0,
    color: '#29d',
    includeCSS: true,
    showSpinner: true,
});

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });

        let page = pages[`./Pages/${name}.vue`];

        if (!page) {
            // Handle the case when the page is not found
            throw new Error(`Page '${name}' not found.`);
        }

        // Check if page.default exists, and if not, assign it
        if (!page.default) {
            page.default = {};
        }

        // Assign the layout property
        page.default.layout = page.default.layout || MainLayout;

        return page;
    },
    setup: ({ el, App, props, plugin }) => {
        createApp({ render: () => h(App, props) })
            .component("font-awesome-icon", FontAwesomeIcon)
            .use(plugin)
            .mount(el);
    },
});


