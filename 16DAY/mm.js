import { useCallback, useMemo } from "react";

useMemo
// 함수 결과 저장
const 저장할_호출결과 = useMemo(() => {
  return 함수코드;
}, [값]);

const memoizedResult = useMemo(() => {
  return functionCode;
}, [dependencies]);

const memoizedValue = useMemo(() => {
  return expensiveComputation(input);
}, [input]); // 'input' 값이 변경될 때만 다시 계산

// 함수 자체 저장
const 저장할_함수 = useCallback(() => {
  return 함수코드;
}, [값]);

const memoizedFunction = useCallback(() => {
    return functionCode;
}, [dependencies]);

const memoizedCallback = useCallback(() => {
  handleSomething();
}, [dependency]); // 'dependency'가 변경될 때만 함수 재생성

//
const MyComponent = React.memo((props) => {
  return <div>{props.value}</div>;
});
