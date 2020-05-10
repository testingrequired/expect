# @testingrequired/expect

## Usage

### Example

```javascript
import { expect, not, toEqual } from "@testingrequired/expect";

expect(10, toEqual(10));
expect("foo", not(toEqual("bar")));
```

### Assertions

#### not

Invert assertion function:

```javascript
import { expect, not, toEqual } from "@testingrequired/expect";

expect(10, not(toEqual(100)));
```

#### toBe

Assert referential equality:

```javascript
import { expect, toBe } from "@testingrequired/expect";

const value = { foo: "bar" };

expect(value, toBe(value)); // True
expect(value, toBe({ foo: "bar" })); // False
```

#### toBeUndefined

Assert referential equality to `undefined`:

```javascript
import { expect, toBeUndefined } from "@testingrequired/expect";

expect(undefined, toBeUndefined); // True
expect([1, 2, 3], toBeUndefined); // False
```

#### toBeNull

Assert referential equality to `null`:

```javascript
import { expect, toBeNull } from "@testingrequired/expect";

expect(null, toBeNull); // True
expect([1, 2, 3], toBeNull); // False
```

#### toEqual

Assert value equality:

```javascript
import { expect, toEqual } from "@testingrequired/expect";

expect(10, toEqual(10)); // True
expect({ foo: "bar" }, toEqual({ foo: "bar" })); // True
```

#### toThrow

Assert function throws error:

```javascript
import { expect, toThrow } from "@testingrequired/expect";

class CustomError extends Error {}

const expectedErrorMessage = "expectedErrorMessage";

const fn = () => {
  throw new CustomError(expectedErrorMessage);
};

expect(fn, toThrow()); // True
expect(fn, toThrow(expectedErrorMessage)); // True
expect(fn, toThrow(new CustomError(expectedErrorMessage))); // True
```
