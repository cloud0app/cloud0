import { adminClient, organizationClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

const authClient = createAuthClient({
   plugins: [adminClient(), organizationClient()],
});

export { authClient };
