import { db } from "@/db";
import { categories } from "@/db/schema";
import { createTRPCRouter, baseProcedure } from "@/trpc/init";
import { TRPCError } from "@trpc/server";


export const categoriesRouter = createTRPCRouter({
    getMany: baseProcedure
            .query(async ()=>{
                const data = await db.select().from(categories);

                return data;
            })
})

