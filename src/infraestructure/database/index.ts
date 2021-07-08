import { createConnection } from "typeorm";

export default async function startConnection() {
    await createConnection();
}
