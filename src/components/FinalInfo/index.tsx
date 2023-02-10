import * as C from './styles';

type Props = {
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
};

export const FinalInfo = ({ name, level, email, github }: Props) => {
  return (
    <C.Container>
      <C.Info>
        <C.Name>Nome: {name}</C.Name>
        <C.Level>Nível: {level === 0 ? 'Iniciante' : 'Programador'}</C.Level>
        <C.Email>Email: {email}</C.Email>
        <C.Github>GitHub: {github}</C.Github>
      </C.Info>
    </C.Container>
  );
};
