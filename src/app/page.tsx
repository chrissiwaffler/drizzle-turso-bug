"use client";

import { Suspense } from "react";
import AsyncComponent from "./async-component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<div>loading...</div>}>
        <AsyncComponent />
      </Suspense>
    </main>
  );
}
