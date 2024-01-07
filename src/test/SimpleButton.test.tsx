import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { SimpleButton } from "../components/SimpleButton";

test("ボタンを押すとON,OFFが切り替わる", async () => {
  // ボタンのレンダリング
  render(<SimpleButton />);

  // ボタンの表示が OFF であることを確認する
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("OFF");

  const user = userEvent.setup();
  await user.click(button);
  expect(button).toHaveTextContent("ON");
})
