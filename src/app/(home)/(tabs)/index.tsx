import { Link, router, Stack } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { ChannelList } from "stream-chat-expo";
import { useAuth } from "../../../providers/AuthProvider";

export default function MainTabScreen() {
  const { user } = useAuth();
  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Link href={"/(home)/users"} asChild>
              <FontAwesome6
                name="users"
                size={22}
                color="grey"
                style={{ marginHorizontal: 16 }}
              />
            </Link>
          ),
        }}
      />
      <ChannelList
        filters={{ members: { $in: [user.id] } }}
        onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
      />
    </>
  );
}
