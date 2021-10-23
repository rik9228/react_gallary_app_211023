interface ImgInfo {
  id: number;
  name: string;
  description: string;
  imgPath: string;
  imgAlt: string;
}

export const ImgInfos: Array<ImgInfo> = [
  {
    id: 1,
    name: "image_01",
    description: "Lorem ipsum dolor sit amet",
    imgPath:
      "https://images.unsplash.com/photo-1634937916814-1bd4944eb32e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    imgAlt: "Lorem Ipsum",
  },
  {
    id: 2,
    name: "image_02",
    description: "Lorem ipsum dolor sit amet",
    imgPath:
      "https://images.unsplash.com/photo-1634937916814-1bd4944eb32e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    imgAlt: "Lorem Ipsum",
  },
  {
    id: 3,
    name: "image_03",
    description: "Lorem ipsum dolor sit amet",
    imgPath:
      "https://images.unsplash.com/photo-1634937916814-1bd4944eb32e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    imgAlt: "Lorem Ipsum",
  },
];
