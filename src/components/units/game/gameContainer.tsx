import { ChangeEvent, useRef, useState } from "react";
import GamePresenter from "./gamePresenter";

export default function GameContainer() {
  const [startWord, setStartWord] = useState("코드캠프");
  const [changeWord, setChangeWord] = useState("");
  const [result, setResult] = useState("결과!");
  const [lottoNumbers, setLottoNumbers] = useState([3, 5, 10, 24, 30, 34]);
  const inputRef = useRef<HTMLInputElement>(null);
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
    setChangeWord(event.target.value);
  };
  const onClickSearch = () => {
    if (startWord[startWord.length - 1] === changeWord[0]) {
      setStartWord(changeWord);
      setResult("정답입니다!");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } else {
      setChangeWord("");
      setResult("오답입니다!");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <GamePresenter
      startWord={startWord}
      onChangeWord={onChangeWord}
      lottoNumbers={lottoNumbers}
      onClickLotto={onClickLotto}
      onClickSearch={onClickSearch}
      result={result}
      inputRef={inputRef}
    />
  );
}
