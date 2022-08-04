import { APIGatewayEvent } from 'aws-lambda';
import { getCache, addToCache } from './cache';

export const hello = async (event: APIGatewayEvent) => {

  let message = 'There is cache!';
  const data = event.queryStringParameters?.['key'] ?? 'no-data';

  const cached = getCache(data);

  if (!cached) { message = 'There is no cache'; addToCache(data) };

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: message,
        cached: cached,
        input: event,
      },
      null,
      2
    ),
  };
};

export default hello;
