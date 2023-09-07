import { styled } from "styled-components";

const StyledEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 2rem 3rem;
  font-weight: bold;
`;

function Empty({ resourceName }) {
  return <StyledEmpty>No {resourceName} could be found.</StyledEmpty>;
}

export default Empty;
