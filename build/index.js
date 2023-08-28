var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:/Users/johnthornton/Desktop/Keltec/my-remix-app/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/Users/johnthornton/Desktop/Keltec/my-remix-app/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 47,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_dist());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-PV3KNBAH.css";

// app/root.jsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : [],
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/_MainLayout._index.jsx
var MainLayout_index_exports = {};
__export(MainLayout_index_exports, {
  default: () => Index,
  meta: () => meta
});

// app/constants/index.jsx
var navLinks = [
  {
    id: "home",
    title: "Home",
    link: "/"
  },
  {
    id: "exhausts",
    title: "Exhausts",
    link: "/exhausts"
  },
  {
    id: "catsDpfs",
    title: "Cats & DPFS",
    link: "/cats-dpfs"
  },
  {
    id: "servicing",
    title: "Servicing",
    link: "/sercvicing"
  },
  {
    id: "remaps-ecu-tuning",
    title: "Remaps/ECU Tuning",
    link: "/Remaps-ECU-Tuning"
  },
  {
    id: "BrakesSuspension",
    title: "Brakes & Suspension",
    link: "/brakes-suspension"
  }
];
var features = [
  {
    id: "feature-1",
    icon: "/spanner.svg",
    title: "UK Made",
    content: "All our exhaust systems are made in Leeds, West Yorkshire."
  },
  {
    id: "feature-2",
    icon: "/warranty.svg",
    title: "12 Months Warranty",
    content: "All our exhaust systems carry a minimum guarantee of 12 months. "
  },
  {
    id: "feature-3",
    icon: "/rea.svg",
    title: "Reassurance",
    content: "Have a look at some of our google/facebook reviews and make your own mind up."
  }
], feedback = [
  {
    id: "feedback-1",
    content: "Absolutely perfect service as always used these guys since 2017 they have done 5 of my cars since then had a few full turbo back systems done and some other res deletes etc done ",
    name: "Don Fisher",
    service: "Custom Exhaust"
  },
  {
    id: "feedback-2",
    content: "Came up from Manchester to see these guys for a resonator delete on my Focus ST mk3.5 and all I can tell you is it was well worth the trip! After 2 days of driving the car around it now sounds exactly as it should have straight out of the the factory. I also got a quote whilst there for a full custom exhaust system and it beats any price that you would pay for off the shelf name brand exhausts.",
    name: "Mike Shaw",
    service: "Resonator Delete"
  },
  {
    id: "feedback-3",
    content: "Just want to say a huge thanks to everyone at Keltec. Fantastic, hassle free experience with outstanding value for money. Came here for the exhaust doing on my Audi A5, it sounds and looks ACE! Would highly recommend them to anyone that is in the market for an exhaust!",
    name: "Joshua Gawthorpe",
    service: "Custom Exhaust"
  }
], footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Services",
        link: "/"
      },
      {
        name: "Exlplainer Video's",
        link: "/"
      },
      {
        name: "Past Work",
        link: "/"
      },
      {
        name: "Explore",
        link: "/"
      },
      {
        name: "Terms & Services",
        link: "/"
      }
    ]
  },
  {
    title: "Knowledge Base",
    links: [
      {
        name: "FAQ'S",
        link: "/"
      },
      {
        name: "Blog",
        link: "/"
      },
      {
        name: "Free Stuff",
        link: "/"
      }
    ]
  }
], socialMedia = [
  {
    id: "social-media-1",
    icon: "/instagram.svg",
    link: "https://www.instagram.com/"
  },
  {
    id: "social-media-2",
    icon: "/facebook.svg",
    link: "https://www.facebook.com/"
  },
  {
    id: "social-media-3",
    icon: "/twitter.svg",
    link: "https://www.twitter.com/"
  }
];

// app/styles.js
var styles = {
  boxWidth: "xl:max-w-[3456px] w-full",
  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6"
}, layout = {
  section: "flex md:flex-row flex-col ",
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: "flex-1 flex md:ml-10 ml-0 md:mt-0 mt-10 relative",
  sectionInfo: "flex-1 lex justify-center items-start flex-col"
}, styles_default = styles;

// app/components/Button.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Button = ({ styles: styles2, text }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  "button",
  {
    type: "button",
    className: `py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-green-gradient rounded-[10px] outline-none ${styles2}`,
    children: text
  },
  void 0,
  !1,
  {
    fileName: "app/components/Button.jsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
), Button_default = Button;

// app/components/Business.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), FeatureCard = ({ icon, title, content, index }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
  "div",
  {
    className: `flex flex-row p-6 rounded-[20px]  ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card `,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "div",
        {
          className: `w-[64px] h-[64px] rounded-full ${styles_default.flexCenter} bg-dimBlue`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: icon, alt: "star", className: "w-[50%] h-[50%] object-contain" }, void 0, !1, {
            fileName: "app/components/Business.jsx",
            lineNumber: 14,
            columnNumber: 7
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/Business.jsx",
          lineNumber: 11,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex-1 flex flex-col ml-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1", children: title }, void 0, !1, {
          fileName: "app/components/Business.jsx",
          lineNumber: 17,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-poppins font-normal text-dimWhite text-[16px] leading-[24px]", children: content }, void 0, !1, {
          fileName: "app/components/Business.jsx",
          lineNumber: 20,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Business.jsx",
        lineNumber: 16,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/Business.jsx",
    lineNumber: 6,
    columnNumber: 3
  },
  this
), Business = () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { id: "features", className: "flex md:flex-row flex-col mb-8 mx-10 ", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: layout.sectionInfo, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: styles_default.heading2, children: [
      "Why Wouldn't You Want ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", { className: "sm:block hidden" }, void 0, !1, {
        fileName: "app/components/Business.jsx",
        lineNumber: 31,
        columnNumber: 31
      }, this),
      " A Keltec Performance Exhaust System?"
    ] }, void 0, !0, {
      fileName: "app/components/Business.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: `${styles_default.paragraph} max-w-[470px] mt-5`, children: "With many years of experience Keltec Performance is one of the pioneering performance exhaust manufactures serving the UK from our west Yorkshire factory. We provide the consumer with unrivalled customer service. We make sure all the products we manufacture are of exemplary quality." }, void 0, !1, {
      fileName: "app/components/Business.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { styles: "mt-10", text: "Get Started" }, void 0, !1, {
      fileName: "app/components/Business.jsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Business.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `${layout.sectionImg} flex-col lg:pt-10`, children: features.map((feature, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FeatureCard, { ...feature, index }, feature.id, !1, {
    fileName: "app/components/Business.jsx",
    lineNumber: 46,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/Business.jsx",
    lineNumber: 44,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Business.jsx",
  lineNumber: 28,
  columnNumber: 3
}, this), Business_default = Business;

// app/components/CallToAction.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), CTA = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "section",
  {
    className: `flex flex-col md:flex-row-reverse ${styles_default.marginY} ${styles_default.padding} bg-black-gradient-2 rounded-[20px] box-shadow m-10`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex-1 flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: `${styles_default.heading2} text-center sm:text-left`, children: "What Are You Waiting For!" }, void 0, !1, {
            fileName: "app/components/CallToAction.jsx",
            lineNumber: 10,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "p",
            {
              className: `${styles_default.paragraph} text-center sm:text-left max-w-[470px] mt-5`,
              children: "Contact us to get a free quote and see how we can help you."
            },
            void 0,
            !1,
            {
              fileName: "app/components/CallToAction.jsx",
              lineNumber: 13,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/CallToAction.jsx",
          lineNumber: 9,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-4 p-4 text-center md:text-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { text: "Contact Us" }, void 0, !1, {
          fileName: "app/components/CallToAction.jsx",
          lineNumber: 21,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/CallToAction.jsx",
          lineNumber: 20,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CallToAction.jsx",
        lineNumber: 8,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-4 md:mt-0 md:ml-4 md:pl-4 w-full md:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "img",
        {
          src: "/custom-exhaust-system.jpeg",
          alt: "Custom Exhaust System",
          className: "w-full object-cover"
        },
        void 0,
        !1,
        {
          fileName: "app/components/CallToAction.jsx",
          lineNumber: 26,
          columnNumber: 7
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/CallToAction.jsx",
        lineNumber: 25,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/CallToAction.jsx",
    lineNumber: 5,
    columnNumber: 3
  },
  this
), CallToAction_default = CTA;

// app/components/FindOutMore.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function FindOutMore() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "div",
    {
      className: `${styles_default.flexCenter} w-[140px] h-[140px] mt-8 rounded-full bg-green-600 p-[2px] cursor-pointer`,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "div",
        {
          className: `${styles_default.flexCenter} flex-col bg-black-gradient w-[100%] h-[100%] rounded-full`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: `${styles_default.flexStart} flex-row`, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "font-poppins font-medium text-[18px] leading-[23.4px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-gradient", children: "Find Out" }, void 0, !1, {
                fileName: "app/components/FindOutMore.jsx",
                lineNumber: 13,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/components/FindOutMore.jsx",
                lineNumber: 12,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "img",
                {
                  src: "/arrow-up.svg",
                  alt: "arrow-up",
                  className: "w-[23px] h-[23px] object-contain"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/FindOutMore.jsx",
                  lineNumber: 15,
                  columnNumber: 11
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/FindOutMore.jsx",
              lineNumber: 11,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "font-poppins font-medium text-[18px] leading-[23.4px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-gradient", children: "More!" }, void 0, !1, {
              fileName: "app/components/FindOutMore.jsx",
              lineNumber: 23,
              columnNumber: 11
            }, this) }, void 0, !1, {
              fileName: "app/components/FindOutMore.jsx",
              lineNumber: 22,
              columnNumber: 9
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/FindOutMore.jsx",
          lineNumber: 8,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/FindOutMore.jsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
}

// app/components/Hero.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Hero() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    "section",
    {
      id: "home",
      className: `flex md:flex-row flex-col mb-5 ${styles_default.paddingY}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "div",
          {
            className: `flex-1 ${styles_default.flexStart} flex-col md:pr-0 md:pl-7 px-5 `,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: `${styles_default.paragraph} ml-2`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-white", children: "We Specialise In Manufacturing " }, void 0, !1, {
                fileName: "app/components/Hero.jsx",
                lineNumber: 15,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/components/Hero.jsx",
                lineNumber: 14,
                columnNumber: 11
              }, this) }, void 0, !1, {
                fileName: "app/components/Hero.jsx",
                lineNumber: 13,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-row justify-between items-center w-full", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]  ", children: [
                  "Quality Custom ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", { className: " sm:block hidden" }, void 0, !1, {
                    fileName: "app/components/Hero.jsx",
                    lineNumber: 20,
                    columnNumber: 28
                  }, this),
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-gradient", children: "Stainless Steel" }, void 0, !1, {
                    fileName: "app/components/Hero.jsx",
                    lineNumber: 21,
                    columnNumber: 13
                  }, this),
                  " "
                ] }, void 0, !0, {
                  fileName: "app/components/Hero.jsx",
                  lineNumber: 19,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "ss:flex hidden md:mr-4 mr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(FindOutMore, {}, void 0, !1, {
                  fileName: "app/components/Hero.jsx",
                  lineNumber: 24,
                  columnNumber: 13
                }, this) }, void 0, !1, {
                  fileName: "app/components/Hero.jsx",
                  lineNumber: 23,
                  columnNumber: 11
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Hero.jsx",
                lineNumber: 18,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full", children: "Exhaust Systems" }, void 0, !1, {
                fileName: "app/components/Hero.jsx",
                lineNumber: 27,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: `${styles_default.paragraph} max-w-[470px] mt-5`, children: "Our team of experts can use the latest CNC mandrel bending technology in addition to pressure bending and traditional mandrel bending options to manufacture a custom exhaust system that deliver unmatched durability." }, void 0, !1, {
                fileName: "app/components/Hero.jsx",
                lineNumber: 30,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Hero.jsx",
            lineNumber: 10,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "div",
          {
            className: "flex-1 flex  md:my-0  relative",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "img",
                {
                  src: `/jag-2.png
        `,
                  alt: "Hero-car",
                  className: "m min-w-full object-contain mt-20 w-[100%] h-[100%] relative z-[5] "
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Hero.jsx",
                  lineNumber: 40,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "absolute z-[0] w-[70%] h-[35%] top-0 pink__gradient" }, void 0, !1, {
                fileName: "app/components/Hero.jsx",
                lineNumber: 47,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "absolute z-[1] w-[100%] h-[80%] rounded-full white__gradient bottom-40" }, void 0, !1, {
                fileName: "app/components/Hero.jsx",
                lineNumber: 48,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "absolute z-[0] w-[100%] h-[20%] right-20 bottom-20 green__gradient" }, void 0, !1, {
                fileName: "app/components/Hero.jsx",
                lineNumber: 49,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Hero.jsx",
            lineNumber: 37,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: `ss:hidden ${styles_default.flexCenter}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(FindOutMore, {}, void 0, !1, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 53,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 52,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Hero.jsx",
      lineNumber: 6,
      columnNumber: 5
    },
    this
  );
}

// app/components/StatsBar.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Stats() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: "w-full flex md:flex-row px-1 md:px-5 mb-2 py-5 justify-around ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: " flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: " mr:0 md:mr-3 text-center font-poppins font-semibold xs:text-[12px] md:text-[30px] text-gradient xs:leading-[53.16px] leading-[43.16px] text-white", children: "Facebook" }, void 0, !1, {
        fileName: "app/components/StatsBar.jsx",
        lineNumber: 8,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "img",
        {
          src: "/rating.png",
          alt: "rating",
          className: "w-[100px] md:w-[150px] ml-3 "
        },
        void 0,
        !1,
        {
          fileName: "app/components/StatsBar.jsx",
          lineNumber: 11,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/StatsBar.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/StatsBar.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: " flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex  items-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "md:mr-3 text-center font-poppins font-semibold xs:text-[12px] md:text-[30px] text-gradient xs:leading-[53.16px] leading-[43.16px] text-white", children: "Google" }, void 0, !1, {
        fileName: "app/components/StatsBar.jsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "img",
        {
          src: "/rating.png",
          alt: "rating",
          className: "w-[100px] md:w-[150px] ml-3 "
        },
        void 0,
        !1,
        {
          fileName: "app/components/StatsBar.jsx",
          lineNumber: 25,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/StatsBar.jsx",
        lineNumber: 24,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/StatsBar.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/StatsBar.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: " flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex  items-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "md:mr-3 text-center font-poppins font-semibold xs:text-[12px] text-gradient md:text-[30px] xs:leading-[53.16px] leading-[43.16px] text-white", children: "Trust Pilot" }, void 0, !1, {
        fileName: "app/components/StatsBar.jsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "img",
        {
          src: "/rating.png",
          alt: "rating",
          className: "w-[100px] md:w-[150px] ml-3 "
        },
        void 0,
        !1,
        {
          fileName: "app/components/StatsBar.jsx",
          lineNumber: 39,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/StatsBar.jsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/StatsBar.jsx",
      lineNumber: 34,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/StatsBar.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/StatsBar.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/testimonials.jsx
var import_react3 = require("react");

// app/components/FeedbackCard.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), FeedbackCard = ({ content, name, service, img }) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "img",
    {
      src: "/rating.png",
      alt: "double_quotes",
      className: "w-[100px] h-[27.6px] object-contain mx-auto block"
    },
    void 0,
    !1,
    {
      fileName: "app/components/FeedbackCard.jsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10", children: content }, void 0, !1, {
    fileName: "app/components/FeedbackCard.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col ml-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h4", { className: "font-poppins font-semibold text-[20px] leading-[32px] text-white", children: name }, void 0, !1, {
      fileName: "app/components/FeedbackCard.jsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "font-poppins font-normal text-[16px] leading-[24px] text-dimWhite", children: service }, void 0, !1, {
      fileName: "app/components/FeedbackCard.jsx",
      lineNumber: 18,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/FeedbackCard.jsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/FeedbackCard.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/FeedbackCard.jsx",
  lineNumber: 2,
  columnNumber: 3
}, this), FeedbackCard_default = FeedbackCard;

// app/components/testimonials.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), Testimonials = () => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { id: "clients", className: " w-full flex pl-4 flex-col relative", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", {}, void 0, !1, {
    fileName: "app/components/testimonials.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "w-full flex justify-center items-center md:flex-row  sm:mb-16 mb-6 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: ` ${styles_default.heading2} text-center`, children: "What People Are Saying About Us" }, void 0, !1, {
    fileName: "app/components/testimonials.jsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/testimonials.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-wrap justify-center", children: feedback.map((card) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(FeedbackCard_default, { ...card }, card.id, !1, {
    fileName: "app/components/testimonials.jsx",
    lineNumber: 17,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/testimonials.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/testimonials.jsx",
  lineNumber: 7,
  columnNumber: 3
}, this), testimonials_default = Testimonials;

// app/routes/_MainLayout._index.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "Keltec Performance" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Hero, {}, void 0, !1, {
      fileName: "app/routes/_MainLayout._index.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Stats, {}, void 0, !1, {
      fileName: "app/routes/_MainLayout._index.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Business_default, {}, void 0, !1, {
      fileName: "app/routes/_MainLayout._index.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(testimonials_default, {}, void 0, !1, {
      fileName: "app/routes/_MainLayout._index.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CallToAction_default, {}, void 0, !1, {
      fileName: "app/routes/_MainLayout._index.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_MainLayout._index.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/_MainLayout.jsx
var MainLayout_exports = {};
__export(MainLayout_exports, {
  default: () => Layour
});
var import_react6 = require("@remix-run/react");

// app/components/Navbar.jsx
var import_react4 = require("react");
var import_react5 = require("@remix-run/react");

// app/components/ContactButton.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function ContactButton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { className: "bg-green-600 mt-5 md:mt-0 text-white font-[poppins] py-2 px-8 rounded md:ml-8 hover:bg-green-700 duration-500 ", children: "Contact Us" }, void 0, !1, {
    fileName: "app/components/ContactButton.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/Navbar.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Navbar() {
  let [toggle, setToggle] = (0, import_react4.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("nav", { className: "w-full flex py-6 justify-between items-center navbar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "img",
      {
        src: "/Logo_Keltec-1400x368-green-600.png",
        alt: "Logo",
        className: "w-[350px] h-[90px]"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 10,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("ul", { className: "list-none lg:flex hidden justify-end items-center flex-1", children: [
      navLinks.map((nav, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "li",
        {
          className: `font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10 "} `,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react5.NavLink, { to: `${nav.link}`, children: nav.title }, void 0, !1, {
            fileName: "app/components/Navbar.jsx",
            lineNumber: 23,
            columnNumber: 13
          }, this)
        },
        nav.id,
        !1,
        {
          fileName: "app/components/Navbar.jsx",
          lineNumber: 17,
          columnNumber: 11
        },
        this
      )),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ContactButton, {}, void 0, !1, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "lg:hidden flex flex-1 justify-end items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "img",
      {
        src: toggle ? "/close.svg" : "/menu.svg",
        alt: "menu",
        className: "w-[28px] h-[28px] object-contain",
        onClick: () => setToggle((prev) => !prev)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 29,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "div",
      {
        className: `${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[240px] rounded-xl sidebar`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("ul", { className: "list-none flex flex-col justify-end items-center flex-1", children: [
          navLinks.map((nav, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "li",
            {
              className: `font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-gray-500 ${index === navLinks.length - 1 ? "mr-0" : "mb-4 "} `,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react5.NavLink, { to: `${nav.link}`, children: nav.title }, void 0, !1, {
                fileName: "app/components/Navbar.jsx",
                lineNumber: 50,
                columnNumber: 15
              }, this)
            },
            nav.id,
            !1,
            {
              fileName: "app/components/Navbar.jsx",
              lineNumber: 44,
              columnNumber: 13
            },
            this
          )),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ContactButton, {}, void 0, !1, {
            fileName: "app/components/Navbar.jsx",
            lineNumber: 53,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Navbar.jsx",
          lineNumber: 42,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 37,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Navbar.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/components/Footer.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
  "section",
  {
    className: `${styles_default.flexCenter} ${styles_default.paddingY} flex-col p-4 border-t-[1px] border-t-[#3F3E45]`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: `${styles_default.flexStart} md:flex-row flex-col mb-8 w-full`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex-[1] flex flex-col justify-start mr-10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            "img",
            {
              src: "/Logo_Keltec-1400x368-green-600.png",
              alt: "hoobank",
              className: "w-[266px] h-[72.14px] object-contain"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Footer.jsx",
              lineNumber: 11,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: `${styles_default.paragraph} mt-4 max-w-[312px]`, children: "Quality Custom Stainless Steel Exhausts in Leeds, West Yorkshire." }, void 0, !1, {
            fileName: "app/components/Footer.jsx",
            lineNumber: 16,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 10,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex-[1.5] w-full flex flex-row justify-around flex-wrap md:mt-0 mt-10 p-8", children: footerLinks.map((footerlink) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "div",
          {
            className: "flex flex-col ss:my-0 my-4 min-w-[150px]",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h4", { className: "font-poppins font-medium text-[18px] leading-[27px] text-white", children: footerlink.title }, void 0, !1, {
                fileName: "app/components/Footer.jsx",
                lineNumber: 27,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { className: "list-none mt-4", children: footerlink.links.map((link, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                "li",
                {
                  className: `font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"}`,
                  children: link.name
                },
                link.name,
                !1,
                {
                  fileName: "app/components/Footer.jsx",
                  lineNumber: 32,
                  columnNumber: 17
                },
                this
              )) }, void 0, !1, {
                fileName: "app/components/Footer.jsx",
                lineNumber: 30,
                columnNumber: 13
              }, this)
            ]
          },
          footerlink.title,
          !0,
          {
            fileName: "app/components/Footer.jsx",
            lineNumber: 23,
            columnNumber: 11
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 21,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 9,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "font-poppins font-normal text-[16px] leading-[27px] text-gray-500", children: "Copyright \u24B8 2023 Keltec Performance. All Rights Reserved." }, void 0, !1, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 49,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 48,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-row md:mt-0 mt-6 mr-4", children: socialMedia.map((social, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "img",
          {
            src: social.icon,
            alt: social.id,
            className: `w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`,
            onClick: () => window.open(social.link)
          },
          social.id,
          !1,
          {
            fileName: "app/components/Footer.jsx",
            lineNumber: 55,
            columnNumber: 11
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 53,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 47,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/Footer.jsx",
    lineNumber: 6,
    columnNumber: 3
  },
  this
), Footer_default = Footer;

// app/routes/_MainLayout.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Layour() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bg-primary  w-full overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: `${styles_default.paddingX} ${styles_default.flexCenter}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: `${styles_default.boxWidth}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Navbar, {}, void 0, !1, {
      fileName: "app/routes/_MainLayout.jsx",
      lineNumber: 10,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_MainLayout.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_MainLayout.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_MainLayout.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Footer_default, {}, void 0, !1, {
      fileName: "app/routes/_MainLayout.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_MainLayout.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-DN7WMHK7.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-HE3JTGL3.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-ENUK4S4Q.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BGVVRGMQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_MainLayout": { id: "routes/_MainLayout", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_MainLayout-RN4FCGPU.js", imports: ["/build/_shared/chunk-DR3GAVAJ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_MainLayout._index": { id: "routes/_MainLayout._index", parentId: "routes/_MainLayout", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_MainLayout._index-JA3C3PBL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "7b902b15", hmr: { runtime: "/build/_shared/chunk-ENUK4S4Q.js", timestamp: 1693222479507 }, url: "/build/manifest-7B902B15.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_MainLayout._index": {
    id: "routes/_MainLayout._index",
    parentId: "routes/_MainLayout",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: MainLayout_index_exports
  },
  "routes/_MainLayout": {
    id: "routes/_MainLayout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: MainLayout_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.18.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
