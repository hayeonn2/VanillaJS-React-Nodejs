import { setupServer } from "msw/node";
import { handlers } from './handlers';


// 다양한 환경에서 동일한 통합을 재사용할 수 있도록 node.js 및 browser.js 와 같은
// 환경 종속 통합 모듈을 만드는게 좋음. 올바른 통합을 수행하면 모든 준비 끝!

// 우리가 만든 node.js 통합 모듈은 Node.js 프로세스에서 실행되도록 MSW를 구성하지만
// 실제로 시작되지는 않고, server.listen()을 호출해야 함.
// -> App.js 로 가세요!

export const server = setupServer(...handlers)