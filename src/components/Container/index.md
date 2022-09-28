---
group:
  title: Basic
---

## Container

### basic layout:

```tsx
import React from 'react';
import { Container, Header, Main, Footer, Aside } from 'runmous';

export default () => {
  return (
    <Container>
      <Header>header</Header>
      <Main>main</Main>
    </Container>
  );
};
```

```tsx
import React from 'react';
import { Container, Header, Main, Footer, Aside } from 'runmous';

export default () => {
  return (
    <Container>
      <Header>header</Header>
      <Main>main</Main>
      <Footer>footer</Footer>
    </Container>
  );
};
```

```tsx
import React from 'react';
import { Container, Header, Main, Footer, Aside } from 'runmous';

export default () => {
  return (
    <Container direction="horizontal">
      <Aside width="250px">aside</Aside>
      <Main>main</Main>
    </Container>
  );
};
```

```tsx
import React from 'react';
import { Container, Header, Main, Footer, Aside } from 'runmous';

export default () => {
  return (
    <Container direction="horizontal">
      <Aside>aside</Aside>
      <Container direction="vertical">
        <Header>header</Header>
        <Main>main</Main>
        <Footer>footer</Footer>
      </Container>
    </Container>
  );
};
```

<API></API>
