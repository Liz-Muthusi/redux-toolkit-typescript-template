
import { useAppDispatch, useAppSelector } from '../../Hook'
import { orderCake, stockCakes } from './CakeSlice'


 const CakeView = () => {
  const cakes=useAppSelector(state=>state.cakes.numberOfCakes)

  const dispatch= useAppDispatch()
  return (
    <div>
      <h1>Number of cakes - {cakes}</h1>
      <button onClick={()=>dispatch(orderCake())}>Order Cake</button>
      <button onClick={()=>dispatch(stockCakes(5))}>Restock Cakes</button>
    </div>
  )
}
export default CakeView