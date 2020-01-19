import UIEventCustom from "../Constants/UIEventCustom";

interface UiEvent<T> {
    type: UIEventCustom;
    event?: T;
}

export default UiEvent;
