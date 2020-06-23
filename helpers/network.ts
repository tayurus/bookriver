// функция нужна для того, чтобы выполнять запросы в GetServerSideProps

export function createRequestOptions(skipHttpsValidation: boolean): RequestInit {
  const isNode = typeof window === "undefined";
  if (isNode) {
    const { Agent } = require("https") as any;
    return {
      agent: new Agent({ rejectUnauthorized: !skipHttpsValidation }),
    } as RequestInit;
  }
}

// проверяет, что в ответе статус 200, иначе выкидывает ошибку
export const handleFetchResponse = async (response: any) => {
  const parsedResponse = await response.json();
  if (response.status !== 200) {
    throw parsedResponse;
  } else {
    return parsedResponse;
  }
};
