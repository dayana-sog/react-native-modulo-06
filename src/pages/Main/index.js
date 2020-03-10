import React from 'react';

import Icons from 'react-native-vector-icons/MaterialIcons';

import {Container, Form, Input, SubmitButton} from './styles';

export default function Main() {
  return (
    <>
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCaptalize="none"
            placeholder="Adicionar usuários"
          />
          <SubmitButton>
            <Icons name="add" size={20} color="#FFF" />
          </SubmitButton>
        </Form>
      </Container>
    </>
  );
}

Main.navigationOptions = {
  title: 'Usuários',
};
