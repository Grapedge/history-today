import React from 'react';
import HistoryData from '../components/HistoryData';
import HistoryList from '../components/HistoryList';
import { useSelector, useDispatch } from 'react-redux';
import { HISTORY_REQUEST, HISTORY_FAILURE, getHistory } from './HistoryRedux';

export default function History() {
  const date = useSelector(state => state.date);
  const history = useSelector(state => state.history);
  const dispatch = useDispatch();
  return (
    <div>
      <HistoryData month={date.month} date={date.date} />
      <button
        type="button"
        onClick={() => {
          dispatch(getHistory(date.month, date.date));
        }}
      >
        查询历史上的今天
      </button>
      {history.status === HISTORY_REQUEST ? (
        <div>加载中...</div>
      ) : history.status === HISTORY_FAILURE ? (
        <div>加载失败</div>
      ) : (
        <HistoryList list={history.datas} />
      )}
    </div>
  );
}
