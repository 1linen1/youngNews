"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  NewsItem();
}
const NewsItem = () => "../../components/NewsItem/NewsItem.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(10, (item, k0, i0) => {
          return {
            a: common_vendor.t(item)
          };
        }),
        b: common_vendor.f(10, (item, k0, i0) => {
          return {
            a: "4ddadf4e-0-" + i0
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Resources/maven-workspace/app-space230122/\u9752\u5E74\u5E2E\u65B0\u95FB/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
