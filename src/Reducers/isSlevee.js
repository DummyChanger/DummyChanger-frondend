const sleveeType = (state = "LONG", action) => {
  switch (action.type) {
    case "LONG":
      return "LONG";
    case "SHORT":
      return "SHORT";
    default:
      return state;
  }
};

export default sleveeType;
