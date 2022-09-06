import { ChangeEvent } from "react";
import { Query } from "../../../../commons/types/generated/types";

export interface IMyVariables {
  number: Number;
  title: String;
  contents: String;
}

export interface IPropsWriteDiaryUI {
  onClickCreate: () => void;
  onClickUpdate: () => void;
  onClickCancel: () => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  data?: Pick<Query, "fetchBoard">;
}
