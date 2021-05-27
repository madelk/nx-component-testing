import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ExampleComponentProps {}

const StyledExampleComponent = styled.div`
  color: pink;
`;

export function ExampleComponent(props: ExampleComponentProps) {
  return (
    <StyledExampleComponent>
      <h1>Welcome to example-component!</h1>
    </StyledExampleComponent>
  );
}

export default ExampleComponent;
