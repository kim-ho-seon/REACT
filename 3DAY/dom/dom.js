const fruits = [
    { name: "딸기", color: "빨강", 크기: 2 },
    { name: "바나나", color: "노랑", 크기: 5 },
    { name: "키위", color: "초록", 크기: 3 },
    { name: "사과", color: "빨강", 크기: 4 },
    { name: "블루베리", color: "파랑", 크기: 1 },
    { name: "오렌지", color: "주황", 크기: 4 },
    { name: "포도", color: "보라", 크기: 2 },
    { name: "레몬", color: "노랑", 크기: 3 },
    { name: "체리", color: "빨강", 크기: 2 },
    { name: "수박", color: "초록", 크기: 8 },
]

const body = document.querySelector('body')

// 반복문을 돌면서
for (let fruit of fruits){
  // 요소 만들고
  const divElement = document.createElement('div')
  // 내용 작성
  divElement.textContent = `이름: ${fruit.name}, 색깔: ${fruit.color}, 크기: ${fruit.크기}`
  // 원하는 위치
  body.append(divElement)
}


// function App(){
//   return(
//     <>
//       <div>
//         이름:{fruits[0].name}, 색깔:{fruits[0].color}, 크기:{fruits[0].크기}
//       </div>
//       <div>
//         이름:{fruits[1].name}, 색깔:{fruits[1].color}, 크기:{fruits[1].크기}
//       </div>
//       <div>
//         이름:{fruits[2].name}, 색깔:{fruits[2].color}, 크기:{fruits[2].크기}
//       </div>

//       {fruits.map((fruit)=>(
//         <div key={fruit.name}>
//         이름:{fruit[0].name}, 색깔:{fruit[0].color}, 크기:{fruit[0].크기}
//       </div>
//       ))}
            
//     </>
//   )
// }