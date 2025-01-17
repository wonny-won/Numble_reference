import { useRouter } from "next/router";
import { MouseEvent, ReactChild, useEffect, useState } from "react";
import * as Styled from "../../units/layout/layoutStyles";
import SideBar from "../layoutSidebar";
import LayoutSideMenu from "../layoutSideMenu";
import { v4 as uuidv4 } from "uuid";

interface IPropsLayout {
  children: ReactChild;
}

export default function Layout(props: IPropsLayout) {
  const router = useRouter();
  const [isDark, setIsDark] = useState("dark");
  const titleMenu = [
    { src: "/images/name.png", title: "이름" },
    { src: "/images/phone.png", title: "phone" },
    { src: "/images/email.png", title: "E-mail" },
    { src: "/images/star.png", title: "인스타그램" },
  ];
  const sideMenu = [
    { address: "/", title: "홈", position: "103px" },
    { address: "/game", title: "게임", position: "140px" },
    { address: "/diary", title: "다이어리", position: "177px" },
  ];
  const onClickPage = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) {
      router.push(`${event.target.id}`);
    }
  };
  useEffect(() => {
    if (!window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark("light");
    }
  }, []);

  return (
    <>
      <Styled.Wrapper>
        <Styled.InnerWrapper>
          <Styled.HeaderWrapper>
            <Styled.HeaderLeft>
              <span>TODAY</span>
              <Styled.HeaderLeftSpan>0</Styled.HeaderLeftSpan>
              <span>|</span>
              <span>TOTAL</span>
              <span>12345</span>
            </Styled.HeaderLeft>
            <Styled.HeaderCenter>사이좋은 사람들, 싸이월드</Styled.HeaderCenter>
            <Styled.HeaderRight>
              <span>사생활보호설정 </span>
              <Styled.HeaderRightSpan>▶️</Styled.HeaderRightSpan>
            </Styled.HeaderRight>
          </Styled.HeaderWrapper>
          <Styled.BodyWrapper>
            <Styled.LeftBody>
              <Styled.LeftBodyHeader>
                <Styled.HeaderImageBox>
                  본인이 원하는 사진을 넣어주세요
                </Styled.HeaderImageBox>
                <Styled.HeaderLine></Styled.HeaderLine>
              </Styled.LeftBodyHeader>
              <Styled.LeftBodyMain>
                {titleMenu.map((el) => (
                  <LayoutSideMenu
                    key={uuidv4()}
                    src={el.src}
                    title={el.title}
                  />
                ))}
              </Styled.LeftBodyMain>
              <Styled.LeftBodyFooter>
                <Styled.FooterTitle>오늘의 기분</Styled.FooterTitle>
                <Styled.SelectBox>
                  <option>기쁨 😍</option>
                  <option>우울 ☹️</option>
                  <option>졸림 😴</option>
                </Styled.SelectBox>
              </Styled.LeftBodyFooter>
            </Styled.LeftBody>
            <Styled.RightBody isDark={isDark}>
              {props.children}
            </Styled.RightBody>
          </Styled.BodyWrapper>
        </Styled.InnerWrapper>
      </Styled.Wrapper>
      {sideMenu.map((el) => (
        <SideBar
          key={uuidv4()}
          id={el.address}
          onClick={onClickPage}
          position={el.position}
          isClick={router.asPath === el.address}
          title={el.title}
        />
      ))}
    </>
  );
}
