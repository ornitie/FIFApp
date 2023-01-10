import { Player } from "../models/Player";
import { Query, QueryMapper } from "../models/Query";

const config = require("../config");

export class FutbinResource {
  public static async getPlayerStats(query: Query) {
    return fetch(this._mapRequest(query) + query.playerName, {
      headers: {
        accept: config.ACCEPT,
        "accept-language": config.ACCEPT_LANGUAGE,
        "cache-control": config.CACHE_CONTROL,
        "sec-ch-ua": config.SEC_CH_UA,
        "sec-ch-ua-mobile": config.SEC_CH_UA_MOBILE,
        "sec-ch-ua-platform": config.SEC_CH_UA_PLATFORM,
        "sec-fetch-dest": config.SEC_FETCH_DEST,
        "sec-fetch-mode": config.SEC_FETCH_MODE,
        "sec-fetch-site": config.SEC_FETCH_SITE,
        "sec-fetch-user": config.SEC_FETCH_USER,
        "upgrade-insecure-requests": config.UPGRADE_INSECURE_REQUESTS,
        cookie: config.COOKIE,
      },
      referrerPolicy: config.REFERRER_POLICY,
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        const { PID, name, rat, priceMinPS, pos_all, nn, ln, cn } =
          data.data[0];

        return new Player(
          PID,
          name,
          rat,
          priceMinPS,
          pos_all.split(","),
          nn,
          ln,
          cn
        );
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
    return config.FUTBIN_URL + `?term={${term}}&playerName=`;
  }
}
