import { AppDispatch, RootState } from './../store/index';
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux/es/types";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector