import { AppSidebar } from "~/components/custom/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Separator } from "~/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import type { Route } from "../../layouts/+types/dashboard";
import { Suspense } from "react";
import { Await } from "react-router";

export function loader() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

export default function Page({ loaderData }) {
  // const { data, refetch } = useTest();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div>
          <h1>Dashboard</h1>

          <h1>My Component</h1>
          <Suspense fallback={<p>Loading...</p>}>
            <Await resolve={loaderData}>{(data) => <p>{data}</p>}</Await>
          </Suspense>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

// function useTest(
//   { autoFetch = true }: { autoFetch?: boolean } = { autoFetch: true }
// ) {
//   const { query, ...rest } = useTypedFetcher<{ name: string }>();
//   const fetchedRef = useRef(false);

//   const fetchData = useCallback(() => {
//     if (!fetchedRef.current) {
//       fetchedRef.current = true;
//       query(`/api/test`);
//     }
//   }, [query]);

//   useEffect(() => {
//     if (autoFetch) {
//       fetchData();
//     }
//   }, [autoFetch, fetchData]);

//   return {
//     ...rest,
//     refetch: () => {
//       fetchedRef.current = false;
//       fetchData();
//     },
//   };
// }
