import { SimpleGrid } from "@mantine/core";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import OverviewCard from "~/components/OverviewCard";
import { ADMIN_ENDPOINT } from "~/constants";
export const loader: LoaderFunction = async () => {
  try {
    const response = await fetch(`${ADMIN_ENDPOINT}`);
    const jsonData = await response.json();

    return json(jsonData.data);
  } catch (error) {
    throw error;
  }
};
export default function Index() {
  const loaderData = useLoaderData();
  console.log(loaderData);
  return (
    <SimpleGrid
      cols={4}
      breakpoints={[
        { maxWidth: "lg", cols: 4, spacing: "lg" },
        { maxWidth: "md", cols: 3, spacing: "md" },
        { maxWidth: "sm", cols: 2, spacing: "sm" },
        { maxWidth: "xs", cols: 1, spacing: "sm" },
      ]}
    >
      <OverviewCard label={"Users"} count={loaderData.user} />
      <OverviewCard label={"Posts"} count={loaderData.post} />
      <OverviewCard label={"Groups"} count={loaderData.group} />
      <OverviewCard label={"Group Posts"} count={loaderData.groupPost} />
      <OverviewCard label={"Notifications"} count={loaderData.notification} />
      <OverviewCard label={"Messages"} count={loaderData.message} />
      <OverviewCard label={"Login Devices"} count={loaderData.loginHistory} />
    </SimpleGrid>
  );
}
