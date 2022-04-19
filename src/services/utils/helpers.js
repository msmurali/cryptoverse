import { millify } from "millify";

function formatNum(num) {
  const options = {
    precision: 2,
    space: true,
  };

  return millify(num, options);
}

export { formatNum };
