import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./Store";

// Use in your app instead of useDispatch and useSelector
export const useAppDispatch =()=>useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector