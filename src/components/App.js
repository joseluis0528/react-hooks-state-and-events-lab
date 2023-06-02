import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDark, setIsDark] = useState(false)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const mode = isDark ? "App dark" : "App light"

  function handleMode() {
    setIsDark(isDark => !isDark)
  }

  return (
    <div className={mode}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>{isDark ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
