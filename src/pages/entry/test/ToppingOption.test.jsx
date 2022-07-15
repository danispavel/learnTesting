import { render, screen } from "../../../test-utils/testing-library-utils";

import Options from "../Options";

test("displays image for each topping option from server", async () => {
  render(<Options optionType="toppings" />);

  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });

  expect(toppingImages).toHaveLength(6);

  const altText = toppingImages.map((element) => element.alt);

  expect(altText).toEqual([
    "M&Ms topping",
    "Hot fudge topping",
    "Peanut butter cups topping",
    "Gummi bears topping",
    "Mochi topping",
    "Cherries topping",
  ]);
});
