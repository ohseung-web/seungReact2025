import { useSelector,useDispatch } from 'react-redux';

export default function Counter(){
  const count = useSelector(state => state.count)
  const dispatch = useDispatch();

return (
    <>
        <h2>Count: {count}</h2>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </>
);

}