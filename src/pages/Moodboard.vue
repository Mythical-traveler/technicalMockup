<template>
  <div class="moodboard-container">
    <header class="moodboard-header">
      <button class="back-btn" @click="$router.push('/')">←</button>
      <h1>MoodBoard</h1>
    </header>

    <div class="mood-list">
      <div class="mood-box">Image</div>
      <div class="mood-box">Color</div>
    </div>

    <button class="add-content-btn">+ Add Content</button>
  </div>
</template>

<style scoped>
.moodboard-container {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  height: 100vh;
  font-family: sans-serif;
  background-color: #f9f5f3;
}

.moodboard-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.back-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #5dade2;
}

h1 {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
}

.mood-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
}

.mood-box {
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.add-content-btn {
  margin-top: auto;
  padding: 1rem;
  background-color: #5dade2;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>
