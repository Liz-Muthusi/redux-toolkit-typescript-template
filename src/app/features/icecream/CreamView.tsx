
import { useAppDispatch, useAppSelector } from '../../Hook';
import { orderCreams, stockCreams } from './CreamSlice';

const CreamView = () => {
  const icecream= useAppSelector(state=>state.creams.numberOfIcecreams)

  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>Number of ice creams - {icecream}</h1>
      <button onClick={()=>dispatch(orderCreams())}>Order ice cream</button>
      <button onClick={()=>dispatch(stockCreams(9))}>Restock ice creams</button>
    </div>
  )
}

export default CreamView