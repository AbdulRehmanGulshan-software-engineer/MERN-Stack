import type { AppRouter } from "../../server/index";
import { createTRPCClient, httpBatchLink } from "@trpc/client";

const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
    }),
  ],
});

async function main() {
  client.greeting.query();
  client.gulshan.query();
  client.getAllProblems.query();
  // updated problem(our fake data in server)
  client.updateProblems.mutate({ id: 0, title: "new Problem" });
}

main();
