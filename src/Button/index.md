## Button

### basic button:

```tsx
import React from 'react';
import { Button } from 'runmous';

export default () => (
  <div>
    <Button>button</Button>
    <Button type="primary">button</Button>
    <Button type="success">button</Button>
    <Button type="warning">button</Button>
    <Button type="danger">button</Button>
    <Button type="info">button</Button>

    <div style={{ marginTop: 10 + 'px' }}>
      <Button type="primary" plain>
        button
      </Button>
      <Button type="success" plain>
        button
      </Button>
      <Button type="warning" plain>
        button
      </Button>
      <Button type="danger" plain>
        button
      </Button>
      <Button type="info" plain>
        button
      </Button>
    </div>

    <div style={{ marginTop: 10 + 'px' }}>
      <Button type="primary" round>
        button
      </Button>
      <Button type="success" round>
        button
      </Button>
      <Button type="warning" round>
        button
      </Button>
      <Button type="danger" round>
        button
      </Button>
      <Button type="info" round>
        button
      </Button>
    </div>
  </div>
);
```

### disabled button:

```tsx
import React from 'react';
import { Button } from 'runmous';

export default () => (
  <div>
    <Button disabled>button</Button>
    <Button type="primary" disabled>
      button
    </Button>
    <Button type="success" disabled>
      button
    </Button>
    <Button type="warning" disabled>
      button
    </Button>
    <Button type="danger" disabled>
      button
    </Button>
    <Button type="info" disabled>
      button
    </Button>
  </div>
);
```
