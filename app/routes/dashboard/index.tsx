import { DivWrapper } from "~/components/custom/div-wrapper";

export default function DashboardIndex() {
  return <DivWrapper>
    <div>hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptas repellendus consectetur nisi cumque aliquam eveniet obcaecati reprehenderit rerum nihil sunt impedit necessitatibus explicabo quas ipsa corporis nobis qui excepturi!</div>
  </DivWrapper>;
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
