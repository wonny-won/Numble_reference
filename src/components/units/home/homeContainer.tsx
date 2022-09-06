import { gql,useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import HomePresenter from "./homePresenter";

const FETCH_DIARY = gql`
    query fetchBoards($page: Int){
        fetchBoards(page: $page){
            number
            title
        }
    }
`
export default function HomeContainer () {
    const {data} = useQuery(FETCH_DIARY) 
    const datalist = []
    for(let i= 0; i<4; i++){
        datalist.push(data?.fetchBoards[i])
    }
    const router = useRouter()
    const onClickDataList = ()=>{
        // 이부분은 아름님이 상세페이지를 다 만들어주시면 바꾸겠습니다.
        router.push('/')
    }
    return <HomePresenter datalist={datalist}
                          onClickDataList={onClickDataList}/>
}
