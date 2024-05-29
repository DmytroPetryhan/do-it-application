import React, { useRef, useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import styles from "./ItemCartStyle";
import Swipeable from "react-native-gesture-handler/Swipeable";
import SwipeActionsButton from "../SwipeActionsButton";
import { THEME } from "../../theme";
import { useDispatch } from "react-redux";
import { toggleSwiped } from "../../store/userSlice";

const ItemCart = ({ item, navigationHandler, onPress }) => {
  const { title, completed, date, time, id } = item;
  const swipedRef = useRef();
  const dispatch = useDispatch();

  const [swipeActivated, setSwipeActivated] = useState(false);

  useEffect(() => {
    if (!item.swiped) {
      swipedRef.current.close();
    }
  }, [item.swiped]);

  const rightSwipeActions = () => <SwipeActionsButton onPress={onPress(id)} />;

  const swipeFromRightOpen = () => {
    setSwipeActivated(true);
    dispatch(toggleSwiped(id));
  };

  const onPressHandler = () => {
    if (!swipeActivated) {
      navigationHandler(item);
    }
    setSwipeActivated(false);
  };

  return (
    <Swipeable
      ref={swipedRef}
      renderRightActions={rightSwipeActions}
      onSwipeableOpenStartDrag={swipeFromRightOpen}
      containerStyle={styles.containerStyle}
    >
      <Pressable onPress={onPressHandler} style={styles.container}>
        <View style={styles.contentWrap}>
          {completed && (
            <View style={styles.iconCompleted}>
              <FontAwesome
                name="check-circle"
                size={24}
                color={THEME.ITEM_DONE_COLOR}
              />
            </View>
          )}
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.dateText}>{`${date}  |  ${time}`}</Text>
          </View>
        </View>
        <Entypo name="chevron-right" size={25} color={THEME.ARROW_BUTTON} />
      </Pressable>
    </Swipeable>
  );
};
export default ItemCart;
