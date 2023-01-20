import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fastify();
// const prisma = new PrismaClient(); // conexão com banco de dados

app.register(cors)
app.register(appRoutes)



app.listen({
  port: 3333,
});
