import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Nav = styled(motion.nav)`
  padding: 20px 0;
`;

export const NavLink = styled(Link)`
  ${({ theme: { fontLine } }) => fontLine(22, 26)};
  text-transform: uppercase;
`;

export const Ul = styled(motion.ul)``;

export const Li = styled(motion.li)``;
