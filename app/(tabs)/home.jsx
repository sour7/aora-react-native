import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import useAppwrite from "../../lib/useAppwrite";
import { getLatestPosts, getPosts } from "../../lib/appwrite";
import VideoCard from "../../components/VideoCard";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {data:posts, loading, refetchData} =useAppwrite(getPosts)
  const {data:latestPost, refetchData:refechLatestPost} =useAppwrite(getLatestPosts)
   
  const handleRefresh = async() => {
  setRefreshing(true);
  await refetchData()
  setRefreshing(false);
  }

  return (
    <SafeAreaView className="bg-primary h-full justify-center">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
        <VideoCard videos={item}/>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Wecome Back
                </Text>
                <Text className="text-2xl font-pmedium text-white">
                  Sourabh
                </Text>
              </View>
              <View>
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput />
            <View className="w-full flex-1 pt-5 pb-1">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Latest video
              </Text>
              <Trending posts={latestPost??[]} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No video found"
            subtitle="Be the first to create a new video"
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh}/>}
      />
    </SafeAreaView>
  );
};

export default Home;
