import { FutbinResource } from "../resources/FutbinResource";

function getPlayerByName(playerName: string) {
  return FutbinResource.getPlayerStats({
    playerName,
  });
}
