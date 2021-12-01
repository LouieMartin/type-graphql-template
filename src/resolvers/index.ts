import { buildSchema } from "type-graphql";
import { HelloResolver } from "./HelloResolver";

export const createSchema = () => buildSchema({
    resolvers: [HelloResolver],
});
