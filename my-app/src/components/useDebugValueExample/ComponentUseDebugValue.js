import { useFriendStatus } from "./useFriendStatus";

export function ComponentUseDebugValue() {
  const isOnline = useFriendStatus();
  return (
    <div className="container">
      <h1>Check useDebugValue</h1>
      {isOnline}
    </div>
  );
}
