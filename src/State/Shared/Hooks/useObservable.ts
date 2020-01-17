import { useEffect, useState } from "react";
import { Observable } from "rxjs";

function useObservable<T>(observable: Observable<T>, initialValue: T): T {
  const [currentValue, setValue] = useState(initialValue);

  useEffect(() => {
    observable.subscribe(setValue);
  });

  return currentValue;
}

export default useObservable;
