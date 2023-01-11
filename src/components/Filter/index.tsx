import { Container, FilterStyledProps, Title } from "./styles";

import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps, FilterStyledProps {
  title: string;
}

export function Filter({ title, isActive, ...rest }: Props) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
