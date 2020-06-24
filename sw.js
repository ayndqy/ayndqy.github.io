importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js',
)

if (workbox) {
  console.log(`Precaching...`)
  workbox.precaching.precacheAndRoute([{"revision":"ddc899464144de0c44b7d21aa99897bb","url":"app.css"},{"revision":"e08184f671ee1e486ac0a563f8b7d16f","url":"build/bundle.css"},{"revision":"f95ca75d29f785eb2ee87ad9c84ce1bc","url":"images/icons/icon-192x192-maskable.png"},{"revision":"e8ba9fcbbfad5f72d920c467c8495f02","url":"images/icons/icon-192x192.png"},{"revision":"4253cf7b40b98eed3d75c44a306c6a18","url":"images/icons/icon-512x512-maskable.png"},{"revision":"529176f88a34433e1883e9fb886ed3f4","url":"images/icons/icon-512x512.png"},{"revision":"b3312b706f32485603432dc3a5d05883","url":"images/icons/icon-72x72-maskable.png"},{"revision":"4315444af4863b408ac1d8563ae536a5","url":"images/icons/icon-72x72.png"},{"revision":"dddd2ab4b8c84e21cb8f23888c7cc79a","url":"index.html"},{"revision":"f53b69cd46bef80dee76c1c96141549b","url":"build/bundle.js"},{"revision":"ce4ed03fa8db45eadbc413da6e30b5dc","url":"manifest.json"}])
} else {
  console.log(`Precaching error!`)
}
