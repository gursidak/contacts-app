import queryString from "query-string";

export const paramsToObject = (params: string) => {
    if (Object.keys(queryString.parse(params)).length > 0)
      return JSON.parse(
        '{"' + params.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
        function (key, value) {
          return key === '' ? value : decodeURIComponent(value);
        }
      );
  return{};
  };


export  async function sleep(){
    await new Promise(resolve => setTimeout(resolve, Math.random()*3));
}