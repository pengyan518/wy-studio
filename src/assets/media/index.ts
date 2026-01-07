// import media1 from './slideshow-thumb-1.jpg'
// import media2 from './slideshow-thumb-2.jpg'
// import media3 from './slideshow-thumb-3.jpg'
// import media4 from './slideshow-thumb-4.jpg'
// import media5 from './slideshow-thumb-5.jpg'
// import media6 from './slideshow-thumb-6.jpg'

import img0 from './9c.jpg'
import img1 from './mobile-checkout.jpg'
import img2 from './myOwn1.jpg'
import theater1 from './wn.jpg'
import theater2 from './ourStory.jpg'
import sycom from './sycom2.jpg'
import ntsy from './ntsy.jpg'
// import shenyunorg from './shenyunorg.jpg'
import mediaLibrary from './media-library.jpg'
import blscDesktop from './blsc-desktop.jpg'
import sc from './sc.jpg'
import blscMobile from './blsc-mobile.jpg'
import ccd from './ccd.jpg'
import music from './music-page.jpg'
import videoPage from './video-page.jpg'
//
// export const media = [media1, media2, media3, media4, media5, media6]
// export const mediaByIndex = index => media[index % media.length]

export const theaters = [
  {
    id: '0',
    src: img2,
    caption: 'Our Own SaaS Project(MVP)',
    // url: 'https://tickets.shenyun.com/shenyun-2026-new-york',
    description: 'A full-stack application built with Next.js and FastAPI that allows users to generate images from text prompts. <br>Challenge: Handling high-latency AI generation requests (10-30s) while keeping the user engaged. •	Solution: Implemented an async workflow with real-time status updates, optimistic UI, and a robust credit system via Stripe.',
    label: 'Technology stack',
    videoEmbed:
      '<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/0aLIXvRbz8A?&autoplay=1&mute=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: '1',
    src: img1,
    caption: 'Mobile Checkout Page',
    url: 'https://tickets.shenyun.com/shenyun-2026-new-york',
    description: 'Vite, Vue, pinia, Tailwind CSS, Styled-Components',
    videoEmbed:
      '<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/4seoE8ICgKo?&autoplay=1&mute=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  // {
  //   id: '2',
  //   src: sycom,
  //   caption: 'Shen Yun Homepage',
  //   description: 'React, Redux, Tailwind CSS, Styled-Components',
  //   url: 'https://www.shenyun.com',
  //   videoEmbed:
  //     '<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/fQCdr6gYdv0?autoplay=1&mute=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  // },
  // {
  //   id: '3',
  //   src: ntsy,
  //   caption: 'New to Shen Yun Page',
  //   description: 'React, Redux, Tailwind CSS, Styled-Components',
  //   url: 'https://www.shenyun.org/what-is-shen-yun',
  //   videoEmbed:
  //     '<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/sAMbz8aSGsk?&autoplay=1&mute=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  // },
  // {
  //   id: '4',
  //   src: music,
  //   caption: 'Shen Yun Music Page',
  //   description: 'React, Redux, MUI, Tailwind CSS, Styled-Components',
  //   url: 'https://promo.shenyun.com/shen-yun-music/',
  //   videoEmbed:
  //     '<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/WluJ75xg_Ac?&autoplay=1&mute=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  // },
  // {
  //   id: '5',
  //   src: videoPage,
  //   caption: 'Shen Yun Videos Page',
  //   description: 'React, Redux, MUI, Tailwind CSS, Styled-Components',
  //   url: 'https://www.shenyun.org/videos',
  //   videoEmbed:
  //     '<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/yzIvbGq4L94?&autoplay=1&mute=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  // },
  // {
  //   id: '6',
  //   src: mediaLibrary,
  //   caption: 'Media Library Homepage',
  //   description: 'React, Redux, Tailwind CSS, Styled-Components',
  //   videoEmbed:
  //     '<div style="padding:75.31% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/726532589?h=28ae9710b8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Screen Recording MediaLibrary"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
  // },
  // {
  //   id: '7',
  //   src: img0,
  //   caption: 'Shen Yun 9 Characteristics Page',
  //   url: 'https://www.shenyun.org/classical-chinese-dance-music-costumes-singers-and-more',
  //   description: 'Webpack, Gulp, jQuery, Sass',
  //   videoEmbed:
  //     '<div style="padding:65.34% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/726310516?h=59cc4dabeb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Screen Recording of Nine Characteristics"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
  // },
  // {
  //   id: '8',
  //   src: theater1,
  //   caption: 'Shen Yun Whats New Page',
  //   description: 'React, Redux, Styled-Components',
  //   url: 'https://www.shenyun.org/news-reviews',
  //   videoEmbed:
  //     '<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/g6KQbe8S0XY?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  // },
  // {
  //   id: '9',
  //   src: theater2,
  //   caption: 'Shen Yun Our Story Page',
  //   description: 'React, Postcss, Styled-Components',
  //   url: 'https://www.shenyun.org/our-story',
  //   videoEmbed:
  //     '<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/3aXdv7tfcEU?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  // },
  {
    id: '10',
    src: blscDesktop,
    caption: 'Ticketing Box Seating Chart(desktop)',
    url: 'https://tickets.shenyun.com/event/schedule/shenyun-2025-san-jose-2024-12-26-7pm/sc/1',
    description: 'React, Redux, Styled-Components, Postcss',
    videoEmbed:
      '<div style="padding:61.91% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/726562666?h=a51c36819a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Screen Recording 2022-07-03 at 202425"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
  },
  {
    id: '11',
    src: blscMobile,
    caption: 'Ticketing Box Seating Chart(mobile)',
    url: 'https://tickets.shenyun.com/event/schedule/shenyun-2025-san-francisco-2025-1-2-7pm/sc/1',
    description: 'React, Redux, Styled-Components, Postcss',
    videoEmbed:
      '<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/ZfizI3Ff3KQ?&autoplay=1" title="Screen Recording seating chart" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: '12',
    src: sc,
    caption: 'Ticketing Box Seating Chart by Canvas(desktop)',
    url: 'https://tickets.shenyun.com/event/schedule/shenyun-2025-san-jose-2024-12-26-7pm/',
    description: 'jQuery, Sass, Postcss',
    videoEmbed:
      '<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/xOssXAfWk3g?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  // {
  //   id: '13',
  //   src: ccd,
  //   caption: 'Shen Yun Classical Chinese Dance Page(Renewed)',
  //   description: 'React, Redux, MUI, Tailwind CSS, Styled-Components',
  //   url: 'https://www.shenyun.org/classical-chinese-dance',
  //   videoEmbed:
  //     '<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/D-mHzmCBZs8?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  // },
]

// 开发时验证 ID 唯一性
if (process.env.NODE_ENV === 'development') {
  const ids = theaters.map(item => item.id)
  const uniqueIds = new Set(ids)
  if (ids.length !== uniqueIds.size) {
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index)
    // eslint-disable-next-line no-console
    console.error('❌ 发现重复的 theater ID:', duplicates)
    throw new Error(`theaters 数组中存在重复的 ID: ${duplicates.join(', ')}`)
  }
}
export const theatersByIndex = index => theaters[index % theaters.length]
