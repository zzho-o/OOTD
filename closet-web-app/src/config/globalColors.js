const colors = {
    BLACK: '#000000',
    WHITE: '#FFFFFF',
    GRAY_100: '#EAEBEA',
    GRAY_200: '#CCCCCC',
    GRAY_300: '#8C8C8C',
    GRAY_400: '#333333',
    BRAND_PRIMARY: '#FFBE98',
    BRAND_LIGHT: '#FFECE1'
};
export const globalColors = {
    FONT_COLOR_PRIMARY: colors.GRAY_400, // 기본 텍스트 색상. 주요 콘텐츠와 텍스트에 사용
    FONT_COLOR_SECONDARY: colors.GRAY_300, // 보조 텍스트 색상. 부가적인 설명, 서브타이틀 텍스트에 사용
    FONT_COLOR_TERTIARY: colors.GRAY_200, // 3차 텍스트 색상, 플레이스홀더 텍스트에 사용
    FONT_COLOR_WHITE: colors.WHITE, // 흰색 텍스트, 어두운 배경에 사용
    FONT_COLOR_ACCENT: colors.BRAND_PRIMARY, // 브랜드 색상 텍스트, 강조 텍스트에 사용
    BG_COLOR_PRIMARY: colors.WHITE, // 기본 배경 색상, 주요 콘텐츠에 사용
    BG_COLOR_SECONDARY: colors.GRAY_100, // 보조 배경 색상, 버튼, 빈 이미지 영역에 사용
    BG_COLOR_TERTIARY: colors.GRAY_200, // 3차 배경 색상, 버튼에 사용
    BG_COLOR_INVERSE: colors.GRAY_400, // 반전 배경 색상, 어두운 배경에 사용
    BG_COLOR_ACCENT: colors.BRAND_PRIMARY, // 강조 배경 색상, 주요 버튼에 사용
    BG_COLOR_ACCENT_LIGHT: colors.BRAND_LIGHT, // 연한 강조 배경, 버튼과 토스트 팝업에 사용
    BORDER_COLOR_PRIMARY: colors.GRAY_200 // 기본 테두리 색상
};