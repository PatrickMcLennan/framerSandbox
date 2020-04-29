import React, { FC } from "react";

import * as S from "./Nav.style";

const Nav: FC = (): JSX.Element => {
  return (
    <S.Nav>
      <ul>
        <li>
          <S.NavLink to="/">Home</S.NavLink>
        </li>
        <li>
          <S.NavLink to="/test">Test Page</S.NavLink>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </S.Nav>
  );
};

export default Nav;
