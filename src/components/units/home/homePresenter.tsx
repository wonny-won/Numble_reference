import * as S from './homeStyled'

export default function HomePresenter (props) {
    return(
        <>
        <S.TitleWrap>
            <S.Title> Update news </S.Title>
            <S.SubTitle>TODAY STORY</S.SubTitle>
        </S.TitleWrap>
        <S.HomeWrap>
            <div>
            {
                props.datalist && props.datalist.map((item:any)=>(
                    <S.DiaryListWrap key={item?.number}>
                        <S.Tag src="/images/tag.svg"/>
                        <div onClick={props.onClickDataList}> {item?.title} </div>
                    </S.DiaryListWrap>
                ))
            }
            </div>
            <S.MainInfo>
                <S.LineWrap>
                    <S.InfoWrap> 다이어리 <S.Span>0/65</S.Span> </S.InfoWrap>
                    <S.InfoWrap> 사진첩 <S.Span>0/265</S.Span> </S.InfoWrap>
                </S.LineWrap>
                <S.LineWrap>
                    <S.InfoWrap> 게시판 <S.Span>0/15</S.Span> </S.InfoWrap>
                    <S.InfoWrap> 방명록 <S.Span>0/15</S.Span> </S.InfoWrap>
                </S.LineWrap>
            </S.MainInfo>
        </S.HomeWrap>
        <S.BGMWrap>
            <S.Title style={{marginTop:"25px"}}> 추억의 BGM</S.Title>
            <S.SubTitle style={{marginTop:"25px"}}> TODAY CHOICE </S.SubTitle>
        </S.BGMWrap>
        <div></div>
        </>
    )
}
