import { Type, Static } from "@sinclair/typebox";

export const UserInput = Type.Object(
  {
    id: Type.Optional(Type.Number()),
    createdAt: Type.Optional(Type.String()),
    email: Type.String(),
    weight: Type.Optional(Type.Number()),
    is18: Type.Optional(Type.Boolean()),
    name: Type.Optional(Type.String()),
    successorId: Type.Optional(Type.Number()),
    keywords: Type.Array(Type.String({ minLength: 3 }), { maxItems: 10 }),
    biography: Type.String({ description: "field description" }),
    decimal: Type.Number({ description: "used description" }),
    biginteger: Type.Integer({ description: "multiline\ndescription" }),
    unsigned: Type.Integer({ minimum: 0 }),
  },
  { description: "model description" }
);

export type UserInputType = Static<typeof UserInput>;
