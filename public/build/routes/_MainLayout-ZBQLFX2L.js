import {
  NavLink,
  Outlet
} from "/build/_shared/chunk-BBWYR4BF.js";
import {
  footerLinks,
  navLinks,
  socialMedia,
  styles_default
} from "/build/_shared/chunk-4T526E6I.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZV7NBZZ7.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Navbar.jsx
var import_react = __toESM(require_react());

// app/components/ContactButton.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ContactButton.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ContactButton.jsx"
  );
  import.meta.hot.lastModified = "1693218011115.5615";
}
function ContactButton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-green-600 mt-5 md:mt-0 text-white font-[poppins] py-2 px-8 rounded md:ml-8 hover:bg-green-700 duration-500 ", children: "Contact Us" }, void 0, false, {
    fileName: "app/components/ContactButton.jsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = ContactButton;
var _c;
$RefreshReg$(_c, "ContactButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Navbar.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Navbar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Navbar.jsx"
  );
  import.meta.hot.lastModified = "1693216010313.563";
}
function Navbar() {
  _s();
  const [toggle, setToggle] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "w-full flex py-6 justify-between items-center navbar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/Logo_Keltec-1400x368-green-600.png", alt: "Logo", className: "w-[350px] h-[90px]" }, void 0, false, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "list-none lg:flex hidden justify-end items-center flex-1", children: [
      navLinks.map((nav, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: `font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10 "} `, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: `${nav.link}`, children: nav.title }, void 0, false, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 33,
        columnNumber: 13
      }, this) }, nav.id, false, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 32,
        columnNumber: 39
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ContactButton, {}, void 0, false, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:hidden flex flex-1 justify-end items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: !toggle ? "/menu.svg" : "/close.svg", alt: "menu", className: "w-[28px] h-[28px] object-contain", onClick: () => setToggle((prev) => !prev) }, void 0, false, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[240px] rounded-xl sidebar`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "list-none flex flex-col justify-end items-center flex-1", children: [
      navLinks.map((nav, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: `font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-gray-500 ${index === navLinks.length - 1 ? "mr-0" : "mb-4 "} `, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: `${nav.link}`, children: nav.title }, void 0, false, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 44,
        columnNumber: 15
      }, this) }, nav.id, false, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 43,
        columnNumber: 41
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ContactButton, {}, void 0, false, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navbar.jsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_s(Navbar, "KMOoc8w16Lq5ZnA3xKzfamBycFo=");
_c2 = Navbar;
var _c2;
$RefreshReg$(_c2, "Navbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Footer.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Footer.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Footer.jsx"
  );
  import.meta.hot.lastModified = "1693222479017.87";
}
var Footer = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: `${styles_default.flexCenter} ${styles_default.paddingY} flex-col p-4 border-t-[1px] border-t-[#3F3E45]`, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `${styles_default.flexStart} md:flex-row flex-col mb-8 w-full`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-[1] flex flex-col justify-start mr-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "/Logo_Keltec-1400x368-green-600.png", alt: "hoobank", className: "w-[266px] h-[72.14px] object-contain" }, void 0, false, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: `${styles_default.paragraph} mt-4 max-w-[312px]`, children: "Quality Custom Stainless Steel Exhausts in Leeds, West Yorkshire." }, void 0, false, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-[1.5] w-full flex flex-row justify-around flex-wrap md:mt-0 mt-10 p-8", children: footerLinks.map((footerlink) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `flex flex-col ss:my-0 my-4 min-w-[150px]`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { className: "font-poppins font-medium text-[18px] leading-[27px] text-white", children: footerlink.title }, void 0, false, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "list-none mt-4", children: footerlink.links.map((link, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: `font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"}`, children: link.name }, link.name, false, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 38,
        columnNumber: 54
      }, this)) }, void 0, false, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 37,
        columnNumber: 13
      }, this)
    ] }, footerlink.title, true, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 33,
      columnNumber: 40
    }, this)) }, void 0, false, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "font-poppins font-normal text-[16px] leading-[27px] text-gray-500", children: "Copyright \u24B8 2023 Keltec Performance. All Rights Reserved." }, void 0, false, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row md:mt-0 mt-6 mr-4", children: socialMedia.map((social, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: social.icon, alt: social.id, className: `w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`, onClick: () => window.open(social.link) }, social.id, false, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 53,
      columnNumber: 45
    }, this)) }, void 0, false, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 46,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/Footer.jsx",
  lineNumber: 23,
  columnNumber: 22
}, this);
_c3 = Footer;
var Footer_default = Footer;
var _c3;
$RefreshReg$(_c3, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_MainLayout.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_MainLayout.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_MainLayout.jsx"
  );
  import.meta.hot.lastModified = "1693216520921.3438";
}
function Layour() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-primary  w-full overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `${styles_default.paddingX} ${styles_default.flexCenter}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `${styles_default.boxWidth}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Navbar, {}, void 0, false, {
      fileName: "app/routes/_MainLayout.jsx",
      lineNumber: 29,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_MainLayout.jsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_MainLayout.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/_MainLayout.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/routes/_MainLayout.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_MainLayout.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c4 = Layour;
var _c4;
$RefreshReg$(_c4, "Layour");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Layour as default
};
//# sourceMappingURL=/build/routes/_MainLayout-ZBQLFX2L.js.map
