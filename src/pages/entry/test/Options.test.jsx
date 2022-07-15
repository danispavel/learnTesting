import { render, screen } from "../../../test-utils/testing-library-utils";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";

import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });

  expect(scoopImages).toHaveLength(4);

  const altText = scoopImages.map((element) => element.alt);

  expect(altText).toEqual([
    "Mint chip scoop",
    "Vanilla scoop",
    "Chocolate scoop",
    "Salted caramel scoop",
  ]);
});
