import {http, HttpResponse} from "msw";

// * msw : HTTP 요청을 설명하기 위해 지정된 http 네임스페이스를 제공함
// * 요청 핸들러 : http
// * 응답 리졸버 : HttpResponse

// 요청 핸들러를 생성할 때, http 네임스페이스의 모든 메소드를 사용하면 HTTP 요청 메소드에 해당하는 요청 핸들러를 생성할 수 있음! 
// 응답 리졸버는 요청을 처리하는 방법을 결정하는 요청 핸들러의 2번째 인수 (다양한 정보를 담는 객체인 인수를 제공)

// http.post('/post/:postId', async ({ request, params, cookies }) => {
//     const { postId } = params //! 여기서 params는 요청 경로 매개변수에 액세스 가능!
//     const requestBody = await request.json()
//   })


// 더 나은 호환성을 위해 기본 응답(Response) 대신 MSW의 HttpResponse 클래스를 사용하는 것이 좋음
// HttpResponse는 Fetch API Response 를 대체하는 클래스로 보다 편리한 응답 선언 가능
export const handlers = [
    http.get('https://example.com/user', () => {
        return HttpResponse.json({
            id: "1234",
            name: "hayeon",
            email: "test@example.com"
        })
    }),
]