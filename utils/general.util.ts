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