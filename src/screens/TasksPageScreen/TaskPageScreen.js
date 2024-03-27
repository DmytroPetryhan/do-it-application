import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import styles from "./TaskPageScreenStyles";
import List from "../../components/List";
import CommonButton from "../../components/CommonButton";
import { FontAwesome } from "@expo/vector-icons";
import { THEME } from "../../theme";
import Search from "../../components/Search";
import Select from "../../components/Select";

const TaskPageScreen = () => {
  const [items, setItems] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filteredList, setFilteredList] = useState(items);

  useEffect(() => {
    setFilteredList(items);
  }, [items]);

  useEffect(() => {
    filterHandler();
  }, [filterText]);

  const filterHandler = () => {
    const list = items.filter((item) => item.title.includes(filterText));
    setFilteredList(list);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.selectSearchWrapper}>
          <Search onChangeText={setFilterText} />
          <Select items={items} onSelect={setItems} />
        </View>

        <List title={"Task List"} list={filteredList} />
        <CommonButton style={styles.addButton}>
          {<FontAwesome name="plus" size={24} color={THEME.WHITE_TEXT_COLOR} />}
        </CommonButton>
      </View>
    </SafeAreaView>
  );
};

export default TaskPageScreen;
