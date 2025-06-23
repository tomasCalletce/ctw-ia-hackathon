"use client";

import { useQueryState, parseAsStringLiteral } from "nuqs";
import { InputForm } from "~/app/_components/input-form";
import { SuccessForm } from "~/app/_components/success-from";

enum ViewState {
  FORM = "form",
  SHARE = "share",
}

export const BadgeForm: React.FC = () => {
  const [view, setView] = useQueryState(
    "view",
    parseAsStringLiteral(Object.values(ViewState)).withDefault(ViewState.FORM)
  );

  const onSuccess = async () => {
    await setView(ViewState.SHARE);
  };

  const handleGoBack = () => {
    setView(ViewState.FORM);
  };

  return (
    <div>
      {view === ViewState.FORM && <InputForm onSuccess={onSuccess} />}
      {view === ViewState.SHARE && <SuccessForm onGoBack={handleGoBack} />}
    </div>
  );
};
