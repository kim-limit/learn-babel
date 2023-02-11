// jsx -> createElement
const element = <div>babel test</div>; // preset-react

// template-literals -> concat
const text = `element type is ${element.type}`; // plugin-transform-template-literals

// arrow-functions -> normal func
const add = (a, b) => a + b; // plugin-transform-arrow-functions
