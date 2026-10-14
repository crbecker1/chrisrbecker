
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.DsjDEvpF.js","/cdn/shopifycloud/checkout-web/assets/c1/app.DH8n-1bp.js","/cdn/shopifycloud/checkout-web/assets/c1/2c1ab0fe.qpvfywqb.js","/cdn/shopifycloud/checkout-web/assets/c1/6a2fc6d6.D4Q9fE76.js","/cdn/shopifycloud/checkout-web/assets/c1/4b4bc88f.DkycdxSK.js","/cdn/shopifycloud/checkout-web/assets/c1/2495faa4.DgGNI16D.js","/cdn/shopifycloud/checkout-web/assets/c1/cf29e63b.B0brOI65.js","/cdn/shopifycloud/checkout-web/assets/c1/9dba8418.4R19B40l.js","/cdn/shopifycloud/checkout-web/assets/c1/cb38e5c2.k1ouuKLe.js","/cdn/shopifycloud/checkout-web/assets/c1/2255f8fa.QeXR1fCM.js","/cdn/shopifycloud/checkout-web/assets/c1/d25d1b95.CoPrVoCi.js","/cdn/shopifycloud/checkout-web/assets/c1/f67abd2c.CNaB0QaR.js","/cdn/shopifycloud/checkout-web/assets/c1/b8733b27.DmG2FsdC.js","/cdn/shopifycloud/checkout-web/assets/c1/e39bc11c.CaER5qTM.js","/cdn/shopifycloud/checkout-web/assets/c1/08a3b809.BKNVX2Vm.js","/cdn/shopifycloud/checkout-web/assets/c1/164ad2e3.DcJn775M.js","/cdn/shopifycloud/checkout-web/assets/c1/d0bb51ec.CWfbNPnY.js","/cdn/shopifycloud/checkout-web/assets/c1/e12db40c.DhbHW8sF.js","/cdn/shopifycloud/checkout-web/assets/c1/60a453ce.DBFo6PRx.js","/cdn/shopifycloud/checkout-web/assets/c1/fb3b4968.CRtXXLkI.js","/cdn/shopifycloud/checkout-web/assets/c1/f8706cb6.PbccX-7u.js","/cdn/shopifycloud/checkout-web/assets/c1/dffdfb34.DKxh4eql.js","/cdn/shopifycloud/checkout-web/assets/c1/3ca8ef7e.DgXbCH_R.js","/cdn/shopifycloud/checkout-web/assets/c1/1f5e7811.DBGnR3_R.js","/cdn/shopifycloud/checkout-web/assets/c1/1d34c07e.h4dJAaCz.js","/cdn/shopifycloud/checkout-web/assets/c1/2fdb3dd3.BI5ol3i8.js","/cdn/shopifycloud/checkout-web/assets/c1/22345fd4.Bc95vVsB.js","/cdn/shopifycloud/checkout-web/assets/c1/0e67bd3b.BulkkgyN.js","/cdn/shopifycloud/checkout-web/assets/c1/74835653.Cr7sKbVy.js","/cdn/shopifycloud/checkout-web/assets/c1/a9fa9fda.BO9gwssW.js","/cdn/shopifycloud/checkout-web/assets/c1/ca3e798e.XLlup-KR.js","/cdn/shopifycloud/checkout-web/assets/c1/47b970b2.Bc5Vmfq5.js","/cdn/shopifycloud/checkout-web/assets/c1/064f6ac1.BoVb1opw.js","/cdn/shopifycloud/checkout-web/assets/c1/efa0389a.BiVLFqoF.js","/cdn/shopifycloud/checkout-web/assets/c1/4b1c22b7.zkM5jsqa.js","/cdn/shopifycloud/checkout-web/assets/c1/17425706.DtdfKQJ3.js","/cdn/shopifycloud/checkout-web/assets/c1/55098bf1.CjSE9kMx.js","/cdn/shopifycloud/checkout-web/assets/c1/cb5cf153.CNHN3NCG.js","/cdn/shopifycloud/checkout-web/assets/c1/e3e348f2.qdNJPs68.js","/cdn/shopifycloud/checkout-web/assets/c1/71ae3d5c.ChDO3fdz.js","/cdn/shopifycloud/checkout-web/assets/c1/78ab3dd0.DsAxQUAi.js","/cdn/shopifycloud/checkout-web/assets/c1/89e2d30a.C7YQuTRu.js","/cdn/shopifycloud/checkout-web/assets/c1/ed9f2238.Brwxl8Yi.js","/cdn/shopifycloud/checkout-web/assets/c1/6fb6f9d8.BoDxvz0l.js","/cdn/shopifycloud/checkout-web/assets/c1/1444e6bd.DTqbRn9m.js","/cdn/shopifycloud/checkout-web/assets/c1/0b8657b8.CeR0nGry.js","/cdn/shopifycloud/checkout-web/assets/c1/a422df8c.CDURsRjM.js","/cdn/shopifycloud/checkout-web/assets/c1/f49d4216.Che8BnjU.js","/cdn/shopifycloud/checkout-web/assets/c1/d22d2b80.BRIhtVxA.js","/cdn/shopifycloud/checkout-web/assets/c1/f58f39d8.z0CUAjnp.js","/cdn/shopifycloud/checkout-web/assets/c1/e03065ab.V1fBuv4e.js","/cdn/shopifycloud/checkout-web/assets/c1/79974aab.Cl0DLekt.js","/cdn/shopifycloud/checkout-web/assets/c1/7b0c98ea.B8saOsP6.js","/cdn/shopifycloud/checkout-web/assets/c1/0e9ee714.Cnsf3p8Q.js","/cdn/shopifycloud/checkout-web/assets/c1/39921a74.C0GzP1-7.js","/cdn/shopifycloud/checkout-web/assets/c1/7a8217fd.BSo0j5mC.js","/cdn/shopifycloud/checkout-web/assets/c1/8599b02a.D6crYzGJ.js","/cdn/shopifycloud/checkout-web/assets/c1/ccdf3592.DmQuNZVR.js","/cdn/shopifycloud/checkout-web/assets/c1/71b60e0a.DfPLdYsH.js","/cdn/shopifycloud/checkout-web/assets/c1/24773686.NjNSWG1C.js","/cdn/shopifycloud/checkout-web/assets/c1/ec391382.CmRYZq9D.js","/cdn/shopifycloud/checkout-web/assets/c1/6bfea526.WQUqRMom.js","/cdn/shopifycloud/checkout-web/assets/c1/ac5a19ff.C1i8fdUP.js","/cdn/shopifycloud/checkout-web/assets/c1/598fef4e.C71uub5O.js","/cdn/shopifycloud/checkout-web/assets/c1/e77f7fe0.Bl46DOUC.js","/cdn/shopifycloud/checkout-web/assets/c1/cc6ff67d.RYXq9KZi.js","/cdn/shopifycloud/checkout-web/assets/c1/bf513f9c.DfVLzm1y.js","/cdn/shopifycloud/checkout-web/assets/c1/dfca5da5.cHkNyCYM.js","/cdn/shopifycloud/checkout-web/assets/c1/dae24aab.LuzlJRmB.js","/cdn/shopifycloud/checkout-web/assets/c1/a25deb9a.B5l1rGH9.js","/cdn/shopifycloud/checkout-web/assets/c1/01973ac7.CzRJWXtH.js","/cdn/shopifycloud/checkout-web/assets/c1/58314944.CL_6FNuP.js","/cdn/shopifycloud/checkout-web/assets/c1/945a08d6.DPoKhjkl.js","/cdn/shopifycloud/checkout-web/assets/c1/7bc8057b.Cjs5rQ1q.js","/cdn/shopifycloud/checkout-web/assets/c1/f1968089.BiyF2g2x.js","/cdn/shopifycloud/checkout-web/assets/c1/2b89a178.DlMzn79y.js","/cdn/shopifycloud/checkout-web/assets/c1/b684bff6.Do6MtAvQ.js","/cdn/shopifycloud/checkout-web/assets/c1/910cd6e2.D9laAOO_.js","/cdn/shopifycloud/checkout-web/assets/c1/347b440c.xpK15B3S.js","/cdn/shopifycloud/checkout-web/assets/c1/9ce08e25.dSvNrRyM.js","/cdn/shopifycloud/checkout-web/assets/c1/181d38d3.C21ZO0gV.js","/cdn/shopifycloud/checkout-web/assets/c1/792bb671.B3OvVnSg.js","/cdn/shopifycloud/checkout-web/assets/c1/d6447d9e.yVMcZZjx.js","/cdn/shopifycloud/checkout-web/assets/c1/f51e663e.D3CveQI2.js","/cdn/shopifycloud/checkout-web/assets/c1/21cc90a2.DHzOO82q.js","/cdn/shopifycloud/checkout-web/assets/c1/64de7b49.BnCPa5-S.js","/cdn/shopifycloud/checkout-web/assets/c1/8e79be58.4pj59tZ-.js","/cdn/shopifycloud/checkout-web/assets/c1/90e26f5f.Ac9ME8KB.js","/cdn/shopifycloud/checkout-web/assets/c1/31cc568e.95lmLO5k.js","/cdn/shopifycloud/checkout-web/assets/c1/65f3d4da.Bb3QiqCm.js","/cdn/shopifycloud/checkout-web/assets/c1/ca5e9c49.BzUOvyL4.js","/cdn/shopifycloud/checkout-web/assets/c1/f3e117aa.CgyApM5y.js","/cdn/shopifycloud/checkout-web/assets/c1/7aefefff.CKGwXfaV.js","/cdn/shopifycloud/checkout-web/assets/c1/b3389d5c.AQoeX8aG.js","/cdn/shopifycloud/checkout-web/assets/c1/73a9b0a0.B8dxuTLG.js","/cdn/shopifycloud/checkout-web/assets/c1/25604ae0.56pfEpxV.js","/cdn/shopifycloud/checkout-web/assets/c1/dada7e07.DLvpJNXh.js","/cdn/shopifycloud/checkout-web/assets/c1/81e109b1.DOkM2TK2.js","/cdn/shopifycloud/checkout-web/assets/c1/86720dbb.CVGIgA6H.js","/cdn/shopifycloud/checkout-web/assets/c1/f692f62f.0aS5Pgyt.js","/cdn/shopifycloud/checkout-web/assets/c1/9babe369.DN4Uiit5.js","/cdn/shopifycloud/checkout-web/assets/c1/434e3b0a.oup8Ur0H.js","/cdn/shopifycloud/checkout-web/assets/c1/e0989459.E2HGFiMB.js","/cdn/shopifycloud/checkout-web/assets/c1/cdfd59e6.C61oFvbb.js","/cdn/shopifycloud/checkout-web/assets/c1/fc21c11a.CvREKW2p.js","/cdn/shopifycloud/checkout-web/assets/c1/e129c76e.83DznIAr.js","/cdn/shopifycloud/checkout-web/assets/c1/d4ea2faa.Bh5JwQU0.js","/cdn/shopifycloud/checkout-web/assets/c1/fe885b80.BxcRVx2R.js","/cdn/shopifycloud/checkout-web/assets/c1/f78726c8.CFtLd10H.js","/cdn/shopifycloud/checkout-web/assets/c1/e477f96c.Bg2MTFPd.js","/cdn/shopifycloud/checkout-web/assets/c1/1ed8f5e3.DIMgWfc5.js","/cdn/shopifycloud/checkout-web/assets/c1/7ee73f43.DRXbjRuN.js","/cdn/shopifycloud/checkout-web/assets/c1/0c0ad074.BuZ9_cdp.js","/cdn/shopifycloud/checkout-web/assets/c1/87bfafec.CxwEzGHg.js","/cdn/shopifycloud/checkout-web/assets/c1/051149c8.lHD9iIAq.js","/cdn/shopifycloud/checkout-web/assets/c1/d2e6a587.D5dE5VhU.js","/cdn/shopifycloud/checkout-web/assets/c1/c10167e6.BM-faetc.js","/cdn/shopifycloud/checkout-web/assets/c1/b9c0319a.8x5xdIiw.js","/cdn/shopifycloud/checkout-web/assets/c1/17e57de1.lSRGFmhc.js","/cdn/shopifycloud/checkout-web/assets/c1/4b77f49a.BzLU9Oqd.js","/cdn/shopifycloud/checkout-web/assets/c1/66338e00.ClCcLcum.js","/cdn/shopifycloud/checkout-web/assets/c1/e77d135d.Dz0RetrO.js","/cdn/shopifycloud/checkout-web/assets/c1/24fcbaf6.Cd2o8g7p.js","/cdn/shopifycloud/checkout-web/assets/c1/49758c58.BTDNmyJ_.js","/cdn/shopifycloud/checkout-web/assets/c1/28ac86c0.Bqxr0lQy.js","/cdn/shopifycloud/checkout-web/assets/c1/3e6029dd.CzD4uDEq.js","/cdn/shopifycloud/checkout-web/assets/c1/30074413.CFLdnyrE.js","/cdn/shopifycloud/checkout-web/assets/c1/9f57d2aa.CWVDsc-j.js","/cdn/shopifycloud/checkout-web/assets/c1/8574876b.DO_JQrVo.js","/cdn/shopifycloud/checkout-web/assets/c1/33d2e4fc.BYSXPXJF.js","/cdn/shopifycloud/checkout-web/assets/c1/27f09e31.B5qg3Kcy.js","/cdn/shopifycloud/checkout-web/assets/c1/137622f3.dz4lSUSx.js","/cdn/shopifycloud/checkout-web/assets/c1/54bf0ebb.hjCERqmO.js","/cdn/shopifycloud/checkout-web/assets/c1/29034f35.C5vHFLlG.js","/cdn/shopifycloud/checkout-web/assets/c1/c610ba76.D5HkYGh_.js","/cdn/shopifycloud/checkout-web/assets/c1/413b21e2.B8hOJrbg.js","/cdn/shopifycloud/checkout-web/assets/c1/2210eadb.DF0gIp_2.js","/cdn/shopifycloud/checkout-web/assets/c1/33682ee7.CpW0FJxZ.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox.B0IYulSI.worker.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox-2025-07.Y8PbZN5J.worker.js","https://extensions.shopifycdn.com/shopifycloud/checkout-web/assets/c1/polyfills-entry-modern.70q66_NX.worker.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.CcGlIMpn.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/wallet-prefilled-guest-return.BJvF0-q4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/hydrate.DDB053YN.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.D7X_C-3s.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VatNumberValidationField.d9bKhKtH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StickyPayButton.Cv62Qqkq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Tipping.BcTJoNaV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.DT05kVlY.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.gzvCNwz_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayProgressIntercepts.CIy8uDiZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.CrYuHUmO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/constants.xO_7ctnq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.BdwN7V1K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayLogo.87JMHPUK.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.BS8yVgoP.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EmptyState.BEvzDDvy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingLines.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.B_THySFF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ExpressCheckoutButton.BnDF3H7t.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/TransitionHeight.CuRoM9zv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BelowTheFoldContent.CyS-bj2t.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RememberMeSection.JBO5WNhc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PayButtonSection.CZuxzxFG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.DjDhVpQB.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/hooks.CKE1iCma.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentOptionSelector.s-Kd_X2E.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentMethodProgressionHost.C0BOgdmL.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Popover.Bi1nHaU-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/floating-layer.DfWUBaTh.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.vTcdVGq4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RedirectionNotice.DgiInWJ-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.DbBB6lBJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/QRCode.BZ_m5G5a.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Pressable.D9SfDfsb.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DateField.CFFsBmUK.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/NumberField.CRpcZnVJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Sheet.CpR5hiDV.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0553/0107/9240/files/logo4_d8fadfed-e196-42d5-acf7-d7002ad50524_x320.png?v=1676618676"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  