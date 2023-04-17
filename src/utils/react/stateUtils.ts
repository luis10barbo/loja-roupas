import type { Dispatch, SetStateAction } from "react";

export function reverseState(setState: Dispatch<SetStateAction<boolean>>) {
  setState((oldState) => !oldState);
}
