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
    templateId: "d-ac6bcf58edce4ddaa25e266871bd4533",
    dynamicTemplateData: {
      verify_href: `http://localhost:3000/auth/verify/${verificationToken}`,
    },
  });

  return results;
};
