import { useReducer, useState } from "react";

const initialCount = [
  {
    type: "chicken",
    count: 1
  }
];

function reducer(state, action) {
  const newCount = [...state].map((animal) => {
    if (action.type === animal.type) {
      return {
        type: animal.type,
        count: animal.count + parseInt(action.addAmount, 10)
      };
    }
    return { type: animal.type, count: animal.count };
  });
  // in case we want to add new animal
  const existAnimal = newCount.find((animal) => animal.type === action.type);
  if (!existAnimal) {
    newCount.push({ type: action.type, count: parseInt(action.addAmount) });
  }
  return newCount;
}

function UseReducerExample() {
  const [count, dispatch] = useReducer(reducer, initialCount);
  const [animalType, setAnimalType] = useState();
  const [addAmount, setAddAmount] = useState();

  const handleAdd = () => {
    dispatch({ type: animalType, addAmount: addAmount });
  };

  return (
    <>
      <h1>Use Reducer Example (Counter App)</h1>
      {count.map((animal, index) => {
        return (
          <p key={index}>
            {animal.type} amount: {animal.count}
          </p>
        );
      })}
      <input
        type="text"
        placeholder="animal type"
        value={animalType || ""}
        onChange={(e) => setAnimalType(e.target.value)}
      />
      <input
        type="text"
        placeholder="amount to add"
        value={addAmount || ""}
        onChange={(e) => setAddAmount(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
}

export default UseReducerExample;
