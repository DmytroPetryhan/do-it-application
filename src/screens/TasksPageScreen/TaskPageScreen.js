import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, View, Touchable } from "react-native";
import styles from "./TaskPageScreenStyles";
import List from "../../components/List";
import CommonButton from "../../components/CommonButton";
import { FontAwesome } from "@expo/vector-icons";
import { THEME } from "../../theme";
import Search from "../../components/Search";
import Select from "../../components/Select";
import NewItemScreen from "../NewItemScreen";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

const TaskPageScreen = () => {
  const bottomSheetModalRef = useRef(null);
  const [items, setItems] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filteredList, setFilteredList] = useState(items);
  const [visiableModal, setVisiableModal] = useState(false);

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

  const snapPoints = ["100%"];

  const handlePresentModal = (props) => () => setVisiableModal(props);

  if (visiableModal) bottomSheetModalRef.current?.present();
  const closeModal = () => bottomSheetModalRef.current?.dismiss();

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <BottomSheetModal
            onDismiss={handlePresentModal(false)}
            ref={bottomSheetModalRef}
            snapPoints={snapPoints}
            index={0}
            backgroundStyle={styles.bottomSheetBackgroundStyle}
          >
            <BottomSheetView style={styles.bottomSheetStyle}>
              <NewItemScreen closeModal={closeModal} />
            </BottomSheetView>
          </BottomSheetModal>

          <View style={styles.selectSearchWrapper}>
            <Search onChangeText={setFilterText} />
            <Select items={items} onSelect={setItems} />
          </View>

          <List title={"Task List"} list={filteredList} />
          <CommonButton
            style={styles.addButton}
            onPress={handlePresentModal(true)}
          >
            {
              <FontAwesome
                name="plus"
                size={24}
                color={THEME.WHITE_TEXT_COLOR}
              />
            }
          </CommonButton>
        </View>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

export default TaskPageScreen;
