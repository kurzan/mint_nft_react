import { createContext, Dispatch, SetStateAction } from "react";


type TCounterContext = {
  mintDetails: {
    count: number,
    volume: number
  },
  setMintDetails: Dispatch<SetStateAction<{
    count: number;
    volume: number;
}>>
};

export const CounterContext = createContext({} as TCounterContext);