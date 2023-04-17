import { Dispatch, SetStateAction, useEffect } from "react";
import { elementFocusHandler } from "./react";

export function watchElementFocus(
  element: HTMLDivElement | null,
  elementFocusState: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    if (element) return elementFocusHandler(element, elementFocusState);
  }, [element]);
}
