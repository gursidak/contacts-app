import { AppDispatch } from "@/types/redux.type";
import { useDispatch } from "react-redux";

const useAppDispatch = () => useDispatch<AppDispatch>()

export default useAppDispatch;