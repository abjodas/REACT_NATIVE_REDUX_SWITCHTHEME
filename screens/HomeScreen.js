import styled, { ThemeProvider } from "styled-components";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../redux/themeActions";
import { lightTheme, darkTheme } from "../Theme";

const HomeScreen = () => {
  const theme = useSelector((state) => state.themeReducer.theme);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TextContainer>
          <Text>Welcome to Abjo App</Text>
        </TextContainer>
        {theme.mode === "light" ? (
          <Button onPress={() => dispatch(switchTheme(darkTheme))}>
            <ButtonText>Change To Dark Theme</ButtonText>
          </Button>
        ) : (
          <Button>
            <ButtonText onPress={() => dispatch(switchTheme(lightTheme))}>
              Change To Light Theme
            </ButtonText>
          </Button>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
`;

const TextContainer = styled.View`
  border: 1px solid ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  padding: 10px;
  border-radius: 6px;
`;

const Text = styled.Text`
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  font-size: 24px;
  font-weight: 600;
`;
const Button = styled.TouchableOpacity`
  margin: 32px 0;
  padding: 10px 32px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.PRIMARY_BUTTON_COLOR};
`;

const ButtonText = styled.Text`
  font-size: 15px;
  color: ${(props) => props.theme.PRIMARY_BUTTON_TEXT_COLOR};
  font-weight: 500;
`;
