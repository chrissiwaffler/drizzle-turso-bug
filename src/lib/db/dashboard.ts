import { cache } from "react";

import { db } from "@/lib/db/connector";
import { platformHistory } from "@/lib/db/schema/schema";

// revalidate the data at most every hour
export const revalidate = 3600;

export const getDashboardData = cache(async () => {
  return db
    .select()
    .from(platformHistory)
    .all()
    .then((data) =>
      data.map((d) => {
        return {
          apy: d.apy ?? 0,
          tvl: d.totalValueLocked ?? 0,
        };
      })
    );
});
