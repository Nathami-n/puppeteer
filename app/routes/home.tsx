import { useFetcher } from "react-router";
import type { Route } from "./+types/home";
import * as cheerio from "cheerio";

const scrapingSiteURL = "https://books.toscrape.com";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export const action = async ({}: Route.ActionArgs) => {
  return {
    ok: true,
  };
};

export const loader = async ({}: Route.LoaderArgs) => {
  const response = await fetch(scrapingSiteURL);
  const html = await response.text();

  const $ = cheerio.load(html);

  const products = $(".product_pod")
    .map((_, el) => {
      const title = $(el).find("a").attr("title");
      const price = $(el).find(".price_color").text();
      return { title, price };
    })
    .get();
  return { data: products, llmResponse: [] };
};
export default function Home({ loaderData: { data } }: Route.ComponentProps) {
  const fetcher = useFetcher();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-4">
        <button
          className="border p-2 rounded-lg shadow-sm cursor-pointer border-gray-200"
          onClick={() => {
            fetcher.submit(
              { name: "nathan" },
              {
                action: "/?index",
                method: "POST",
              }
            );
          }}
        >
          Submit
        </button>
        <span>{fetcher.state}</span>
        <div>{fetcher.data?.ok && <p>{JSON.stringify(fetcher.data)}</p>}</div>

        <div>{JSON.stringify(data, null, 2)}</div>
      </div>
    </div>
  );
}
