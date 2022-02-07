import React, { useState } from 'react';
import { Container, Counter, Title } from './styles';

function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <Container>
      <Counter onPress={increment}>
        <Title>{count}</Title>
      </Counter>
    </Container>
  );
}

export default Home;
