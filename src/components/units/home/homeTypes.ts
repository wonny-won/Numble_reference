import { MouseEvent } from "react";

export interface homePageProps {
  datalist: any[];
  onClickDataList: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface emotionProps {
  isTitle: boolean;
}
