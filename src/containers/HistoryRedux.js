export const HISTORY_REQUEST = 'HISTORY_REQUEST';
export const HISTORY_SUCCESS = 'HISTORY_SUCCESs';
export const HISTORY_FAILURE = 'HISTORY_FAILURE';

const historyRequest = () => ({
  type: HISTORY_REQUEST
});

const historySuccess = datas => ({
  type: HISTORY_SUCCESS,
  payload: datas
});

const historyFailure = error => ({
  type: HISTORY_FAILURE,
  payload: error
});

const initialState = {
  status: '', // 请求状态
  datas: [], // 历史上的今天的数据
  error: null
};

export const getHistory = (month, date) => {
  // 这里是一个函数， redux-thunk可以识别这种函数
  // 通过此函数执行异步操作
  return (dispatch, getState) => {
    dispatch(historyRequest());
    return fetch(
      `port/history?dispose=easy&key=jiahengfei&month=${month}&day=${date}`
    )
      .then(res => res.json())
      .then(json => {
        dispatch(historySuccess(json.data));
      })
      .catch(error => {
        dispatch(historyFailure(error));
      });
  };
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case HISTORY_REQUEST:
      return {
        ...state,
        status: HISTORY_REQUEST
      };
    case HISTORY_SUCCESS:
      return {
        ...state,
        status: HISTORY_SUCCESS,
        datas: action.payload
      };
    case HISTORY_FAILURE:
      return {
        ...state,
        status: HISTORY_FAILURE,
        error: action.payload
      };
    default:
      return state;
  }
};
export default historyReducer;
