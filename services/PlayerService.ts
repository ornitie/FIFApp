import { FutbinResource } from "../resources/FutbinResource";

function getPlayerByName(name: string) {
  return FutbinResource.getPlayerStats({
    playerName: name,
  });
}
