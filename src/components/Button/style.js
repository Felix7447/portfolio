import styled from "styled-components";

export const ButtonTag = styled.button`
  background-color: transparent;
  font-weight: 600;
  margin: 0 1em;
  border: none;
  cursor: pointer;
  transition: 350ms;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Anchor = styled.a`
  color: ${(props) => props.color || "black"};
  text-decoration: none;

  h3 {
    font-weight: inherit;
    font-size: ${(props) => props.size};
    @media (max-width: 720px) {
      font-size: 18px;
    }
  }
`;
