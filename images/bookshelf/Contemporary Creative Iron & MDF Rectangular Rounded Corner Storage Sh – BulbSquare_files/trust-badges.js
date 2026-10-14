const TUNNEL_URL = "https://trust.conversionbear.com/";

class TrustBadges extends HTMLElement {
  connectedCallback() {
    const ultimateBadges = document.createElement("div");
    ultimateBadges.className = "ultimate-badges";
    this.appendChild(ultimateBadges);

    const scriptElement = document.createElement("script");
    scriptElement.type = "text/javascript";
    scriptElement.defer = true;
    scriptElement.src = `${TUNNEL_URL}script?shop=${
      Shopify?.shop || window.location.host
    }&app=trust_badge`;
    const firstScriptElement = document.getElementsByTagName("script")[0];
    firstScriptElement.parentNode.insertBefore(
      scriptElement,
      firstScriptElement
    );
  }
}

customElements.define("trust-badges", TrustBadges);
