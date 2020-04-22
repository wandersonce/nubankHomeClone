import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons'
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';
import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Annotation, Description } from './styles'


export default function Main() {
  return (
    <Container >
      <Header />
      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="person-add" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Current Balance</Title>
            <Description>$199.874,47</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Tranfer of $ 80.00 received from Felipe Saraiva today at 12:00PM
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}