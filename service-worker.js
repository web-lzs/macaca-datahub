/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d7af9b6d6c45d61f9ed4b1d0d1cc165b"
  },
  {
    "url": "assets/css/0.styles.7b19ecef.css",
    "revision": "b16e815fc972fa6e26f91610002378ce"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.259953be.js",
    "revision": "4a114b50b5b3b5b2347eef277e105b84"
  },
  {
    "url": "assets/js/11.77185748.js",
    "revision": "ae0b513ac003f48f9f4b9abbc502191a"
  },
  {
    "url": "assets/js/12.14199029.js",
    "revision": "327c1ef3554b3e46e00c3474ce3d29e2"
  },
  {
    "url": "assets/js/13.0b8b8e21.js",
    "revision": "baffd82306770367bf3aeacbe940d435"
  },
  {
    "url": "assets/js/14.47dff07a.js",
    "revision": "7a60c6af4cf8ca6cb4d9221bfaf08220"
  },
  {
    "url": "assets/js/15.6797f7fd.js",
    "revision": "70a6159b3c02fc0889667088b1a51e26"
  },
  {
    "url": "assets/js/16.8b04cd47.js",
    "revision": "e2fc7506e464a5f8e5b225b3da6a5313"
  },
  {
    "url": "assets/js/17.091c92e4.js",
    "revision": "4fee2b2c286440ca57e7e5b3cc4a6f77"
  },
  {
    "url": "assets/js/18.b2a12fd9.js",
    "revision": "3c4d7736496bc78dc578b6d85df661e8"
  },
  {
    "url": "assets/js/19.087b8f48.js",
    "revision": "0de89cfc42117601e58472bac05864c3"
  },
  {
    "url": "assets/js/2.9e1ff7eb.js",
    "revision": "c9ed113acc5e10269fc09341c9d30866"
  },
  {
    "url": "assets/js/20.dca719e0.js",
    "revision": "380f5a11fe45917893ea044503709801"
  },
  {
    "url": "assets/js/21.5b44f708.js",
    "revision": "897b5f79b56e5adaec56ff210ed25f54"
  },
  {
    "url": "assets/js/22.511fe57f.js",
    "revision": "f37c38a356ff2c45b42bfbe8d50b90d9"
  },
  {
    "url": "assets/js/23.a1ad64a4.js",
    "revision": "86595ee70f06591c7d4d6434dc0aada6"
  },
  {
    "url": "assets/js/24.1e0f88bf.js",
    "revision": "98cdd367d0b605c897f3f6d77e984dff"
  },
  {
    "url": "assets/js/25.5c3908de.js",
    "revision": "5ea6401b68fd59f19b6ac1952148ee81"
  },
  {
    "url": "assets/js/26.dff94b9c.js",
    "revision": "6435f3ee73843b5174999d481102239b"
  },
  {
    "url": "assets/js/27.e21ad8c4.js",
    "revision": "82f1e05a41fb3ef766325404ac18821c"
  },
  {
    "url": "assets/js/3.96b3fc83.js",
    "revision": "7fe222d2a684ec4690db4c67c94a98de"
  },
  {
    "url": "assets/js/4.476eb50d.js",
    "revision": "3ea7a9ccb3d9953f2e49e0cfad2aa190"
  },
  {
    "url": "assets/js/5.df96f492.js",
    "revision": "e17db491487766aa2fdf66e7074a0c4c"
  },
  {
    "url": "assets/js/6.eb303005.js",
    "revision": "dfbebb3a7546d87bb5fe0d40d85aec7e"
  },
  {
    "url": "assets/js/7.2802859a.js",
    "revision": "854dd5069028d45a2476f8c3852c81f2"
  },
  {
    "url": "assets/js/8.eb598afa.js",
    "revision": "1faf73afb60c709f021a1cf10a87df04"
  },
  {
    "url": "assets/js/9.78a8dd08.js",
    "revision": "01a4f631bb25e6dc47a8c013da995f73"
  },
  {
    "url": "assets/js/app.415ee623.js",
    "revision": "b3699639dda795cd1247621b670e279b"
  },
  {
    "url": "guide/configuration.html",
    "revision": "c2ef18cb38bc52fe7324dc6825f302f0"
  },
  {
    "url": "guide/design-concept.html",
    "revision": "d4bdb08ad09a421492b334e9b2e7d27d"
  },
  {
    "url": "guide/experiment.html",
    "revision": "0c8f5838b16e18dd246a4e5d0302781b"
  },
  {
    "url": "guide/index.html",
    "revision": "9df31aabc4cb1fbf2fe5726568c3f9c3"
  },
  {
    "url": "guide/installation.html",
    "revision": "c80d0577c010da471b76d6a29d0e7e0b"
  },
  {
    "url": "guide/integration.html",
    "revision": "ad274edf07876885a1cf6c04c63d5fca"
  },
  {
    "url": "guide/presentations.html",
    "revision": "8285e280c8d508981c35a4475330b3a6"
  },
  {
    "url": "guide/quick-start.html",
    "revision": "04efe7c2d5bb81690baa20d5f8685ad2"
  },
  {
    "url": "guide/schema-syntax.html",
    "revision": "d46660d599ff73b786b6f3ea4a83a7fd"
  },
  {
    "url": "guide/webpack-tutorial.html",
    "revision": "a0eda330ccade81792b0993faa9ead16"
  },
  {
    "url": "guide/with-macaca-test.html",
    "revision": "98379f4b914e88652ff28b64a97c75b6"
  },
  {
    "url": "index.html",
    "revision": "0fe57053c58c3d5a2c8518b0cf600a1d"
  },
  {
    "url": "logo/logo-color.svg",
    "revision": "ce025e5858229195d4fa7018ee849edd"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "f4c5008104b9c3daaba1a05152f9b123"
  },
  {
    "url": "zh/guide/design-concept.html",
    "revision": "f44b12e572e8b3bf386bfaa86b9e9be8"
  },
  {
    "url": "zh/guide/experiment.html",
    "revision": "fccd7bce45b0141ab4c1a19e1cb2c25f"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "10c4fe867cca8fa9a0e732c3bfbd0976"
  },
  {
    "url": "zh/guide/installation.html",
    "revision": "5010d80afa2434a45632c4d59eec1c67"
  },
  {
    "url": "zh/guide/integration.html",
    "revision": "a252a5d3930c2dba97465083ab4a8da3"
  },
  {
    "url": "zh/guide/presentations.html",
    "revision": "3bde7787fc49014a4d40fe23e651a391"
  },
  {
    "url": "zh/guide/quick-start.html",
    "revision": "8e0c9bb40ddf02729bd8f9100cca3736"
  },
  {
    "url": "zh/guide/schema-syntax.html",
    "revision": "29e4667486dfb706a977428bc5335036"
  },
  {
    "url": "zh/guide/webpack-tutorial.html",
    "revision": "f881cd5c33ff1016dd1ea249f8325a73"
  },
  {
    "url": "zh/guide/with-macaca-test.html",
    "revision": "344584c0b44459e793c7c7693a7935aa"
  },
  {
    "url": "zh/index.html",
    "revision": "1021068f7c50832b25fc16875a1d5a68"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
