import { buildResponse } from './response.js';

exports.handler = async (input) => {
  console.log(JSON.stringify(input));

  switch(true) {
    case input.httpMethod === 'GET' && input.path === healthPath:
        response = buildResponse(200);
        break;

    default:
        response = buildResponse(404, `404, Not Found, event path: ${input.path}`);
}
    return response;
}
