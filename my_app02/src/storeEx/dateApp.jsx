// App.jsx
import { useSelector, useDispatch } from 'react-redux';
import { selectDate } from '../storeEx/dateSlice';

export default function DateApp() {
  const selected = useSelector((state) => state.date.selected);
  const dispatch = useDispatch();
  const dates = ['2024-11-10', '2024-11-11', '2024-11-12'];

  return (
    <div>
      {dates.map((date) => (
        <button key={date} onClick={() => dispatch(selectDate(date))}>
          {date}
        </button>
      ))}
      <p>선택한 날짜: {selected}</p>
    </div>
  );
}
