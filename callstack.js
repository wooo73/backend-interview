function a() {
    console.log("a1")
    b()
    console.log("a2")
}

function b() {
    console.log("b1")
    c()
    console.log("b2")
}

async function c() {
    console.log("c1")
    setTimeout(() => console.log("setTimeout"), 0)
    await d()
    console.log("c2")
}

function d() {
    //Promise 생성자 내부의 코드는 동기적으로 즉시 실행
    return new Promise((resolve) => {
        console.log("d1")
        resolve()
        console.log("d2")
    }).then(() => console.log("then!"))
}

a() // a1, b1, c1, d1, d2, b2, a2, then!, c2, setTimeout

/**
1. a()가 호출되어 콜 스택에 추가
2. a1 출력
3. b()가 호출되어 콜 스택에 추가
4. b1 출력
5. c()가 호출되어 콜 스택에 추가
6. c1이 출력
7. setTimeout이 호출되고 콜백은 태스크 큐에 등록
8. d()가 호출되어 콜 스택에 추가
9. d1이 출력
10. resolve()가 호출되고 Promise가 이행
11. d2가 출력
12. d() 함수가 반환되고 콜 스택에서 제거
13. then 콜백은 마이크로태스크 큐에 등록
14. await d()가 완료되었지만, c() 함수의 나머지 부분은 마이크로태스크 큐에 등록
15. c() 함수가 일시적으로 중단되고 콜 스택에서 제거
16. b() 함수가 계속 실행되어 b2가 출력
17. b() 함수가 완료되고 콜 스택에서 제거
18. a() 함수가 계속 실행되어 a2가 출력
19. a() 함수가 완료되고 콜 스택에서 제거
20. 콜 스택이 비었으므로 마이크로태스크 큐의 작업이 처리
21. then 콜백이 실행되어 then!이 출력
22. c() 함수의 나머지 부분이 실행되어 c2가 출력
23. 마이크로태스크 큐가 비었으므로 태스크 큐의 작업이 처리
24. setTimeout 콜백이 실행되어 setTimeout이 출력
 */
