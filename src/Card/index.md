---
group:
  title: Data
---

## Card

### Basic usage:

```tsx
import React from 'react';
import { Card, Button } from 'runmous';

export default () => {
  const header = (
    <div className="card-header">
      <span>Card name</span>
      <Button>Operation button</Button>
    </div>
  );

  const body = (
    <>
      <div className="text item">List item 1</div>
      <div className="text item">List item 2</div>
      <div className="text item">List item 3</div>
      <div className="text item">List item 4</div>
    </>
  );

  return <Card header={header} body={body}></Card>;
};
```

### Simple Card:

```tsx
import React from 'react';
import { Card } from 'runmous';

export default () => {
  const numbers = [1, 2, 3, 4, 5];
  const body = (
    <>
      {numbers.map((number) => (
        <div className="text item">List item {number}</div>
      ))}
    </>
  );

  return <Card body={body}></Card>;
};
```

### Shadow Card:

```tsx
import React from 'react';
import { Card } from 'runmous';

export default () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Card body={'always'} shadow="always"></Card>
      <Card body={'hover'} shadow="hover"></Card>
      <Card body={'never'} shadow="never"></Card>
    </div>
  );
};
```

<API></API>
