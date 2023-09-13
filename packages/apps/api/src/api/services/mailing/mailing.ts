import * as dtCloudMailing from "@dt-cloud/mailing";
import { sendgridApiKey } from "~api-root/config";

if (sendgridApiKey) {
  dtCloudMailing.setSendgridApiKey(sendgridApiKey);
}

export default dtCloudMailing;
