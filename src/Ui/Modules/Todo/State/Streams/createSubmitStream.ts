import { Observable } from "rxjs";
import { filter } from "rxjs/operators";

import UIEventCustom from "../../../../Shared/Constants/UIEventCustom";
import UiEvent from "../../../../Shared/Interfaces/UiEvent";

/**
 * Submit Stream reacts to user input
 */
const createSubmitStream = (
    uiEvent$: Observable<UiEvent>
): Observable<UiEvent> =>
    uiEvent$.pipe(
        filter(({ type }) => type === UIEventCustom.TODO_SUBMIT),
        filter(({ data }) => Boolean(data?.todo))
    );

export default createSubmitStream;
