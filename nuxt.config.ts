// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/color-mode", "@nuxtjs/i18n"],
    colorMode: {
        preference: "light", // default value of $colorMode.preference
        fallback: "light", // fallback value if not system preference found
    },
    i18n: {
        locales: [
            {
                code: "en",
                name: "English",
                iso: "en",
            },
            {
                code: "pl",
                name: "Polski",
                iso: "pl",
            },
        ],
        defaultLocale: "pl",
        vueI18n: {
            fallbackLocale: "en",
            messages: {
                en: require("./locales/en.js"),
                pl: require("./locales/pl.js"),
            },
        },
    },
    css: ["@/assets/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@use "@/assets/variables/_colors.scss" as *;',
                },
            },
        },
    },
});
