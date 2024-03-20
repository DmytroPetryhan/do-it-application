import React, { useState, useRef } from "react";
import { FlatList, View } from "react-native";
import { onboardingData } from "../../data/onboardingData";
import { AntDesign } from "@expo/vector-icons";
import styles from "./OnboardingScreenStyles";
import OnboardingCarusel from "../../components/OnboardingCarusel";
import Paginator from "../../components/Paginator";
import OnboardButton from "../../components/OnboardButton";
import GradientContainer from "../../components/GradientContainer";

const OnboardingScreen = ({ navigation }) => {
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
      navigation.replace("signInScreen");
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

export default OnboardingScreen;
