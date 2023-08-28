import {
  features,
  feedback,
  layout,
  styles_default
} from "/build/_shared/chunk-PBMWK72N.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZV7NBZZ7.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Button.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Button.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Button.jsx"
  );
  import.meta.hot.lastModified = "1693218048443.9666";
}
var Button = ({
  styles,
  text
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: `py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-green-gradient rounded-[10px] outline-none ${styles}`, children: text }, void 0, false, {
  fileName: "app/components/Button.jsx",
  lineNumber: 24,
  columnNumber: 7
}, this);
_c = Button;
var Button_default = Button;
var _c;
$RefreshReg$(_c, "Button");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Business.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Business.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Business.jsx"
  );
  import.meta.hot.lastModified = "1693218092247.2524";
}
var FeatureCard = ({
  icon,
  title,
  content,
  index
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `flex flex-row p-6 rounded-[20px]  ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card `, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `w-[64px] h-[64px] rounded-full ${styles_default.flexCenter} bg-dimBlue`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: icon, alt: "star", className: "w-[50%] h-[50%] object-contain" }, void 0, false, {
    fileName: "app/components/Business.jsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Business.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 flex flex-col ml-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { className: "font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1", children: title }, void 0, false, {
      fileName: "app/components/Business.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-poppins font-normal text-dimWhite text-[16px] leading-[24px]", children: content }, void 0, false, {
      fileName: "app/components/Business.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Business.jsx",
    lineNumber: 33,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/Business.jsx",
  lineNumber: 29,
  columnNumber: 7
}, this);
_c2 = FeatureCard;
var Business = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { id: "features", className: "flex md:flex-row flex-col mb-8 mx-10 ", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: layout.sectionInfo, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: styles_default.heading2, children: [
      "Why Wouldn't You Want ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", { className: "sm:block hidden" }, void 0, false, {
        fileName: "app/components/Business.jsx",
        lineNumber: 46,
        columnNumber: 31
      }, this),
      " A Keltec Performance Exhaust System?"
    ] }, void 0, true, {
      fileName: "app/components/Business.jsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: `${styles_default.paragraph} max-w-[470px] mt-5`, children: "With many years of experience Keltec Performance is one of the pioneering performance exhaust manufactures serving the UK from our west Yorkshire factory. We provide the consumer with unrivalled customer service. We make sure all the products we manufacture are of exemplary quality." }, void 0, false, {
      fileName: "app/components/Business.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { styles: `mt-10`, text: "Get Started" }, void 0, false, {
      fileName: "app/components/Business.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Business.jsx",
    lineNumber: 44,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${layout.sectionImg} flex-col lg:pt-10`, children: features.map((feature, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FeatureCard, { ...feature, index }, feature.id, false, {
    fileName: "app/components/Business.jsx",
    lineNumber: 60,
    columnNumber: 41
  }, this)) }, void 0, false, {
    fileName: "app/components/Business.jsx",
    lineNumber: 59,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/Business.jsx",
  lineNumber: 43,
  columnNumber: 24
}, this);
_c22 = Business;
var Business_default = Business;
var _c2;
var _c22;
$RefreshReg$(_c2, "FeatureCard");
$RefreshReg$(_c22, "Business");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/CallToAction.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/CallToAction.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/CallToAction.jsx"
  );
  import.meta.hot.lastModified = "1693226313128.8916";
}
var CTA = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: `flex flex-col md:flex-row-reverse ${styles_default.marginY} ${styles_default.padding} bg-black-gradient-2 rounded-[20px] box-shadow m-10`, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-1 flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: `${styles_default.heading2} text-center sm:text-left`, children: "What Are You Waiting For!" }, void 0, false, {
        fileName: "app/components/CallToAction.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: `${styles_default.paragraph} text-center sm:text-left max-w-[470px] mt-5`, children: "Contact us to get a free quote and see how we can help you." }, void 0, false, {
        fileName: "app/components/CallToAction.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/CallToAction.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-4 p-4 text-center md:text-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { text: "Contact Us" }, void 0, false, {
      fileName: "app/components/CallToAction.jsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/CallToAction.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CallToAction.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-4 md:mt-0 md:ml-4 md:pl-4 w-full md:w-1/2 md:block hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "/custom-exhaust-system.jpeg", alt: "Custom Exhaust System", className: "w-full object-cover" }, void 0, false, {
    fileName: "app/components/CallToAction.jsx",
    lineNumber: 40,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/CallToAction.jsx",
    lineNumber: 39,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/CallToAction.jsx",
  lineNumber: 23,
  columnNumber: 19
}, this);
_c3 = CTA;
var CallToAction_default = CTA;
var _c3;
$RefreshReg$(_c3, "CTA");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/FindOutMore.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/FindOutMore.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/FindOutMore.jsx"
  );
  import.meta.hot.lastModified = "1689505670837.2234";
}
function FindOutMore() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `${styles_default.flexCenter} w-[140px] h-[140px] mt-8 rounded-full bg-green-600 p-[2px] cursor-pointer`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `${styles_default.flexCenter} flex-col bg-black-gradient w-[100%] h-[100%] rounded-full`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `${styles_default.flexStart} flex-row`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-poppins font-medium text-[18px] leading-[23.4px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-gradient", children: "Find Out" }, void 0, false, {
        fileName: "app/components/FindOutMore.jsx",
        lineNumber: 27,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/FindOutMore.jsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: "/arrow-up.svg", alt: "arrow-up", className: "w-[23px] h-[23px] object-contain" }, void 0, false, {
        fileName: "app/components/FindOutMore.jsx",
        lineNumber: 29,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/FindOutMore.jsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-poppins font-medium text-[18px] leading-[23.4px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-gradient", children: "More!" }, void 0, false, {
      fileName: "app/components/FindOutMore.jsx",
      lineNumber: 33,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/FindOutMore.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/FindOutMore.jsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/FindOutMore.jsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c4 = FindOutMore;
var _c4;
$RefreshReg$(_c4, "FindOutMore");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Hero.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Hero.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Hero.jsx"
  );
  import.meta.hot.lastModified = "1689504405741.6528";
}
function Hero() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { id: "home", className: `flex md:flex-row flex-col mb-5 ${styles_default.paddingY}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex-1 ${styles_default.flexStart} flex-col md:pr-0 md:pl-7 px-5 `, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: `${styles_default.paragraph} ml-2`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-white", children: "We Specialise In Manufacturing " }, void 0, false, {
        fileName: "app/components/Hero.jsx",
        lineNumber: 28,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Hero.jsx",
        lineNumber: 27,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Hero.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-row justify-between items-center w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]  ", children: [
          "Quality Custom ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", { className: " sm:block hidden" }, void 0, false, {
            fileName: "app/components/Hero.jsx",
            lineNumber: 33,
            columnNumber: 28
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-gradient", children: "Stainless Steel" }, void 0, false, {
            fileName: "app/components/Hero.jsx",
            lineNumber: 34,
            columnNumber: 13
          }, this),
          " "
        ] }, void 0, true, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "ss:flex hidden md:mr-4 mr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FindOutMore, {}, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 37,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 36,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Hero.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full", children: "Exhaust Systems" }, void 0, false, {
        fileName: "app/components/Hero.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: `${styles_default.paragraph} max-w-[470px] mt-5`, children: "Our team of experts can use the latest CNC mandrel bending technology in addition to pressure bending and traditional mandrel bending options to manufacture a custom exhaust system that deliver unmatched durability." }, void 0, false, {
        fileName: "app/components/Hero.jsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Hero.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex-1 flex  md:my-0  relative`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: "/jag-2.png\n        ", alt: "Hero-car", className: "m min-w-full object-contain mt-20 w-[100%] h-[100%] relative z-[5] " }, void 0, false, {
        fileName: "app/components/Hero.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "absolute z-[0] w-[70%] h-[35%] top-0 pink__gradient" }, void 0, false, {
        fileName: "app/components/Hero.jsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "absolute z-[1] w-[100%] h-[80%] rounded-full white__gradient bottom-40" }, void 0, false, {
        fileName: "app/components/Hero.jsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "absolute z-[0] w-[100%] h-[20%] right-20 bottom-20 green__gradient" }, void 0, false, {
        fileName: "app/components/Hero.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Hero.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `ss:hidden ${styles_default.flexCenter}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FindOutMore, {}, void 0, false, {
      fileName: "app/components/Hero.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Hero.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Hero.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c5 = Hero;
var _c5;
$RefreshReg$(_c5, "Hero");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/StatsBar.jsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/StatsBar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/StatsBar.jsx"
  );
  import.meta.hot.lastModified = "1693225594924.176";
}
var platforms = ["Facebook", "Google", "Trust Pilot"];
function Stats() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "w-full flex flex-wrap px-1 md:px-5 mb-2 py-5 justify-around", children: platforms.map((platform) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex justify-center w-full xs:w-auto mb-4 xs:mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col xs:flex-row items-center justify-center w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "text-center font-poppins font-semibold text-lg xs:text-[20px] md:text-[30px] text-gradient leading-[53.16px] md:leading-[43.16px] text-white mb-2 xs:mb-0 xs:mr-3", children: platform }, void 0, false, {
      fileName: "app/components/StatsBar.jsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: "/rating.png", alt: "rating", className: "w-[100px] xs:w-[125px] md:w-[150px]" }, void 0, false, {
      fileName: "app/components/StatsBar.jsx",
      lineNumber: 29,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/StatsBar.jsx",
    lineNumber: 25,
    columnNumber: 11
  }, this) }, platform, false, {
    fileName: "app/components/StatsBar.jsx",
    lineNumber: 24,
    columnNumber: 34
  }, this)) }, void 0, false, {
    fileName: "app/components/StatsBar.jsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c6 = Stats;
var _c6;
$RefreshReg$(_c6, "Stats");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/FeedbackCard.jsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/FeedbackCard.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/FeedbackCard.jsx"
  );
  import.meta.hot.lastModified = "1693226894746.138";
}
var FeedbackCard = ({
  content,
  name,
  service,
  img
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-auto sm:text-left text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: "/rating.png", alt: "double_quotes", className: "w-[150px] h-[27.6px] object-contain inline-block" }, void 0, false, {
    fileName: "app/components/FeedbackCard.jsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/FeedbackCard.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10", children: content }, void 0, false, {
    fileName: "app/components/FeedbackCard.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: img, alt: name, className: "w-[48px] h-[48px] rounded-full" }, void 0, false, {
      fileName: "app/components/FeedbackCard.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col ml-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { className: "font-poppins font-semibold text-[20px] leading-[32px] text-white", children: name }, void 0, false, {
        fileName: "app/components/FeedbackCard.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "font-poppins font-normal text-[16px] leading-[24px] text-dimWhite", children: service }, void 0, false, {
        fileName: "app/components/FeedbackCard.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/FeedbackCard.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/FeedbackCard.jsx",
    lineNumber: 34,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/FeedbackCard.jsx",
  lineNumber: 26,
  columnNumber: 7
}, this);
_c7 = FeedbackCard;
var FeedbackCard_default = FeedbackCard;
var _c7;
$RefreshReg$(_c7, "FeedbackCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/testimonials.jsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/testimonials.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/testimonials.jsx"
  );
  import.meta.hot.lastModified = "1693138903885.2268";
}
var Testimonials = () => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { id: "clients", className: ` w-full flex pl-4 flex-col relative`, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {}, void 0, false, {
    fileName: "app/components/testimonials.jsx",
    lineNumber: 26,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "w-full flex justify-center items-center md:flex-row  sm:mb-16 mb-6 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: ` ${styles_default.heading2} text-center`, children: "What People Are Saying About Us" }, void 0, false, {
    fileName: "app/components/testimonials.jsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/testimonials.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-wrap justify-center", children: feedback.map((card) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(FeedbackCard_default, { ...card }, card.id, false, {
    fileName: "app/components/testimonials.jsx",
    lineNumber: 34,
    columnNumber: 29
  }, this)) }, void 0, false, {
    fileName: "app/components/testimonials.jsx",
    lineNumber: 33,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/testimonials.jsx",
  lineNumber: 25,
  columnNumber: 28
}, this);
_c8 = Testimonials;
var testimonials_default = Testimonials;
var _c8;
$RefreshReg$(_c8, "Testimonials");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_MainLayout._index.jsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_MainLayout._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_MainLayout._index.jsx"
  );
  import.meta.hot.lastModified = "1693217738118.0918";
}
var meta = () => {
  return [{
    title: "Keltec Performance"
  }, {
    name: "description",
    content: "Welcome to Remix!"
  }];
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Hero, {}, void 0, false, {
      fileName: "app/routes/_MainLayout._index.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Stats, {}, void 0, false, {
      fileName: "app/routes/_MainLayout._index.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Business_default, {}, void 0, false, {
      fileName: "app/routes/_MainLayout._index.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(testimonials_default, {}, void 0, false, {
      fileName: "app/routes/_MainLayout._index.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CallToAction_default, {}, void 0, false, {
      fileName: "app/routes/_MainLayout._index.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_MainLayout._index.jsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_c9 = Index;
var _c9;
$RefreshReg$(_c9, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_MainLayout._index-HPC3SVJ2.js.map
