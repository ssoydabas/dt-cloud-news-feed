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
    from: "cenk@cannabox.store",
    subject: "Reset Password | Cannabox",
    templateId: "d-e9db5439b2db4b34a08373819b20ff6b",
    dynamicTemplateData: {
      change_password_href: `https://cannabox.co.th/auth/reset-password/${token}`,
    },
  });

  return results;
};
