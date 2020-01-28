import React from 'react';
import { useDispatch } from 'react-redux';
import { changeMonth, changeDate } from './DateRedux';

export default function DateSelect() {
  // 可以使用 useDispatch Hook来获取dispatch函数
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="number"
        placeholder="输入月..."
        min={1}
        max={12}
        defaultValue={1}
        // 分发月份改变动作
        onChange={e => dispatch(changeMonth(e.target.value))}
      />
      <input
        type="number"
        placeholder="输入日..."
        min={1}
        max={31}
        defaultValue={1}
        // 分发日期改变动作
        onChange={e => dispatch(changeDate(e.target.value))}
      />
    </div>
  );
}
