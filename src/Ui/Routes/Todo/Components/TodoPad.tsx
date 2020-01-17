import * as React from "react";

import UiContext from "../../../Shared/UiContext";
import UIEventCustom from "../../../Shared/Constants/UIEventCustom";

const TodoPad = () => {
  const { uiEvent$ } = React.useContext(UiContext);

  return (
    <div>
      <div
        onClick={() =>
          uiEvent$.next({ type: UIEventCustom.ON_CLICK_TODO_CREATE })
        }
      >
        Click me!
      </div>
      <input onChange={console.log} />
    </div>
  );
};

export default TodoPad;
