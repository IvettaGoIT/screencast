import { Container, Title, Subtitle, StyledImage } from './FirstPage.styled';
import example from '../../assets/example.png';

const FirstPage = () => {
  return (
    <Container>
      <StyledImage src={example} alt="Example" />
    </Container>
  );
};

export default FirstPage;
