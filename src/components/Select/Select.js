import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Text, View } from "react-native";
import styles from "./SelectStyles";
import { THEME } from "../../theme";

import { useEffect } from "react";

const Select = ({ onSelect, items }) => {
  const selectTitles = [
    { title: "All", item: items },
    { title: "Complet", item: items.filter((i) => i.completed === true) },
    { title: "Incomplet", item: items.filter((i) => i.completed === false) },
  ];

  useEffect(() => {
    onSelect(items);
  }, [items]);

  return (
    <View>
      <SelectDropdown
        data={selectTitles}
        onSelect={(selectedItem, index) => {
          onSelect(selectedItem.item);
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Icon
                style={styles.dropDownIcon}
                name="sort-ascending"
                size={26}
                color={THEME.WHITE_COLOR}
              />
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.title) || "Sort By:"}
              </Text>
              <Icon
                name={isOpened ? "chevron-up" : "chevron-down"}
                style={styles.dropdownButtonArrowStyle}
                color={THEME.WHITE_COLOR}
              />
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && {
                  backgroundColor: THEME.SELECT_ACTIVECOLOR,
                }),
              }}
            >
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
    </View>
  );
};

export default Select;
