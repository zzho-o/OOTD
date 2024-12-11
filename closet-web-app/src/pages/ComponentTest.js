import React from "react";
import { Pretendard } from "../config/globalFonts";
import Button from "../components/Button";
import { ButtonState, ButtonType } from "../config/globalStyles";

const ComponentTest = () => {
    return(
        <div>
            {/* disabled 설명 */}
            <div>
            <Button onClick={() => {}} state={ButtonState.Basic} type={ButtonType.Thin}>{"button text"}</Button>
            <Button onClick={() => {}} state={ButtonState.Basic} type={ButtonType.Full}>{"button text"}</Button>
            <Button onClick={() => {}} state={ButtonState.Basic} type={ButtonType.Half}>{"button text"}</Button>
            <Button onClick={() => {}} state={ButtonState.Basic} type={ButtonType.Quarter}>{"button text"}</Button>
            <Button onClick={() => {}} state={ButtonState.Basic} type={ButtonType.Small}>{"button text"}</Button>
            </div>
            <div>
            <Button onClick={() => {}} state={ButtonState.White} type={ButtonType.Thin}>{"button text"}</Button>
            <Button onClick={() => {}} state={ButtonState.White} type={ButtonType.Full}>{"button text"}</Button>
            <Button onClick={() => {}} state={ButtonState.White} type={ButtonType.Half}>{"button text"}</Button>
            <Button onClick={() => {}} state={ButtonState.White} type={ButtonType.Quarter}>{"button text"}</Button>
            <Button onClick={() => {}} state={ButtonState.White} type={ButtonType.Small}>{"button text"}</Button>
            </div>
            <div>
            <Button onClick={() => {}} state={ButtonState.Main} type={ButtonType.Thin}>{"button text"}</Button>
            <Button onClick={() => {}} state={ButtonState.Main} type={ButtonType.Full}>{"button text"}</Button>
            <Button onClick={() => {}} state={ButtonState.Main} type={ButtonType.Half}>{"button text"}</Button>
            <Button onClick={() => {}} state={ButtonState.Main} type={ButtonType.Quarter}>{"button text"}</Button>
            <Button onClick={() => {}} state={ButtonState.Main} type={ButtonType.Small}>{"button text"}</Button>
            </div>
            <Pretendard.BOLD_24>{"AAA"}</Pretendard.BOLD_24>
        </div>
    )
}

export default ComponentTest