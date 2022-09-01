import { ChangeEvent, useState } from "react";
import GamePresenter from "./gamePresenter";

export default function GameContainer() {
  const [startWord, setStartWord] = useState("코드캠프");
  const [lottoNumbers, setLottoNumbers] = useState([3, 5, 10, 24, 30, 34]);

  const onClickLotto = () => {
    const result = [];
    while (result.length < 6) {
      const temp = parseInt(String(Math.random() * 45 + 1));
      if (result.indexOf(temp) === -1) {
        result.push(temp);
      }
    }
    result.sort((a, b) => a - b);
    setLottoNumbers(result);
  };

  const onChangeWord = (event: ChangeEvent<HTMLInputElement>) => {
    setStartWord(event.target.value);
  };

  return (
    <GamePresenter
      startWord={startWord}
      onChangeWord={onChangeWord}
      lottoNumbers={lottoNumbers}
      onClickLotto={onClickLotto}
    />
  );
}
