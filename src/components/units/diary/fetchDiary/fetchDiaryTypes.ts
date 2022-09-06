import { Query } from "../../../../commons/types/generated/types";

export interface IPropsFetchDiary {
  data: Pick<Query, "fetchBoard">;
  onClickDelete: () => void;
  onClickList: () => void;
  onClickEdit: () => void;
}
