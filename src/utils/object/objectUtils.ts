import type { Dispatch, SetStateAction } from "react";

export function updateFromObjectState<
  TargetObject,
  ObjectChildren extends keyof TargetObject,
  ObjectValue extends TargetObject[ObjectChildren]
>(
  setObjectState: Dispatch<SetStateAction<TargetObject>>,
  target: ObjectChildren,
  newValue: ObjectValue | ((oldState?: ObjectValue) => ObjectValue)
) {
  setObjectState((oldState) => {
    const newState: TargetObject = JSON.parse(JSON.stringify(oldState));
    if (newValue instanceof Function)
      newState[target] = newValue(oldState[target] as ObjectValue);
    else newState[target] = newValue;

    return newState;
  });
  return;
}
