import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import { useStore } from "../app/root-store";
import {
  H1,
  H2,
  Screen,
  ButtonConditionOne,
  ButtonConditionTwo,
} from "../components";

export const HomeScreen = observer(() => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const store = useStore();
  const navigate = useNavigate();

  const GetConditionEvent = (value: string) => {
    navigate("/condition");
    store.setCondition(value);
  };

  return (
    <Screen title="Home">
      <H1 tx="Hello, " />
      <H2 tx="How can I help you today?" />
      <ButtonConditionOne
        onClick={(event) => GetConditionEvent(event.currentTarget.innerText)}
        value="I have a stomach ache"
      >
        I have a stomach ache
      </ButtonConditionOne>
      <ButtonConditionTwo value="I have a cold">
        I have a cold
      </ButtonConditionTwo>
    </Screen>
  );
});

export default HomeScreen;
