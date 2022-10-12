import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ADMIN_ENDPOINT } from "~/constants";

export const loader: LoaderFunction = async () => {
  try {
    const response = await fetch(`${ADMIN_ENDPOINT}/groupPosts`);
    const jsonData = await response.json();
    console.log("Data: ", jsonData);
    return null;
  } catch (error) {
    throw error;
  }
};

export default function GroupPosts() {
  const groupPosts = useLoaderData();
  console.log({groupPosts});
  return <div>Group Posts</div>;
}
