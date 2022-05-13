import { observer } from "mobx-react-lite";

import { useStore } from "../app/root-store";
import {
  H1,
  H2,
  H6,
  Screen,
  ButtonConditionInput,
  ButtonDurationInput,
  ButtonDurationOne,
  ButtonDurationTwo,
  H1Results,
  StyledRectangle,
  H3,
} from "../components";

export const ResultsScreen = observer(() => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const store = useStore();
  console.log(store.drugs);

  return (
    <Screen title="Results - Bluspiran">
      <H1 tx="Hello, " />
      <H2 tx="How can I help you today?" />
      <H6 tx="How long has this been going on for?" />
      <H1Results tx="I’ve found something:" />
      <StyledRectangle />
      <H3 tx="Title" />
      <ButtonDurationInput>{store.duration}</ButtonDurationInput>
      <ButtonConditionInput>{store.condition}</ButtonConditionInput>
      <ButtonDurationOne value="SHORT">&lt;3 days</ButtonDurationOne>
      <ButtonDurationTwo value="LONG">Too long</ButtonDurationTwo>
    </Screen>
  );
});

export default ResultsScreen;
