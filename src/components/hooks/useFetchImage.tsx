import { useEffect, useState } from "react";
import { db } from "../../utils/Firebase";

export type imgInfosType = {
  contentType: string;
  created: number;
  id: string;
  name: string;
  size: number;
  source: string;
};

export const useFetchImage = () => {
  const [imgInfos, setImgInfos] = useState<imgInfosType[]>([]);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    db.collection("images")
      .get()
      .then((query) => {
        let uplodedImages: any = [];
        query.forEach((doc) => {
          let data = doc.data();
          uplodedImages.push(data);
        });
        setImgInfos(uplodedImages);
        setIsComplete(true);
      })
      .catch((error) => {
        console.log(`データの取得に失敗しました (${error})`);
      });
  }, []);
  return { imgInfos, setImgInfos, isComplete };
};
