// utils/localStorage.js

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("auth");
    if (serializedState === null) return undefined; // No saved state
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined; // Handle error
  }
};

export const saveState = (user, token) => {
  try {
    const serializedState = JSON.stringify({ user, token });
    localStorage.setItem("auth", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};
