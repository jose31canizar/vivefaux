import "isomorphic-unfetch";

const HOSTNAME = "localhost";
const PORT = 9010;

const throwError = (type, error) => {
  return { type: type, error: error };
};

export const genericFetch = (endpoint, field = null) => (param = null) => {
  const model = endpoint.replace(/-/g, "_").toUpperCase();
  return dispatch => {
    dispatch({
      type: `LOAD_${model}`
    });

    fetch(
      `http://${HOSTNAME}:${PORT}/v1/${endpoint}${
        field ? `?${field}=${param}` : ""
      }`
    )
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          const error = new Error(res.statusText);
          error.response = res;
          console.log(`fetch had this error`);
          dispatch(throwError(`LOAD_${model}_ERROR`, error));
          throw error;
        }
      })
      .then(data => {
        dispatch({
          type: `LOAD_${model}_SUCCESS`,
          payload: data,
          [field]: param
        });
        return data;
      })
      .catch(error => {
        dispatch(throwError(`LOAD_${fieldType}_ERROR`, error));
        console.log(`request failed for endpoint`, error);
      });
  };
};

export const loadPosts = genericFetch("posts");

export const loadPostsByTag = genericFetch("posts-by-tag", "tag");
