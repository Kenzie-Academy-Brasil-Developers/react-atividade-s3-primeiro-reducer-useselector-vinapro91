const initialState = [
  {
    name: "Banana",
    img: "https://i.pinimg.com/564x/f1/a7/0d/f1a70dd8be0c887215051cf8daff9fd5.jpg",
  },
  {
    name: "Maçã",
    img: "https://i.pinimg.com/564x/5f/0b/e2/5f0be29a6b74962f93d6bbde671031e1.jpg",
  },
  {
    name: "Morango",
    img: "https://i.pinimg.com/564x/90/fa/0e/90fa0e3c1315320f95bfb6a40213dc35.jpg",
  },
];

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default fruitsReducer;
