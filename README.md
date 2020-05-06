# @testingrequired/expect

## Example

```javascript
import { expect, not, toEqual } from "@testingrequired/expect";

expect(10, toEqual(10));
expect("foo", not(toEqual("bar")));
```
