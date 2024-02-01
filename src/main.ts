import { ApiServer } from "./infrastructure/ApiServer";

export async function main(): Promise<void> {
  await ApiServer.run(3001);
}

main();
