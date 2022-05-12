import { observer } from "mobx-react-lite";

import { useStore } from "../app/root-store";
import { H1, Screen } from "../components";

export const HomeScreen = observer(() => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const store = useStore();

  return (
    <Screen title="Home">
      <H1 tx="Hello" />
      <H1 tx="How can I help you today" />
    </Screen>
  );
});

export default HomeScreen;
