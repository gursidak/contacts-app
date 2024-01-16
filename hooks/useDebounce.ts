import debounce from 'lodash/debounce';
import React from 'react';

const useDebounce = ( callback :( ...args:any)=>void, delay=300) => {

    const callbackRef = React.useRef(callback);
    React.useLayoutEffect(()=>{
        callbackRef.current = callback;
    });
    return React.useMemo(()=>debounce((...args)=>callbackRef.current(...args), delay), [delay])

}

export default useDebounce;