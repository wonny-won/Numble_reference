import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

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
const DiaryDetail = () => {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  console.log(data);
  return <> 다이어리 상세 </>;
};

export default DiaryDetail;
