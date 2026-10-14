/*
@license
  Expanse by Archetype Themes (https://archetypethemes.co)
  Access unminified JS in assets/theme.js

  Use this event listener to run your own JS outside of this file.
  Documentation - https://archetypethemes.co/blogs/expanse/javascript-events-for-developers

  document.addEventListener('page:loaded', function() {
    // Page has loaded and theme assets are ready
  });
*/console&&console.log&&console.log("Expanse theme ("+theme.settings.themeVersion+") by ARCH\u039ETYPE | Learn more at https://archetypethemes.co"),(function(){"use strict";window.Shopify&&window.Shopify.theme&&navigator&&navigator.sendBeacon&&window.Shopify.designMode&&navigator.sendBeacon("https://api.archetypethemes.co/api/beacon",new URLSearchParams({shop:window.Shopify.shop,themeName:window.theme&&window.theme.settings&&"".concat(window.theme.settings.themeName," v").concat(window.theme.settings.themeVersion),role:window.Shopify.theme.role,route:window.location.pathname,themeId:window.Shopify.theme.id,themeStoreId:window.Shopify.theme.theme_store_id||0,isThemeEditor:!!window.Shopify.designMode}));function DOMready(callback){document.readyState!="loading"?callback():document.addEventListener("DOMContentLoaded",callback)}function initPrivacyOverlayGuard(){var root=document.documentElement;function isVisible(element){if(!element||element.getClientRects().length===0)return!1;var styles=window.getComputedStyle(element);return styles.display!=="none"&&styles.visibility!=="hidden"}function updatePrivacyOverlayState(){var banner=document.getElementById("shopify-pc__banner"),preferences=document.getElementById("shopify-pc__prefs");root.classList.toggle("privacy-ui-active",isVisible(banner)||isVisible(preferences))}updatePrivacyOverlayState(),new MutationObserver(updatePrivacyOverlayState).observe(document.body,{attributes:!0,attributeFilter:["aria-hidden","class","hidden","style"],childList:!0,subtree:!0})}DOMready(function(){initPrivacyOverlayGuard(),document.dispatchEvent(new CustomEvent("page:loaded"))})})();
//# sourceMappingURL=/cdn/shop/t/39/assets/theme.js.map?v=162795197211292655991788336230
