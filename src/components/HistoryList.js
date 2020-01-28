import React from 'react';

export default function HistoryList({ list }) {
  return (
    <ul>
      {list.map(v => (
        <li key={v.id}>
          {v.year}
          {v.title}
        </li>
      ))}
    </ul>
  );
}
