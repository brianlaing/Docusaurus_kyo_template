module.exports = {
  "title": "Kyocera Cloud Print and Scan",
  "tagline": "The tagline of my site",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "your-org",
  "projectName": "docusaurus",
  "themeConfig": {
    "navbar": {
      "title": "Kyocera Cloud Print and Scan",
      "logo": {
        "alt": "Kyocera Cloud Print and Scan",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "type": "localeDropdown",
          "position": "left"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [],
      "copyright":  "© 2021 KYOCERA Document Solutions, Inc."
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/",
          "sidebarPath": require.resolve('./sidebars.js')
        },
        "theme": {
          "customCss": require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  "plugins": [  
	[require.resolve('@cmfcmf/docusaurus-search-local'), {
    indexDocs: true,
         docsRouteBasePath: '/',
         indexDocSidebarParentCategories: 3,
         indexPages: false,
         language: ["en", "de", "es", "fr"],
     }]
],
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en",
      "de-de",
      "es-es",
      "fr-fr"
    ],
    "localeConfigs": {}
  }
};