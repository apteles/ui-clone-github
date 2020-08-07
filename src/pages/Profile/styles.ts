import styled, {css} from 'styled-components';
import {RiBookMarkLine} from 'react-icons/ri'

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`

export const Container = styled.div`
  --h-padding: 16px;
  --v-padding: 16px;
  padding: var(--v-padding) var(--h-padding);
  overflow: hidden;
  max-width: 1280px;
  margin: 0 auto;
`;

export const  Main = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 1280x;
  @media(min-width: 768px){
    flex-direction: row;
  }
`;
export const  LeftSide = styled.div`
  padding: 0 var(--h-padding);
  @media(min-width: 768px){
    width: 25%;
  }

`;
export const  RightSide = styled.div`
  padding: 0 var(--h-padding);
  @media(min-width: 768px){
    width: 75%;
  }
`;

export const Repos = styled.ul`
  margin-top: var(--v-padding);

  > h2{
    font-size: 16px;
    font-weight: normal
  }

  > div {
    margin-top: 8px;

    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr;

    @media(min-width: 768px){
      grid-template-columns: repeat(2,1fr);
    }

  }
`

export const CalendarHeading = styled.span`
  font-size: 16px;
  margin: 36px 0 9px;
  display: inline-flex;
`;


export const RepoIcon = styled(RiBookMarkLine)`${iconCSS}`;

export const Tab = styled.div`
  background: var(--primary);

  .content{
    display: flex;
    align-items: center;
    width: min-content;

    padding: 14px 16px;
    border-bottom: 2px solid var(--orange);

    .label{
      font-size: 14px;
      padding: 0 7px;
      font-weight: 600; 
    }
    .number{
      font-size: 12px;
      background: var(--ticker);
      padding: 2px 6px;
      border-radius: 24px;
    }
  }
  .line{
    display: flex;
    width: 200vw;
    border-bottom: 1px solid var(--border);
    margin-left: -50vw;
  }
  &.mobile{
    margin-top: var(--v-padding);
    .content{
      margin: 0 auto;
    }
    @media(min-width: 768px){
      display: none;
    }
  }

  &.desktop{
    display: none;
    @media(min-width: 768px){
      display: unset;
    }

    .wrapper{
      display: flex;
      margin: 0 auto;
      max-width: 1280px;
    }
    .offset{
      width: 25%;
      margin-right: var(--h-padding);
    }
  }
`;