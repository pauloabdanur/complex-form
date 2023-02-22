import { Container, Info, Name, Level, Email, Github } from './styles';

type Props = {
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
};

export const FinalInfo = ({ name, level, email, github }: Props) => {
  return (
    <Container>
      <Info>
        <Name>Nome: {name}</Name>
        <Level>Nível: {level === 0 ? 'Iniciante' : 'Programador'}</Level>
        <Email>Email: {email}</Email>
        <Github>GitHub: {github}</Github>
      </Info>
    </Container>
  );
};
