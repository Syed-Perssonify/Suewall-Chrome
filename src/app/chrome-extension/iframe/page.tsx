// import { Main } from "./_main";

// export default async function ChromeExtensionIframe({
//   searchParams,
// }: {
//   searchParams: { [key: string]: string | string[] | undefined };
// }) {
//   console.log("Search Params:", searchParams);
//   const token = (await searchParams).tkn || null;
//   console.log("Token:", token);
//   const data = (await searchParams).dt || null;
//   const parsedData = data ? JSON.parse(decodeURIComponent(data as string)) : [];
//   console.log("Active Cases:", parsedData?.activeCases || []);
//   return (
//     <Main activeCases={parsedData?.activeCases || []} token={token as string} />
//   );
// }
