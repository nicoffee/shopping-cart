import { schema } from "normalizr";

export const good = new schema.Entity("goods");
export const mySchema = { goods: [good] };
export const arrayOfGoods = new schema.Array(good);
