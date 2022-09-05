import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import FetchDiaryContainer from "../../../src/components/units/diary/fetchDiary/fetchDiaryContainer";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoards(number: $number) {
      number
      writer
      title
      contents
      createdAt
    }
  }
`;
const FetchDiaryPage = () => {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  console.log(data);
  return (
    <>
      <FetchDiaryContainer />
    </>
  );
};

export default FetchDiaryPage;
