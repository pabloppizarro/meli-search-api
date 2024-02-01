import { ApiServer } from "./apiserver";

export async function main(): Promise<void> {
  await ApiServer.run(3000);
}

main();
