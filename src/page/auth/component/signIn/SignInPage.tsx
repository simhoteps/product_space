import React from "react";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import { Stack, Typography } from "@mui/material";
import { toImageUrl } from "utils/helpers/AssetHelpers";
import * as Yup from "yup";
import { Form, Formik, FormikProps } from "formik";
import { useTheme } from "layouts/theme/ThemeContext";
import {
  Container,
  FormContainer,
  LinkText,
  LoginButton,
  SubContainer,
} from "./SignInStyled";
import { StyledTextField } from "components/textField/CustomTextField";
import { useStores } from "utils/hooks/use_store";
import { observer } from "mobx-react";

interface ISignInForm {
  email: string;
  password: string;
}

const SignInPage = () => {
  const windowsize: Size = useWindowSize();
  const { theme } = useTheme();
  const { loginStore } = useStores();
  const errorMessage = loginStore.loginMessage;

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      /*    .email("Invalid email address") */
      .required("Required field"),
    password: Yup.string()
      /*   .required("Required field") */
      .min(6, "Password too short"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SignInSchema}
      onSubmit={(values: ISignInForm, actions) => {}}
    >
      {(props: FormikProps<ISignInForm>) => {
        const {
          values,
          touched,
          errors,
          dirty,
          handleBlur,
          handleChange,
          handleSubmit,
          setSubmitting,
        } = props;
        return (
          <Form
          /*     onSubmit={() => {
              handleSubmit();
              setSubmitting(false);
            }} */
          >
            <Container windowsize={windowsize}>
              <SubContainer>
                <FormContainer>
                  <Stack>
                    <Typography
                      fontWeight={700}
                      align="center"
                      sx={{
                        [theme.breakpoints.down("md")]: {
                          ...theme.typography.h2,
                          fontWeight: 700,
                        },
                      }}
                      variant="h1"
                    >
                      Hi there!
                    </Typography>
                    <Typography align="center" variant="caption">
                      Welcome to Robenice. Community Dashboard
                    </Typography>
                  </Stack>

                  {/*      <Typography color={"error"}    variant="overline">
                   Error Page 
                  </Typography> */}

                  <StyledTextField
                    id="mail"
                    name="email"
                    /*  type="email" */
                    fullWidth
                    variant="standard"
                    size="small"
                    label="Email"
                    value={values.email}
                    helperText={
                      errors.email && touched.email ? errors.email : " "
                    }
                    error={errors.email && touched.email ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Stack width={"100%"}>
                    <StyledTextField
                      name="password"
                      id="password"
                      label="Password"
                      fullWidth
                      variant="standard"
                      size="small"
                      type={"password"}
                      value={values.password}
                      helperText={
                        errors.password && touched.password
                          ? errors.password
                          : " "
                      }
                      error={errors.password && touched.password ? true : false}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <LinkText>
                      <Typography variant="caption">
                        {"Forgot Password?"}
                      </Typography>
                    </LinkText>
                  </Stack>
                  <Stack
                    width={"100%"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Typography variant="subtitle2" color={"warning.dark"}>
                      {errorMessage}
                    </Typography>
                  </Stack>

                  <LoginButton
                    autoFocus={true}
                    /*    disabled={
                      !dirty ||
                      !(errors.email === undefined) ||
                      !(errors.password === undefined)
                    } */
                    onClick={() => {
                      loginStore.handleLogin({
                        Username: values.email,
                        Password: values.password,
                      });
                    }}
                  >
                    Log In
                  </LoginButton>
                </FormContainer>
              </SubContainer>
              <SubContainer
                sx={{
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                }}
              >
                <img
                  alt="image"
                  width={"80%"}
                  height={"auto"}
                  src={toImageUrl("/media/login/loginImg.png")}
                />
              </SubContainer>
            </Container>
          </Form>
        );
      }}
    </Formik>
  );
};

export default observer(SignInPage);
