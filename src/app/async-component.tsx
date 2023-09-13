import { getDashboardData } from "@/lib/db/dashboard";

export default async function AsyncComponent() {
  const data = await getDashboardData();

  if (data) {
    return <div> Data is successfully loaded: {data[0].apy} </div>;
  }
}
