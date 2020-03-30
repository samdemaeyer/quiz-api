module.exports = [
`
const obj = {
  foo: 'bar'
}

function resetObjectValues (obj) {
  Object.keys(obj).forEach((key) => {
    obj[key] = null;
  });
}

resetObjectValues(obj);
`,
`
function addNumbers(a, b) {
  return a + b;
}
`,
`
const myBool = false;
const result = myBook ? 'Yes' : 'No';
`
]
