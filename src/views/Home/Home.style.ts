import styled from "styled-components";
import { motion } from "framer-motion";

export const P = styled(motion.p)`
  ${({ theme: { fontLine } }) => fontLine(20, 24)};
`;

export const Div = styled(motion.div)`
  ${({ theme: { flexin } }) => flexin()}
  height: 300px;
  width: 300px;
  margin: 100px auto;
  background-color: darkblue;
  border-radius: 50%;
  cursor: pointer;
`;
