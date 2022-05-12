import { observer } from "mobx-react-lite";

import { useStore } from "../app/root-store";
import {
  H1,
  H2,
  Screen,
  ButtonDurationOne,
  ButtonDurationTwo,
} from "../components";

export const QuestionScreen = observer(() => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const store = useStore();

  return (
    <Screen title="Refinement Question">
      <H1 tx="Hello, " />
      <H2 tx="How can I help you today?" />
      <ButtonDurationOne value="SHORT">3 days</ButtonDurationOne>
      <ButtonDurationTwo value="I have a cold">Too long</ButtonDurationTwo>
      <H1 tx={store.condition} />
    </Screen>
  );
});

export default QuestionScreen;
