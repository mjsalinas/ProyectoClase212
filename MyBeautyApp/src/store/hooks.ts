import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch } from ".";

export const useAppDispatch = () => useAppDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;