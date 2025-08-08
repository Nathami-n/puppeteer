import { useFetcher } from "react-router";
import type { Route } from "./+types/home";
import * as cheerio from "cheerio";
import { google } from "@ai-sdk/google";
import { generateObject, generateText } from "ai";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Switch } from "~/components/ui/switch";

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
  // const response = await fetch(scrapingSiteURL);
  // const html = await response.text();
  // const $ = cheerio.load(html);
  // const products = $(".product_pod")
  //   .map((_, el) => {
  //     const title = $(el).find("a").attr("title");
  //     const price = $(el).find(".price_color").text();
  //     return { title, price };
  //   })
  //   .get();
  // const { object } = await generateObject({
  //   model: google("gemini-1.5-flash"),
  //   prompt: ` This is the html scraped from a site, extract the title and prices of the books
  //   === HTML===
  //   ${html}
  //    `,
  //   schema: z.object({
  //     items: z.array(
  //       z.object({
  //         title: z.string(),
  //         price: z.string(),
  //       })
  //     ),
  //   }),
  // });
  // return { data: products, llmResponse: object.items };
};
export default function Home(
  {
    // loaderData: { data, llmResponse },
  }: Route.ComponentProps
) {
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

        {/* <div>{JSON.stringify(data, null, 2)}</div>

        <div>{JSON.stringify(llmResponse, null, 2)}</div> */}

        <Button>Test</Button>
        <Button variant={"secondary"}>Secondary</Button>

        <Badge>Badge</Badge>

        <Switch />
        
      </div>
    </div>
  );
}
