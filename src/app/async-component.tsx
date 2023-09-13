import { getDashboardData } from "@/lib/db/dashboard";

export default async function AsyncComponent() {
  const data = await getDashboardData();

  if (data) {
    return <div> {data[0].apy} </div>;
  }
}
