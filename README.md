# Q4 - Troubleshoot & Explain

## Root Cause

The original `reduce()` callback does not return the updated accumulator.

The original code:

```js
function getTotalUsageMB(records) {
  return records.reduce((total, record) => {
    total += record.dataUsageMB;
  });
}
```

Although `total` is updated, the callback does not return it.

`reduce()` uses the callback's return value as the accumulator for the next iteration. Since nothing is returned, the callback returns `undefined`.

The original code also does not provide an initial accumulator value. Since this function calculates a numeric total, the accumulator should start at `0`.

## Fix

```js
function getTotalUsageMB(records) {
  return records.reduce(
    (total, record) => total + record.dataUsageMB,
    0
  );
}
```

## Test

Input:

```js
const records = [
  { dataUsageMB: 100 },
  { dataUsageMB: 250 },
  { dataUsageMB: 150 }
];
```

Running:

```js
console.log(getTotalUsageMB(records));
```

Output:

```text
500
```

## Prevention

To prevent this class of bug:

- Always return the accumulator from a `reduce()` callback.
- Provide an explicit initial value.
- Add unit tests for normal and edge-case inputs, including an empty array.
- Use linting and static analysis to catch inconsistent return values.