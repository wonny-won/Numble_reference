import { MouseEvent } from "react";
import { Query } from "../../../../commons/types/generated/types";

export interface IPropsFetchDiaries {
  data?: Pick<Query, "fetchBoards">;
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
