import Icon from "@chakra-ui/icon";
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import firebase, { storage, db } from "../../utils/Firebase";

type Props = {
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
};

type sourceType = {
  source: string;
};

type fetchedFileMetaDatasType = {
  name: string;
  size: number;
  contentType: string | null | undefined;
  created: string;
  id: string;
};

export const UploadForm: React.FC<Props> = (props) => {
  const { setIsError } = props;
  const [file, setFile] = useState<any>(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      let selected = e.target.files[0];

      if (selected && types.includes(selected.type)) {
        setFile(selected);
      }
    }
  };

  const upLoadImage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file === null) {
      setIsError(true);
      return;
    }

    // アップロード処理
    const uploadTask = storage.ref(`/images/${file.name}`).put(file);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      next,
      error,
      complete
    );
  };

  const next = (snapshot: any) => {
    // 進行中のsnapshotを得る
    // アップロードの進行度を表示
    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(percent + "% done");
    console.log(snapshot);
  };
  const error = (error: Error) => {
    // エラーハンドリング
    console.log(error);
  };

  const complete = () => {
    // 完了後の処理
    // 画像表示のため、アップロードした画像のURLを取得
    let fetchedSource: sourceType;
    let fetchedFileMetaDatas: fetchedFileMetaDatasType;

    // 一つのオブジェクトを生成するための過程
    // 画像のパスを取得
    storage
      .ref("images")
      .child(file.name)
      .getDownloadURL() // 画像のパスを取得
      .then((fireBaseUrl) => {
        fetchedSource = { source: fireBaseUrl };
      });

    storage
      .ref("images")
      .child(file.name)
      .getMetadata() // メタデータを取得
      .then((file) => {
        fetchedFileMetaDatas = {
          name: file.name,
          size: file.size,
          contentType: file.contentType,
          created: file.timeCreated,
          id: new Date().getTime().toString(), // 一意のIDを生成
        };
        db.collection("images").add({
          ...fetchedSource,
          ...fetchedFileMetaDatas,
        });
      });
  };

  return (
    <Flex flexDirection="column" alignItems="center" mt={5}>
      <form onSubmit={upLoadImage}>
        <input type="file" onChange={changeHandler} />
        <Button type="submit" colorScheme="blue" mt={8} maxW={320} w="100%">
          Upload
          <Icon as={FiUpload} ml={2} />
        </Button>
      </form>
    </Flex>
  );
};
