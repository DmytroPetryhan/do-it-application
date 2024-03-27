import React, { useState, useRef } from "react";
import { FlatList, View } from "react-native";
import { onboardingData } from "../../data/onboardingData";
import { AntDesign } from "@expo/vector-icons";
import styles from "./OnboardingScreenStyles";
import OnboardingCarusel from "../../components/OnboardingCarusel";
import Paginator from "../../components/Paginator";
import CommonButton from "../../components/CommonButton";
import GradientContainer from "../../components/GradientContainer";
import { useDispatch } from "react-redux";
import { toggleIsOnboarded } from "../../store/userSlice";

const OnboardingScreen = () => {
  const dispatch = useDispatch();
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
      dispatch(toggleIsOnboarded(true));
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
        <CommonButton onPress={buttonHandler}>{icon}</CommonButton>
      </View>
    </GradientContainer>
  );
};

export default OnboardingScreen;
