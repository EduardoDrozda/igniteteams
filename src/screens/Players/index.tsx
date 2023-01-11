import { Alert, FlatList, TextInput } from "react-native";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { useEffect, useRef, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { AppError } from "@utils/AppError";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ListEmpty } from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";
import { PlayerStorageDTO } from "@storage/players/PlayerStorageDTO";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import { playerAddByGroup } from "@storage/players/playerAddByGroup";
import { playerRemoveByGroup } from "@storage/players/playerRemoveByGroup";
import { playersGetByGroupsAndTeam } from "@storage/players/playerGetByGroupAndTeam";

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState("");

  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const navigation = useNavigation();
  const route = useRoute();
  const { group } = route.params as { group: string };

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPlayer() {
    if (!newPlayerName.trim().length) {
      return Alert.alert(
        "Nova pessoa",
        "Infome o nome da pessoa para adicionar"
      );
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);
      await fetchPlayersByTeam();

      newPlayerNameInputRef.current?.blur();
      setNewPlayerName("");
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert("Nova Pessoa", error.message);
      }

      Alert.alert("Nova Pessoa", "Não foi possível adicionar a pessoa");
      console.error(error);
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupsAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      Alert.alert(
        "Pessoas",
        "Não foi possível carregar as pessoas do time selecionado."
      );

      console.error(error);
    }
  }

  async function handlePlayerRemove(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (error) {
      Alert.alert("Remover Pessoa", "Não foi possível remover essa pessoa.");
      console.error(error);
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group);
      navigation.navigate("groups");
    } catch (error) {
      Alert.alert("Remover Turma", "Não foi possível remover a turma");
      console.error(error);
    }
  }

  async function handleRemoveGroup() {
    try {
      Alert.alert("Remover", "Desebga remover o grupo?", [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => groupRemove(),
        },
      ]);
    } catch (error) {
      Alert.alert("Remover Turma", "Não foi possível remover a turma");
      console.error(error);
    }
  }
  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="adicione a galera e separe os times" />
      <Form>
        <Input
          ref={newPlayerNameInputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handlePlayerRemove(item.name)}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          !players.length && { flex: 1 },
        ]}
      />
      <Button
        title="Remover Turma"
        type="SECONDARY"
        onPress={handleRemoveGroup}
      />
    </Container>
  );
}
