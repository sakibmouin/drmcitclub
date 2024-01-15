tailwind.config = {
  theme: {
    fontFamily: {
      header: ["sans-serif"],
      body: ["sans-serif"],
    },
    extend: {
      colors: {
        navBg: "#0F171A",
        secBg: "#05161D",
        mainBg: "#051419",
        text: "#F7FCFE",
        green: "#0C443B",
        lightGreen: "#32947B",
      },
      boxShadow: {
        "custom-light": "0 1px 3px 0 rgba(0, 0, 0, 0.3)",
        "custom-dark": "0 2px 5px -1px rgba(50, 50, 93, 0.25)",
      },
    },
  },
};
