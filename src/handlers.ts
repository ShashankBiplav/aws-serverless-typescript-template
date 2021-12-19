import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const hello = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Yay Shashank made you go Serverless! Your function executed successfully!",
        input: event,
      },
      null,
      2,
    ),
  };
};
