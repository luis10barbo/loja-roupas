import type { Dispatch, SetStateAction } from "react";

export function elementFocusHandler(
  element: HTMLElement,
  elementFocusState: Dispatch<SetStateAction<boolean>>
) {
  const handler = (e: MouseEvent) => {
    if (e.target && !element.contains(e.target as Node)) {
      elementFocusState(false);
    }
  };

  document.addEventListener("mousedown", handler);

  return () => {
    document.removeEventListener("mousedown", handler);
  };
}
