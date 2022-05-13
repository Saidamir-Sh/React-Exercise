import { observer } from "mobx-react-lite";

import { useStore } from "../app/root-store";
import {
  H1,
  H2,
  H6,
  Screen,
  ButtonCondition,
  ButtonDurationOne,
  ButtonDurationTwo,
} from "../components";

export const QuestionScreen = observer(() => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const store = useStore();
  store.getRecommendedDrugs("SHORT");

  return (
    <Screen title="Refinement Question">
      <H1 tx="Hello, " />
      <H2 tx="How can I help you today?" />
      <H6 tx="How long has this been going on for?" />
      <ButtonCondition>{store.condition}</ButtonCondition>
      <ButtonDurationOne value="SHORT">&lt;3 days</ButtonDurationOne>
      <ButtonDurationTwo value="LONG">Too long</ButtonDurationTwo>
    </Screen>
  );
});

export default QuestionScreen;
