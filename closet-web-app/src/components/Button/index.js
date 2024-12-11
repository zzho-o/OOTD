import React, { useState } from "react";
import { ButtonState, ButtonType } from "../../config/globalStyles";
import { colors, globalColors } from "../../config/globalColors";

const Button = ({
    children,
    onClick = () => {},
    style,
    disabled = false,
    state = ButtonState.Basic,
    type = ButtonType.Full,
    }) => {
    // const [hover,setHover] = useState(false)

    // const handleMouseEnter = () => {
    //     // 쓸 지는 모르겠지만 마우스 호버 이벤트 만들어두겠습니다.
    //     setHover(true)
    // }
    // const handleMouseLeave = () => {
    //     setHover(false)
    // }
    // const handleMouseDown = () => {
    //     if (setCurrentSelected){
    //         setCurrentSelected(id)
    //     }

    //     if(onSubmit) {
    //         onSubmit()
    //     }
    // }

    return (
        <button 
            className="btn"
            style={{
                backgroundColor: type !== ButtonType.Small ?
                state === ButtonState.Main ? globalColors.BG_COLOR_ACCENT_LIGHT : globalColors.BG_COLOR_ACCENT :
                state === ButtonState.Main ? globalColors.BG_COLOR_SECONDARY : state === ButtonState.White ?
                globalColors.BG_COLOR_INVERSE : globalColors.BG_COLOR_TERTIARY,
                width: type === ButtonType.Full || type === ButtonType.Thin ? "100%" :
                type === ButtonType.Half ? "50%" :
                "none",
                // 임의로 %로 주었습니다 고정된 값이면 변경하겠습니다.
                height: type === ButtonType.Full ? 56 :
                type === ButtonType.Thin ? 48 :
                type === ButtonType.Half ? 56 :
                type === ButtonType.Quarter ? 27 : 24,
                borderRadius: type === ButtonType.Full || type === ButtonType.Half ? 10 :
                type === ButtonType.Thin ? 8 :
                type === ButtonType.Quarter ? 4 : 100,
                fontFamily: 'Pretendard',
                fontSize: type === ButtonType.Full || type === ButtonType.Thin ? 20 :
                type === ButtonType.Half ? 16 : 10,
                color: state === ButtonState.White ? globalColors.FONT_COLOR_WHITE :
                state === ButtonState.Main && type !== ButtonType.Small ? globalColors.FONT_COLOR_PRIMARY :
                globalColors.FONT_COLOR_PRIMARY,
                fontWeight: type === ButtonType.Thin || type === ButtonType.Small ? 500 : 600

                
            }}
            disabled={disabled}
        >
            {console.log(state,type)}
            {children}
        </button>
    )
}

export default Button