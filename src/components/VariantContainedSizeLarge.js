import { useMemo } from "react";

const VariantContainedSizeLarge = ({
  button,
  variantContainedSizeLargePosition,
  variantContainedSizeLargePadding,
  variantContainedSizeLargeBoxSizing,
  buttonFontSize,
  buttonLineHeight,
  buttonColor,
  buttonDisplay,
}) => {
  const variantContainedSizeLargeStyle = useMemo(() => {
    return {
      position: variantContainedSizeLargePosition,
      padding: variantContainedSizeLargePadding,
      boxSizing: variantContainedSizeLargeBoxSizing,
    };
  }, [
    variantContainedSizeLargePosition,
    variantContainedSizeLargePadding,
    variantContainedSizeLargeBoxSizing,
  ]);

  const buttonStyle = useMemo(() => {
    return {
      fontSize: buttonFontSize,
      lineHeight: buttonLineHeight,
      color: buttonColor,
      display: buttonDisplay,
    };
  }, [buttonFontSize, buttonLineHeight, buttonColor, buttonDisplay]);

  return (
    <div
      className="relative overflow-hidden flex flex-col py-2 px-[22px] items-start justify-start text-left text-mini text-text-primary font-components-button-large"
      style={variantContainedSizeLargeStyle}
    >
      <div
        className="relative tracking-[0.46px] leading-[26px] uppercase font-medium"
        style={buttonStyle}
      >
        {button}
      </div>
    </div>
  );
};

export default VariantContainedSizeLarge;
