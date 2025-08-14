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

export default function DashboardIndex() {
  return <div>hello</div>;
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
