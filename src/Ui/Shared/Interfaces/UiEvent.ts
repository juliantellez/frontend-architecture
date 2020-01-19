import UIEventCustom from "../Constants/UIEventCustom";

interface UiEventData {
    [key: string]: string;
}

interface UiEvent {
    type: UIEventCustom;
    data: UiEventData;
}

export default UiEvent;
