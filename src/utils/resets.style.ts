import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const theme: object = {
  // - Layout - //
  flexin: (
    jc: string = `center`,
    ai: string = `center`,
    fd: string = `row`,
    fw: string = `nowrap`
  ) => css`
    display: flex;
    justify-content: ${jc};
    align-items: ${ai};
    flex-direction: ${fd};
    flex-wrap: ${fw};
  `,

  // - Typography - //

  fontLine: (fontSize: number, lineHeight: number) => css`
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
  `,
};
