(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{176:function(t,a,e){"use strict";e.r(a);var n=e(0),s=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("DataHub is born to solving the lifecycle needs of mock/testing data of software development, from development, testing, staging to final production. Software engineers and test engineers use DataHub to manage their mock/testing data.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("DataHub is flexible with how and where mock/testing data is stored.")]),t._v(" "),e("p",[t._v("You can use a local instance of Datahub on your local machine to manage your local testing/mock data during development. The mock/testing data is in plain text. It can be versioned and archived with any version control software, together with your project files.")]),t._v(" "),e("p",[t._v("In addition, the local mock/testing data can be pushed and synchronized to a remote Datahub server to meet the needs of data sharing and collaboration.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("DataHub adopts the principle of unidirectional data flow to make sure you will always get the latest data.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("Datahub can also automatically generate an API document from your mock/testing data, to help keep your API document up to date and consistent with your mock data.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("DataHub adopts multi-scenario design, can group data according to the scene name, and provide scene data addition, deletion, and change, and can operate through DataHub's panel interface.")]),t._v(" "),e("p",[t._v("DataHub provides a dashboard for you to manage your data. You can group data by scene, or by stage such as development, testing, or staging. Datahub provides standard CRUD funtions.")]),t._v(" "),e("p",[t._v("Datahub use "),e("a",{attrs:{href:"https://github.com/pillarjs/path-to-regexp",target:"_blank",rel:"noopener noreferrer"}},[t._v("path-to-regexp"),e("OutboundLink")],1),t._v(" for dynamic path matching.")]),t._v(" "),e("p",[t._v("API name example:")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("DataHub can save the response of each request by taking snapshot. You can use the archieved snapshot to find out what happened.")]),t._v(" "),t._m(13)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"design-concept"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design-concept","aria-hidden":"true"}},[this._v("#")]),this._v(" Design concept")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"comprehensive-solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comprehensive-solution","aria-hidden":"true"}},[this._v("#")]),this._v(" Comprehensive Solution")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://wx4.sinaimg.cn/large/6d308bd9gy1fokqvum2gsj20s10l70vh.jpg",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"decentralization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decentralization","aria-hidden":"true"}},[this._v("#")]),this._v(" Decentralization")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://wx3.sinaimg.cn/large/6d308bd9gy1fokxgydf80j20np0cr0ts.jpg",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"data-flow-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-flow-management","aria-hidden":"true"}},[this._v("#")]),this._v(" Data Flow Management")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://wx1.sinaimg.cn/large/6d308bd9gy1fokxgywfajj20mx0g0wfj.jpg",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"consistency-between-api-document-and-mock-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consistency-between-api-document-and-mock-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Consistency Between API Document and Mock Data")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://ws1.sinaimg.cn/large/bceaad1fly1fwkophwa8qj229m1gejyw.jpg",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"datahub-dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datahub-dashboard","aria-hidden":"true"}},[this._v("#")]),this._v(" DataHub Dashboard")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[t._v("DataHub API name")]),t._v(" "),e("th",[t._v("matched request path")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("api1/books")]),t._v(" "),e("td",[t._v("api1/books")])]),t._v(" "),e("tr",[e("td",[t._v("api2/:foo/:bar")]),t._v(" "),e("td",[t._v("api2/group/project")])]),t._v(" "),e("tr",[e("td",[t._v("api3/:id")]),t._v(" "),e("td",[t._v("api3/fred")])]),t._v(" "),e("tr",[e("td",[t._v("api3/:id")]),t._v(" "),e("td",[t._v("api3/baz")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://ws1.sinaimg.cn/large/bceaad1fly1fwkm9g34dcj229m1ge12a.jpg",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"save-snapshot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#save-snapshot","aria-hidden":"true"}},[this._v("#")]),this._v(" Save Snapshot")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://ws1.sinaimg.cn/large/bceaad1fly1fwkm9fj6doj21kw13adnq.jpg",alt:""}})])}],!1,null,null,null);s.options.__file="design-concept.md";a.default=s.exports}}]);