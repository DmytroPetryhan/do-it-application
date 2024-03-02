import React, { useState, useRef } from "react";
import { StyleSheet, FlatList, View, Dimensions } from "react-native";
import { onboardingData } from "../data/onboardingData";
import GradientContainer from "../components/GradientContainer/index";
import OnboardingCarusel from "../components/OnboardingCarusel/index";
import Paginator from "../components/Paginator/index";
import OnboardButton from "../components/OnboardButton/index";
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
    <GradientContainer style={styles.container}>
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
    </GradientContainer>
  );
};

const styles = StyleSheet.create({
  container: {
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
