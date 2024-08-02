import { CardWrapper } from "@/components/global/auth/card-wrapper"

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel={"welcome back!"}
      backButtonLabel={"don't have an account?"}
      backButtonHref={"/auth/register"}
      showSocials
    >
      <h1>LoginForm</h1>
    </CardWrapper>
  )
}
