'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "f792f9034237e3ac5c2264ae6c70e1e5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4290aa3fc39c0292c9b94642a290dbed",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "92bc4f5856161042186f84ec162aad07",
".git/logs/refs/heads/master": "92bc4f5856161042186f84ec162aad07",
".git/logs/refs/remotes/origin/master": "f2f462ca4cafe033cd5cad7af2a7d700",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/02/4914c6c74109fb1713a7aad7db716b946ed87f": "f4cb4a4f62554a14a3839d8797673cb4",
".git/objects/02/7cd24442ee28614a4cc82f528221ae51355e31": "f616e0d346c1506435dd1fb9de7caa93",
".git/objects/02/d23b773d22d400afdddbb37585fd16c6e41fa7": "08bb4ac45b77d4d79202a642615e110a",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/06/b9a820f79139e26a836777747810bbf2309f68": "786bbf3bc7e031960a8794560cf1d713",
".git/objects/07/b8390dc55dc22140f0ad1d1cab4855ecea6b86": "7721e5b6e6f324f3af7728115d5d276b",
".git/objects/08/54927b124d09035fed2e819854d4a67fb341d5": "7e90ace8555029e9a0d71935cf03f93f",
".git/objects/08/b17cf87f745e6f9c324d321be3ca6549c69e25": "384518ae6605c7c4499e4e5712b46768",
".git/objects/09/43496c7e54e2ac86c573e3698268b2f5135aff": "91229673487be7eb9a58ca6fdfa02ec1",
".git/objects/0a/44d0c63ea65dce1c935dd0c729e70a59a92b74": "17e24890cbcca16282dc2bf096950f16",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/13/5c31cd29407015d0e4277b63a6cbb9d91ee03b": "8d4208b4a11cb5e489b924bba409fa23",
".git/objects/16/c18f26f6fc408112ebf99d7788ca442f81188e": "92300d9dc8dd111a4c36eb74495501f2",
".git/objects/17/80b678df436d52ae096e2e20541e649ea029b2": "fcca02ce599d01c32cdcb09d54470397",
".git/objects/19/420c07c7330c98357bbf6156e2e8debb478a24": "71cbdef6defc4b2c73783263578cec2a",
".git/objects/1b/fd4f013d3e381b52213c14e0d8239d7575bfcb": "e26fa19f3c540210aec058e7b4ce2215",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/f8633355bc820b230f3b1977290fa81afd50a0": "1dacd14f8dc7cb11ca3de902040b08ed",
".git/objects/22/0ae2fde2f2230eb952892b1b15f278a73cc330": "f3568412d29512f9c09369cfb39374da",
".git/objects/22/5ee6eb7f3d452a4933bd48fed1978d97b74186": "d060b9833ae635c3ab3b1380fe5b0fbb",
".git/objects/30/effbc980a88c1b600437a935c8916f5fb426f4": "cee189739030ca3fc1004579e2915bd5",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/d23924a075843a74468a96387e69db80b8258b": "bfb344e63763d0ef10d060d3a265e1e6",
".git/objects/39/a17c87d70e95bbf953b813b4195c40babe2ecb": "ea57041db59107030d7dae7000f0904b",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3b/839b3dbdeefc0a3013451c8422bade2d2932d4": "d4dfb171f9078eb056bfeec4f2b90155",
".git/objects/3b/ef82bc93db6999e9a6e142e7f124c7c79801b4": "e5ba8bd1e379844f3a8ec80469d0d23d",
".git/objects/3f/0d94f7b06cbe4fcce0b958026d3f7c86c98284": "bcf595bdd1a578a5c2a2732e017eae46",
".git/objects/41/edb4fd9ae0a573961f38933c036eeef433dd98": "0d49d13f9118d0010c79df61497e83af",
".git/objects/46/387e4397f81909bbb11e6c14326420133283a6": "763b0d7b2cda2b71fdd7712bcbffc72a",
".git/objects/48/25f00afe916c88f8ece0f5359825da184da9dc": "0dd2bc67884b3bf0d68a49dc8d67cf57",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/d919f8ec2ef27c790f409038412ab34a033011": "bd0e37ab039bd456c5901e94fc0bf0bf",
".git/objects/5b/ee4bd4d4863ba372dbe614e3615679e50cf1f4": "cd223c5fe94dba0b30da9350bbef1b1e",
".git/objects/5b/f828fffafa68789dbfb21743c722af6f670a31": "9c904375e91a5180b4686fb979771a84",
".git/objects/61/65ee9b7d4f5ecded95f8cd98a26f0a6c9b699a": "90aa814f7c543bf2dfc2eb2e2d8dbe99",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/c6120c45fcbca803d8b5f7c01fd051912822ed": "d70406897291dd8795f85da8e87d21a3",
".git/objects/72/64085fa53b4f6ea98185e08f16e79c6c2cd2d9": "b5d9446e89934a109c4d4407d60838ac",
".git/objects/72/af7d152e58bc02eba319681aa2ca2643a7dab8": "c83e36f5fe79256d2386747d892fce3b",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/75/1e836c98e12df9ac372c3b3d3d94cfd2fc3524": "81d4a9f2820f141c2c1d314a622d8899",
".git/objects/78/44a1567a477eab9764fcd64ac5f6a26da72b48": "4aa26dc1acc289bd45f33c2cf06617e6",
".git/objects/79/e6310f213f13571e2437c1a9ececf67881e398": "26c2ff7e663f5e4bac355167690346d6",
".git/objects/80/fb99a841a0f732addc42be3f1b3dbd79ecca81": "b472842b6b33f55e9a7a9f36cd75262a",
".git/objects/81/3434c1f80ea0df4ff385613ee36bfaac9939e7": "02fcf37749ab59df51df2259f4886cad",
".git/objects/86/dbbf65d2c9ec35b520951609de179f3c6d2e75": "b10664a39d31721c82b1dc12bbee9b18",
".git/objects/89/28c6920b849a1f42019dfcaf92644a941818ec": "1f1c953286f7cf1c7c417a2b32f5d37d",
".git/objects/8d/8d329c62cd7829d8717128e196ef101940a906": "635c47f7dc37df7bf8061eecfe142a80",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/91/5ca7f68520157f406eb885034dd50a8df8ed33": "cc6e7d8d52ad82bbb64ddfaf3417ed4c",
".git/objects/91/b5b59df77e226685be96524339fedb115a0ecb": "6e7584bcaa46fa43774139b9aca818e0",
".git/objects/9c/c24e32e0d9aae3876603186443a0ae07a2e1b0": "30d773c184428dd459ca9c61160e64c2",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a2/ff3681c50dc9190766f5b8719aae05ef964049": "dffe123d1ba1a60816302704a4401ea2",
".git/objects/a4/bd4667fc031cf8345d99bac09a08a42a2c32a1": "3034bfa64693579d951fb305efbb1083",
".git/objects/a7/264dec688e8ddf002cdfd9c439b77d83ba7a26": "b059ef10beb7d1b4249bdfe12285388a",
".git/objects/a7/3f0034380653a68bc67b43419775029a72a920": "464937e571604ee4f2794dfe694333a4",
".git/objects/a8/e76b150d45ba66d16dc3a98cac30359c9e93a1": "44d12e7402bcdccad8521f659d11f1f6",
".git/objects/a9/0bdb88c5ac37dc39280c076a3cc3b7969353c7": "39cb18a63e0309230689cc0355c1abe3",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/3f81a2832b2d0a141a2fe08eb31d5a0d81d22b": "af1555f4030b303c9cd9ba0d5c509027",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/022e9c8694af544d64dc1b039efc066f12042e": "52f9012db6e89bd4eb80d6d4d28b95da",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c5/63494cb49230a2b513310503194e43e9768dc0": "62cf013e144d4df4bfcb9bf4f5caaa7a",
".git/objects/c6/d6212fdb4dae9dfb57e46a01de69506c895fc4": "2f4a3eab1269cce5d6cf9b4bd40f85bf",
".git/objects/c8/18e65b0584832b870f681be6f56cec97da7f15": "2810caaa930460d474ed77a77f6afa1d",
".git/objects/ca/11f8501ac8df09e2d0e1f32aa5a3406ec75b57": "850e7d4da29ff4af00c5efa43385b7c1",
".git/objects/ce/1f63743bf7c0599d764d70eb039ae42c852bcf": "b8409f1185aa36e2b0bc9c6022b0caeb",
".git/objects/ce/8b74875047f6d9d7d8ec543313db1abf5886f8": "16e901c74b933494892e8bbf00662bb0",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/cf29abdb09c24a656f6aa575c3b02f489d8c9f": "7aab2e2e0f346e0df1a62139a4d4fcce",
".git/objects/d9/f33fa116fe7ef25031730b1037a7ec5b94a115": "eab4c3d607bebad5b3059658fb30c483",
".git/objects/e2/838e67f9cf830ed1f968f50778ee3b670efca5": "f60ebadcea195075782ba4cf2d4d9b2c",
".git/objects/e3/424599b2f60e528c2308e0dac1199873a30fc9": "53ebf039439f0c2b0af27cf8403f0331",
".git/objects/e5/8b14cead71668ff78506388e65fcff307a38bd": "dce67fcd6932207a80706be22db27565",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/f4/bcab358dd262ed2ed9ca20a923cacf923219db": "e79e7df29b059d2d712e668a1abafbd1",
".git/objects/fd/d59cbcf9a39e9a9f1027fed3b1dd3ff5eff40e": "92d32103cc7932b98784a5a9a0d1b12b",
".git/objects/ff/93ccc6e32913579415993a49b40cd88c418587": "5a6790dd92089318e6617d341c8b45d8",
".git/refs/heads/master": "b6825621b4f39aff6300d29df1734702",
".git/refs/remotes/origin/master": "b6825621b4f39aff6300d29df1734702",
"assets/AssetManifest.bin": "961678b28b5eb978246dffcfb03903c4",
"assets/AssetManifest.json": "6e9fc8b4ef375a72459ff2ef6352225e",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/icons/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/assets/icons/developer.png": "6576f0932f8dc70413579a59715c184b",
"assets/assets/icons/done.png": "d3786409b1df621a0b55e61d92430590",
"assets/assets/icons/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/assets/icons/github.png": "e6b2daf427b81c388625ffee75f2acf4",
"assets/assets/icons/hashnode.png": "5830176711a7028847bb9ef5fba9b39b",
"assets/assets/icons/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/assets/icons/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/assets/icons/student.png": "e9e5874f03b649f3101e7458f3b7acdf",
"assets/assets/icons/telegram.png": "c89ff009e3e05233e29b53baea4b57de",
"assets/assets/icons/twitter.png": "632f6320a7e3538439ffafd9ee8a03cd",
"assets/assets/icons/url.png": "f6a8b3b1251ded2a3c9d77d7f0142081",
"assets/assets/icons/volunteer.png": "7c2b0e4e0cd150fd439e01cd60da1261",
"assets/assets/icons/wa.png": "5aad78177488f2cfb439f1611f73f742",
"assets/assets/icons/youtube.png": "92d7341ea8fd5c88350cbd570a145f43",
"assets/assets/images/ams.png": "fd5c61242beb7b870b7046e7f1e5db48",
"assets/assets/images/ap.png": "553ab2791816210b528c04daf0823af9",
"assets/assets/images/dema.png": "f9f21d3474889b619ab762e78911f76e",
"assets/assets/images/dileepabandara_dev.png": "b5275634c0a526406a862f94c059f271",
"assets/assets/images/hmi.png": "6d399cb5ddf51616a8193adc1ef971ec",
"assets/assets/images/logo.png": "bb7a26202a4533a105ff8a74b6e61566",
"assets/assets/images/persis.png": "0bbeb762e1b59ef4f43c041df86cf66f",
"assets/assets/images/splash.png": "ebd4d857b9793a541c1e9abd1e2a5479",
"assets/assets/images/uin.png": "bd74c35d707ccd5107634c49ef4f8714",
"assets/FontManifest.json": "d5c53906b6d86d304b23aa61eec71815",
"assets/fonts/MaterialIcons-Regular.otf": "42865c166de14e85ceb56d5e4029eb0c",
"assets/NOTICES": "cf81efeb564502c1499473df1b364202",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/apple-touch-icon.png": "c8722fb470a194fd892e7ca76e8d7248",
"icons/favicon.ico": "5122351650ae623a757289c48338a8f4",
"icons/icon-192-maskable.png": "3835c97708e1788952d43e6a2a081da2",
"icons/icon-192.png": "0acd9f9c92e61e45e7474f900c54efad",
"icons/icon-512-maskable.png": "c1ef942cdfca19bcc456f5903e17736c",
"icons/icon-512.png": "851030b8b32eeaf3b2715b5ddebe0a43",
"index.html": "f5f29ad6ac1435f4290aa76c0cc67217",
"/": "f5f29ad6ac1435f4290aa76c0cc67217",
"main.dart.js": "fc61f6bbc664ca2a63f7b65368442b6e",
"manifest.json": "37fc4fbe3e52372d187f46ea77668262",
"splash/img/dark-1x.png": "811f9a88b6783cfa0e8135ada01db761",
"splash/img/dark-2x.png": "5b41e151abe39e72869ad0831a0341c7",
"splash/img/dark-3x.png": "81347763bc8fe6caec81e3075b846420",
"splash/img/dark-4x.png": "6d0aaa88f572aa1440e34343b8b7b5f6",
"splash/img/light-1x.png": "811f9a88b6783cfa0e8135ada01db761",
"splash/img/light-2x.png": "5b41e151abe39e72869ad0831a0341c7",
"splash/img/light-3x.png": "81347763bc8fe6caec81e3075b846420",
"splash/img/light-4x.png": "6d0aaa88f572aa1440e34343b8b7b5f6",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "fd07e329d0addaee7af5d9dfe633aa54",
"version.json": "e5d57d4e475cc8a711764c8aef61d978"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
