"use client";

import { getDashboardData } from "@/lib/db/dashboard";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<{ apy: number; tvl: number }[]>([]);

  if (!data) {
    getDashboardData().then((data) => {
      setData(data);
    });
  }

  if (data) {
    return <div> Data is successfully loaded: {data[0].apy} </div>;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
