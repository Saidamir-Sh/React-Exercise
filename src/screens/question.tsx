import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import { useStore } from "../app/root-store";
import {
  H1,
  H2,
  H6,
  Screen,
  ButtonConditionInput,
  ButtonDurationOne,
  ButtonDurationTwo,
} from "../components";

export const QuestionScreen = observer(() => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const store = useStore();
  const navigate = useNavigate();

  const navigateToReccomendation = (duration: string, value: string) => {
    navigate(`/drug/duration/${duration}`);
    store.setDuration(value);
    store.getRecommendedDrugs(duration);
  };

  return (
    <Screen title="Refinement Question">
      <H1 tx="Hello, " />
      <H2 tx="How can I help you today?" />
      <H6 tx="How long has this been going on for?" />
      <ButtonConditionInput>{store.condition}</ButtonConditionInput>
      <ButtonDurationOne
        onClick={(event) =>
          navigateToReccomendation("SHORT", event.currentTarget.innerText)
        }
        value="SHORT"
      >
        &lt;3 days
      </ButtonDurationOne>
      <ButtonDurationTwo
        onClick={(event) =>
          navigateToReccomendation("LONG", event.currentTarget.innerText)
        }
        value="LONG"
      >
        Too long
      </ButtonDurationTwo>
    </Screen>
  );
});

export default QuestionScreen;
