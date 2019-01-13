(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{177:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("key")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("description")]),t._v(" "),s("th",[t._v("default")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("port")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("port for DataHub server")]),t._v(" "),s("td",[t._v("9200")])]),t._v(" "),s("tr",[s("td",[t._v("mode")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("mode for DataHub server")]),t._v(" "),s("td",[t._v("'prod'")])]),t._v(" "),s("tr",[s("td",[t._v("protocol")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("protocol for DataHub server")]),t._v(" "),s("td",[t._v("'http'")])]),t._v(" "),s("tr",[s("td",[t._v("database")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("path to file database")]),t._v(" "),s("td",[t._v("$HOME")])]),t._v(" "),s("tr",[s("td",[t._v("store")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("path to migrate directory")]),t._v(" "),s("td",[t._v("undefined")])]),t._v(" "),s("tr",[s("td",[t._v("view")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("view layer config")]),t._v(" "),s("td",[t._v("{}")])])])]),t._v(" "),s("p",[t._v("Sample: "),s("a",{attrs:{href:"./macaca-datahub.config.js"}},[t._v("macaca-datahub.config.js")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'local'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7001")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set assets base url")]),t._v("\n    assetsUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://npmcdn.com/datahub-view@latest'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("You can also use the Third-part UI platform, for example use "),s("a",{attrs:{href:"//github.com/zhuyali/datahub-platform"}},[t._v("datahub-platform")]),t._v(", only need to point "),s("code",[t._v("assetsUrl")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    assetsUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://unpkg.com/datahub-platform@latest'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Pass config file["),s("code",[t._v(".js")]),t._v("|"),s("code",[t._v(".json")]),t._v("] to DataHub server.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ datahub server -c path/to/config.js --verbose\n")])])])])}],!1,null,null,null);e.options.__file="configuration.md";a.default=e.exports}}]);