# react-use-hooks

> A set of useful hooks

[![NPM](https://img.shields.io/npm/v/react-use-hooks.svg)](https://www.npmjs.com/package/react-use-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-hooks
```

## Hooks

1. useLoader
2. useBoolean
3. useConst
4. useId

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'react-use-hooks'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [rohit-b-kadam](https://github.com/rohit-b-kadam)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
