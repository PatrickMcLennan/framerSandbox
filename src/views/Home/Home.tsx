import React, { FC } from "react";

import * as S from "./Home.style";

const Home: FC = () => {
  return (
    <>
      <h1>Hello I am home</h1>
      <S.P>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur minus
        quisquam perspiciatis ipsa labore error rem at aperiam saepe sapiente
        quasi impedit nam optio aliquam reiciendis itaque quis iste facilis
        ratione, quos facere. Ratione eaque, iure, commodi iste autem quae
        possimus, adipisci tempore fuga quia vitae? Non aspernatur quae fuga!
      </S.P>
      <S.Div
        initial={{ rotate: 0, scale: 1 }}
        whileHover={{ rotate: 90, scale: 0.9 }}
        whileTap={{ borderRadius: `100%`, scale: 0.8 }}
      >
        <p>hello i am text!</p>
      </S.Div>
    </>
  );
};

export default Home;
