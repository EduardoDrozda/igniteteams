import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "./playerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playersGetByGroupsAndTeam(
  group: string,
  team: string
): Promise<PlayerStorageDTO[]> {
  try {
    const storage = await playersGetByGroup(group);
    return storage.filter((player) => player.team === team);
  } catch (error) {
    throw error;
  }
}
