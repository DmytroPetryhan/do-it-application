import React, { useState, useRef } from "react";
import { StyleSheet, FlatList, View, Dimensions } from "react-native";
import { onboardingData } from "../data/onboardingData";
import OnboardingCarusel from "../components/OnboardingCarusel";
import Paginator from "../components/Paginator";
import OnboardButton from "../components/OnboardButton";
import { AntDesign } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");

const OnboardingScreen = () => {
  const swipeLength = onboardingData.length - 1;
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();

  const viewableItemsChanged = ({ viewableItems }) => {
    const index = viewableItems[0].index;
    setCurrentIndex(index);
  };

  const icon =
    currentIndex !== swipeLength ? (
      <AntDesign name="arrowright" size={40} color="black" />
    ) : (
      <AntDesign name="check" size={40} />
    );

  const buttonHandler = () => {
    if (currentIndex < swipeLength) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      return;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <OnboardingCarusel image={item.image} title={item.title} />
        )}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
      />
      <View style={styles.bottomContainer}>
        <Paginator data={onboardingData} caruselIndex={currentIndex} />
        <OnboardButton onPress={buttonHandler}>{icon}</OnboardButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
  },
  bottomContainer: {
    position: "absolute",
    bottom: height / 8,
    width: width - width / 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default OnboardingScreen;
