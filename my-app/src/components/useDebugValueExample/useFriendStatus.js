import { useDebugValue, useState } from "react";

export function useFriendStatus() {
  const [isOnline, setIsOnline] = useState(null);

  useDebugValue(isOnline ? "online" : "offline");
  return isOnline ? "online" : "offline";
}
