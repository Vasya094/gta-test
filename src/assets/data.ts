import { ModeType } from "../types/index"

const testData: Array<ModeType> = [
  {
    name: "Modification name",
    description:
      "Are you ready to embark on the wildest bureaucratic adventure of your life, do you have a passion for enforcing regulations that nobody asked for: Then buckle up, because the Bureau of Land Mismanagement is looking for its next Ranger to join our illustrious team of paper-pushing eco-warriors!",
    images: [
      "https://cdn.vox-cdn.com/thumbor/3vl7A7jj_iL1sOu_xEqV_kKlZBM=/0x0:1800x1272/1200x800/filters:focal(1006x0:1294x288)/cdn.vox-cdn.com/uploads/chorus_image/image/72959572/ar4ig.0.jpg",
      "https://newcdn.igromania.ru//r/d84b8b2dac62e27bf8938476893f62ee/1040x-/newcdn.igromania.ru/mnt/news/6/9/0/5/0/1/114365/html/more/898730f2c4caef5cf055bb86_1920xH.jpg",
      "https://longhungpc.vn/media/lib/15-11-2022/cau-hinh-choi-gta-5-1.jpg",
    ],
    isHot: true,
    isNew: false,
    dowloads: 100,
  },
  {
    name: "XXX",
    description:
      "Nine out of ten doctors recommend Laracasts over competing brands. Come inside, see for yourself, and massively level up your development skills in the process.",
    images: [
      "https://assets.xboxservices.com/assets/27/d2/27d2f70c-4ce0-469f-a231-ed1bc79bfc91.jpg?n=GTA-V-MWF_gallery-0_1350x759_06.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwIdj_QiHwR1VvJyoQEOuSeqS6gJ0Hd3gvtcRxKjtUA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD28gPg8CiiKjjEGKR1OqcRozbtioBxzfNLa__z-sZZhyvNXcqVdNL1gA-5cmAGNs7VgY&usqp=CAU",
    ],
    isHot: false,
    isNew: false,
    dowloads: 3100,
  },
  {
    name: "New tg",
    description:
      " Depends on your definition of correct. If array has less than 3 elements and you slice it for 3, then it will return all the elements in the array (i.e. less than 3). That is a very sensible behaviour, but if that does not make sense for your application you might want to check the length of the array first.",
    images: [
      "https://imageio.forbes.com/specials-images/imageserve/5e480b876895e00006834e9f/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "https://gamemag.ru/images/cache/News/News161298/1ca92f5ef4-2_1390x600.jpg",
      "https://u.kanobu.ru/editor/images/52/a28a2fab-6c33-4fe0-baad-ebd180d7b7f6.webp",
      "https://www.1c-interes.ru/upload/resize_src/47/47692f564de3affa2959bb7940c37bf0.jpg",
    ],
    isHot: false,
    isNew: true,
    dowloads: 6780,
  },
  {
    name: "Res ty",
    description:
      "Предположим, у нас есть блок кнопки. Нужно её стилизовать в соответствии с требованиями дизайна. Но в другом проекте тоже будет класс кнопки. Она будет выглядеть по-другому, однако некоторая часть стилей будет одинакова. Что советует делать БЭМ? Он говорит создать модификатор темы и задавать его всем требуемым элементам.",
    images: [
      "https://cdn.gracza.pl/i_gp/h/17/381686582.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiHP5ffcCtOGy4ye8Q0NYVU5OTOo7xHRgJV9mO2tiZ_g&s",
      "https://play-lh.googleusercontent.com/Wms1ZCysxKKPpX_iEr6U-INPJ-NYp6uVcAz6PVzxhnrDLjZ1KjBIBbH1hrKeGIfiUg=w526-h296-rw",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVB7fUVo7nKjLH6foQ9pU79TYnlBukGZKktEDS9oW81g&s",
    ],
    isHot: false,
    isNew: true,
    dowloads: 6780,
  },
  {
    name: "Bue des",
    description:
      "Framework7 - is a free and open source framework to develop mobile, desktop or web apps with native look and feel. It is also an indispensable prototyping tool to show working app prototype as soon as possible in case you need to.",
    images: [
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3JBr87ogEtZZzMtLZs5mTUFgJosdGHi7-jgRErXa20A&s',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19krblKJT6GvCqgG5BfPjzoDELbb5FA4ImD4NnX8ODg&s',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcA4uBG29aA-94zVtMs7GSlfgYz1sy6hpuTNhtrAcHOg&s',
     'https://cdn.mos.cms.futurecdn.net/MhwHfM9GJU46Qj7H3eP2RP-1200-80.jpg'
    ],
    isHot: false,
    isNew: false,
    dowloads: 6780,
  },
  {
    name: "Modification name2",
    description:
      "Are you ready to embark on the wildest bureaucratic adventure of your life, do you have a passion for enforcing regulations that nobody asked for: Then buckle up, because the Bureau of Land Mismanagement is looking for its next Ranger to join our illustrious team of paper-pushing eco-warriors!",
    images: [
      "https://cdn.vox-cdn.com/thumbor/3vl7A7jj_iL1sOu_xEqV_kKlZBM=/0x0:1800x1272/1200x800/filters:focal(1006x0:1294x288)/cdn.vox-cdn.com/uploads/chorus_image/image/72959572/ar4ig.0.jpg",
      "https://newcdn.igromania.ru//r/d84b8b2dac62e27bf8938476893f62ee/1040x-/newcdn.igromania.ru/mnt/news/6/9/0/5/0/1/114365/html/more/898730f2c4caef5cf055bb86_1920xH.jpg",
      "https://longhungpc.vn/media/lib/15-11-2022/cau-hinh-choi-gta-5-1.jpg",
    ],
    isHot: true,
    isNew: false,
    dowloads: 100,
  },
  {
    name: "bXXXb",
    description:
      "Nine out of ten doctors recommend Laracasts over competing brands. Come inside, see for yourself, and massively level up your development skills in the process.",
    images: [
      "https://assets.xboxservices.com/assets/27/d2/27d2f70c-4ce0-469f-a231-ed1bc79bfc91.jpg?n=GTA-V-MWF_gallery-0_1350x759_06.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwIdj_QiHwR1VvJyoQEOuSeqS6gJ0Hd3gvtcRxKjtUA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD28gPg8CiiKjjEGKR1OqcRozbtioBxzfNLa__z-sZZhyvNXcqVdNL1gA-5cmAGNs7VgY&usqp=CAU",
    ],
    isHot: false,
    isNew: false,
    dowloads: 3100,
  },
]

export default testData
