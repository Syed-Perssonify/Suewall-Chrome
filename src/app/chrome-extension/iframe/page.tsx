import { Main } from "./_main";

export default async function ChromeExtensionIframe({
  searchParams,
}: {
  searchParams:
    | Promise<{ [key: string]: string | string[] | undefined }>
    | undefined;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  console.log("Search Params:", resolvedSearchParams);
  const token = resolvedSearchParams.tkn || null;
  console.log("Token:", token);
  const data = resolvedSearchParams.dt || null;
  const parsedData = data ? JSON.parse(decodeURIComponent(data as string)) : [];
  console.log("Active Cases:", parsedData?.activeCases || []);
  return (
    <Main activeCases={parsedData?.activeCases || []} token={token as string} />
  );
}
