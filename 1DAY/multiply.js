const multiply = (x,y) => console.log(`${x} X ${y} = ${x * y}`);
// default는 Common JS
// module.exports = multiply 

// ES6 전환 : package.json 파일에 [ "type": "module" ] 추가시 
export default multiply;