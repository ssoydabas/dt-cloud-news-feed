import sendgrid from "@sendgrid/mail";

export interface ResetPasswordEmailParams {
  email: string;
  token: string;
}

export const sendResetPasswordEmail = async ({
  email,
  token,
}: ResetPasswordEmailParams) => {
  const results = await sendgrid.send({
    to: email,
    from: "ssoydabas41@gmail.com",
    subject: "Reset Password",
    templateId: "d-cfa541c7d03941bc807a6cff81b4a61e",
    dynamicTemplateData: {
      change_password_href: `http://localhost:3000/auth/reset-password/${token}`,
    },
  });

  return results;
};
