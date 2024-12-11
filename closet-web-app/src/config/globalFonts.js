import React from 'react';
import { colors } from './globalColors';
import { globalColors } from './globalColors';

const BasicPretendard = ({ children, color = globalColors.FONT_COLOR_PRIMARY, underline = false, textAlign = 'left', style }) => {
    return (
        <span
            style={{
                textDecorationLine: underline ? 'underline' : 'none',
                letterSpacing: 0,
                color,
                textAlign,
                whiteSpace: 'pre-wrap',
                cursor: 'inherit',
                flexDirection: 'row',
                display: 'flex',
                lineBreak: 'anywhere',
                ...style
            }}
        >
            {children}
        </span>
    );
}

export const WEIGHT = {
    BOLD: {
        fontWeight: 700
    },
    SEMIBOLD: {
        fontWeight: 600
    },
    MEDIUM: {
        fontWeight: 500
    },
    REGULAR: {
        fontWeight: 400
    }
}

export const SIZE = {
    35: {
      fontSize: '35px',
      lineHeight: '39px',
    },
    30: {
      fontSize: '30px',
      lineHeight: '34px',
    },
    28: {
      fontSize: '28px',
      lineHeight: '32px',
    },
    24: {
      fontSize: '24px',
      lineHeight: 'normal',
    },
    22: {
      fontSize: '22px',
      lineHeight: '26px',
    },
    20: {
      fontSize: '20px',
      lineHeight: '24px',
    },
    18: {
      fontSize: '18px',
      lineHeight: '22px',
    },
    16: {
      fontSize: '16px',
      lineHeight: '20px',
    },
    15: {
      fontSize: '15px',
      lineHeight: 'auto',
    },
    14: {
      fontSize: '14px',
      lineHeight: '18px',
    },
    12: {
      fontSize: '12px',
      lineHeight: '16px',
    },
    10: {
      fontSize: '10px',
      lineHeight: '14px',
    },
  };

// Pretendard 컴포넌트 정의
export const Pretendard = {
    // BOLD
    BOLD_35: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.BOLD,
                ...SIZE[35],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    BOLD_30: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.BOLD,
                ...SIZE[30],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    BOLD_28: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.BOLD,
                ...SIZE[28],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    BOLD_24: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.BOLD,
                ...SIZE[24],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    BOLD_22: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.BOLD,
                ...SIZE[22],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    BOLD_20: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.BOLD,
                ...SIZE[20],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    BOLD_18: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.BOLD,
                ...SIZE[18],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    BOLD_16: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.BOLD,
                ...SIZE[16],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    BOLD_15: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.BOLD,
                ...SIZE[15],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    BOLD_14: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.BOLD,
                ...SIZE[14],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    BOLD_12: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.BOLD,
                ...SIZE[12],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    BOLD_10: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.BOLD,
                ...SIZE[10],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),

    // SEMIBOLD
    SEMIBOLD_35: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.SEMIBOLD,
                ...SIZE[35],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    SEMIBOLD_30: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.SEMIBOLD,
                ...SIZE[30],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    SEMIBOLD_28: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.SEMIBOLD,
                ...SIZE[28],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    SEMIBOLD_24: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.SEMIBOLD,
                ...SIZE[24],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    SEMIBOLD_22: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.SEMIBOLD,
                ...SIZE[22],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    SEMIBOLD_20: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.SEMIBOLD,
                ...SIZE[20],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    SEMIBOLD_18: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.SEMIBOLD,
                ...SIZE[18],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    SEMIBOLD_16: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.SEMIBOLD,
                ...SIZE[16],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    SEMIBOLD_15: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.SEMIBOLD,
                ...SIZE[15],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    SEMIBOLD_14: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.SEMIBOLD,
                ...SIZE[14],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    SEMIBOLD_12: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.SEMIBOLD,
                ...SIZE[12],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    SEMIBOLD_10: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.SEMIBOLD,
                ...SIZE[10],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),

    // MEDIUM
    MEDIUM_35: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.MEDIUM,
                ...SIZE[35],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    MEDIUM_30: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.MEDIUM,
                ...SIZE[30],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    MEDIUM_28: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.MEDIUM,
                ...SIZE[28],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    MEDIUM_24: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.MEDIUM,
                ...SIZE[24],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    MEDIUM_22: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.MEDIUM,
                ...SIZE[22],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    MEDIUM_20: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.MEDIUM,
                ...SIZE[20],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    MEDIUM_18: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.MEDIUM,
                ...SIZE[18],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    MEDIUM_16: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.MEDIUM,
                ...SIZE[16],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    MEDIUM_15: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.MEDIUM,
                ...SIZE[15],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    MEDIUM_14: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.MEDIUM,
                ...SIZE[14],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    MEDIUM_12: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.MEDIUM,
                ...SIZE[12],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    MEDIUM_10: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.MEDIUM,
                ...SIZE[10],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),

    // REGULAR
    REGULAR_35: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.REGULAR,
                ...SIZE[35],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    REGULAR_30: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.REGULAR,
                ...SIZE[30],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    REGULAR_28: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.REGULAR,
                ...SIZE[28],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    REGULAR_24: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.REGULAR,
                ...SIZE[24],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    REGULAR_22: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.REGULAR,
                ...SIZE[22],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    REGULAR_20: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.REGULAR,
                ...SIZE[20],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    REGULAR_18: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.REGULAR,
                ...SIZE[18],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    REGULAR_16: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.REGULAR,
                ...SIZE[16],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    REGULAR_15: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.REGULAR,
                ...SIZE[15],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    REGULAR_14: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.REGULAR,
                ...SIZE[14],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    REGULAR_12: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.REGULAR,
                ...SIZE[12],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
    REGULAR_10: ({ children, style, ...props }) => (
        <BasicPretendard
            style={{
                fontFamily: 'Pretendard',
                ...WEIGHT.REGULAR,
                ...SIZE[10],
                ...style
            }}
            {...props}
        >
            {children}
        </BasicPretendard>
    ),
};