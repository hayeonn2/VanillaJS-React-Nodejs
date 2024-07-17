export default function Hoisting() {
  const run = () => {
    if (constant) console.log(constant);
    if (!constant) throw new Error();
    if (letVariable) console.log(letVariable);
    if (!letVariable) console.log(letVariable);
    if (variable) console.log(variable);
    if (!variable) console.log(variable);
  };

  // run();

  const constant = "constant!";

  // run();

  let letVariable = "let!";

  // var는 값을 저장할 메모리 공간을 확보 (자바스크립트 엔진에 의해 undefined 암묵적 할당)
  // 선언, 초기화 단계가 동시에 진행
  // 변수이름 variable를 등록, 초기화 단계 통해 undefined 할당해 초기화
  // 어떠한 값을 할당하지 않아도 undefined 라는 값을 가짐

  // 참조에러가 발생하지 않는 이유?
  // --> 소스 코드가 한 줄씩 순차적으로 실행되는 시점(런타임)이 아니라 그 "이전" 단계에서 먼저 실행
  // ** 소스코드 평가 과정에서 변수 선언을 가장 먼저 실행한다 ** ==> 변수 호이스팅

  run();

  var variable = "variable!";
  // run();

  return <div>Hi.. Hoisting!</div>;
}

/**
 * 자바스크립트 엔진은 변수 선언을 2단계 거쳐 수행함
 *
 * 1. 선언 단계 : 변수 이름 등록 -> 자바스크립트 엔젠에 변수 존재 알리기
 * 2. 초기화 단계: 값을 저장하기 위해 메모리 공간 확보, 암묵적으로 undefined 할당해 초기화
 *
 * --> 초기화란? 변수가 선언된 이후 최초로 값을 할당하는 것
 *
 * 모든 식별자는 실행 컨텍스트에 등록됨
 *
 * 실행 컨텍스트란?
 * 자바스크립트 엔진이 소스코드를 평가, 실행하기 위한 환경 제공, 코드 실행 결과 실제로 관리하는 영역
 * 자바스크립트 엔진은 실행 컨텍스트를 통해 식별자, 스코프 관리
 * 변수 이름과 값 -> 실행컨텍스트 내 키/값 (객체 형태) 으로 등록되어 관리
 */
