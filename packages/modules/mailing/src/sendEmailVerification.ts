import sendgrid from "@sendgrid/mail";

export interface EmailValidationParams {
  email: string;
  verificationToken: string;
}

export const sendEmailVerification = async ({
  email,
  verificationToken,
}: EmailValidationParams) => {
  const results = await sendgrid.send({
    to: email,
    from: "ssoydabas41@gmail.com",
    subject: "Email Verification",
    templateId: "d-e9db5439b2db4b34a08373819b20ff6b",
    dynamicTemplateData: {
      verify_href: `http://localhost:3000/auth/verify/${verificationToken}`,
    },
  });

  return results;
};
