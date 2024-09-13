import { StyleSheet, View, Text, FlatList } from "react-native";

export default function Lesson1() {
  const message: string = "TypeScript";

  type FootballTeam = {
    team: string;
    id: number;
  };

  const footballTeams: FootballTeam[] = [
    { team: "Fenerbahçe", id: 1 },
    { team: "BJK", id: 2 },
    { team: "Galatasaray", id: 3 },
    { team: "Trabzonspor", id: 4 }, // "Galatasaray" yerine farklı bir takım ismi önerildi
  ];

  return (
    <View style={styles.titleContainer}>
      {/*  
      <Text style={styles.title}>Olcay Eryiğit</Text>
      <Text style={styles.subTitle}>Civil Engineer</Text>
      <Text style={styles.subTitle}>{message}</Text>
      */}

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={true}
        data={footballTeams}
        keyExtractor={(item) => item.id.toString()} // `id`'yi string'e çeviriyoruz
        renderItem={({ item }) => {
          return <Text style={styles.content}>{item.team}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "black",
    fontSize: 50,
  },
  subTitle: {
    fontSize: 30,
  },
  content: {
    fontSize: 15,
    backgroundColor: "red",
    margin: 10,
    padding: 20,
  },
});
