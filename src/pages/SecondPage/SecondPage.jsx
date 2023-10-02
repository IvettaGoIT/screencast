import { Container, Block, Title, Subtitle, StyledLink } from './SecondPage.styled';

const SecondPage = () => {
  return (
    <Container>
      <Block>
        <Title>Second Page</Title>
        <Subtitle>Test description</Subtitle>
        <StyledLink to="/second/5">Half</StyledLink>
      </Block>
    </Container>
  );
};

export default SecondPage;
