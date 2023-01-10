import { Player } from "../models/Player";
import { Query, QueryMapper } from "../models/Query";

const URL = "https://www.futbin.com/23/builderSearch";

export class FutbinResource {
  public static async getPlayerStats(query: Query) {
    return fetch(this._mapRequest(query) + query.playerName, {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-US,en;q=0.9,es;q=0.8",
        "cache-control": "max-age=0",
        "sec-ch-ua":
          '"Not?A_Brand";v="8", "Chromium";v="108", "Microsoft Edge";v="108"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        cookie:
          "PHPSESSID=fd5f713038ea881ebed259da31ecf30f; theme_player=true; comments=true; platform=ps4; ps=true; xbox=true; cross=true; pc=false; cookieconsent_status=dismiss; __cf_bm=EVtNc1yLm4Yi9zQ3MoATp1BGhwkFGbznzOh1Elh_eKQ-1671322734-0-AdQeTY+8alhhvx8lwsur2xqrZ+POYya3f7Dxqgv0j8Um6OMWoqYNm9hC01yJH11Cxj4s1abAQ5AOQiuSSIyVHq0=",
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        const { PID, name, rat, priceMinPS, pos_all, nn, ln, cn } =
          data.data[0];
        const response: Player = new Player(
          PID,
          name,
          rat,
          priceMinPS,
          pos_all.split(","),
          nn,
          ln,
          cn
        );
        console.log(response.country);
        return response;
      });
  }

  private static _mapRequest(query: Query): string {
    const term = Object.keys(query).reduce((cumm, prop) => {
      const val = query[prop];
      if (val && Object.keys(QueryMapper).includes(prop)) {
        cumm += `%22${QueryMapper[prop]}%22:%22${val}%22`;
      }

      return cumm;
    }, "");
    return URL + `?term={${term}}&playerName=`;
  }
}
