const CHANGE_MONTH = 'CHANGE_MONTH';
const CHANGE_DATE = 'CHANGE_DATE';

// 改变月份动作生成器(Action Creator)
export const changeMonth = month => ({
  type: CHANGE_MONTH,
  payload: month
});

// 改变日期动作生成器
export const changeDate = date => ({
  type: CHANGE_DATE,
  payload: date
});

const initialState = {
  month: 1,
  date: 1
};

// 日期 Reducer
const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MONTH:
      return {
        ...state,
        month: action.payload
      };
    case CHANGE_DATE:
      return {
        ...state,
        date: action.payload
      };
    default:
      return state;
  }
};
export default dateReducer;
