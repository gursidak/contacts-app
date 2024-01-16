import Router from 'next/router';
import { get } from 'lodash';
import { paramsToObject } from '@/utils/general.util';

const useShallowRouter = () => {
  /* function to update query params; */
  const updateQueryParam = async (newParams: object) => {
    //get existing params in url;
    const paramsPrevState = paramsToObject(Router.asPath.split(/\?/)[1]);

    // params next state = previousParams + newParams;
    const paramsNextState = { ...paramsPrevState, ...newParams };

    let filteredParams = {};

    for (const paramKey of Object.keys(paramsNextState)) {
      if (get(paramsNextState, paramKey) != null) {
        filteredParams = {
          ...filteredParams,
          [paramKey]: get(paramsNextState, paramKey),
        };
      }
    }

    const params = new URLSearchParams({
      ...filteredParams,
    });

    // Push updated params to URL
    await Router.push(
      `${Router.asPath.split(/\?/)[0]}?${params.toString()}`,
      undefined,
      { shallow: true, scroll: true }
    );
  };

  /* update path without replacing the query params; */
  const updatePath = (path: string) => {
    //get existing params in url;
    const params = Router.asPath.split(/\?/)[1];
    // Push updated path to URL with existing params
    Router.push(`${path}?${params}`, undefined, {
      shallow: true,
    });
  };

  /* Function to clear all query parameters */
  const clearAllQueryParams = async () => {
    // Remove all query parameters by pushing the current path without any params
    await Router.push(Router.asPath.split('?')[0], undefined, {
      shallow: true,
      scroll: true,
    });
  };

  return {
    updateQueryParam,
    updatePath,
    clearAllQueryParams,
  };
};

export default useShallowRouter;