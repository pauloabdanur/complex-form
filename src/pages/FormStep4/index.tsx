import { useNavigate, Link } from 'react-router-dom';
import { Container } from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';
import { FinalInfo } from '../../components/FinalInfo';

export const FormStep4 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4,
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Theme>
      <Container>
        <p>Concluído!</p>
        <h1>Pronto {state.name}! Confira seus dados abaixo:</h1>
        <hr />

        <FinalInfo
          name={state.name}
          level={state.level}
          email={state.email}
          github={state.github}
        />

        <Link to="/page3" className="backButton">
          Voltar
        </Link>
      </Container>
    </Theme>
  );
};
