import { ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../Header';
import { SidebarItem } from '../SidebarItem';
import { useForm } from '../../contexts/FormContext';

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  const { state } = useForm();

  return (
    <C.Container>
      <C.Area>
        <Header />

        <C.Steps>
          <C.Sidebar>
            <SidebarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={state.currentStep === 1 || state.currentStep === 4}
            />
            <SidebarItem
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/page2"
              active={state.currentStep === 2 || state.currentStep === 4}
            />
            <SidebarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/page3"
              active={state.currentStep === 3 || state.currentStep === 4}
            />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};
