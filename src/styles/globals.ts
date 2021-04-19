import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 :root {
  --bg: #F4F4F4;
  --color: #141414;
 }

 * {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
 }

 body {
  color: var(--color);
  background: var(--bg);
 }

 a {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
 }

 li { list-style: none }


`;