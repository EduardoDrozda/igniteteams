import { TextInput, TextInputProps } from "react-native";

import { Container } from "./styles";
import { forwardRef } from "react";
import { useTheme } from "styled-components/native";

const Input = forwardRef<TextInput, TextInputProps>(
  ({ ...rest }: TextInputProps, ref) => {
    const { COLORS } = useTheme();

    return (
      <Container ref={ref} placeholderTextColor={COLORS.GRAY_300} {...rest} />
    );
  }
);

export { Input };
