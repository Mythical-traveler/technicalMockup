<script setup>
const sigil = new URL('../assets/friendly.png', import.meta.url).href
</script>


<template>
  <div class="container">
    <header class="header">
      <img :src="sigil" class="avatar" alt="Sigil" />
      <span class="spacer" />
      <button class="gear">⚙️</button>
    </header>

    <h1 class="title">FocusHelp</h1>

    <div class="nav-buttons">
      <button class="btn notes" @click="$router.push('/notes')">Notes</button>
      <button class="btn ai">AI</button>
      <button class="btn moodboard" @click="$router.push('/moodboard')">MoodBoard</button>
      <button class="btn notifications">Notifications</button>
    </div>

    <button class="logout">Log out</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  font-family: sans-serif;
  position: relative;
  height: 100vh;
  background: #f9eaea;
}

.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.gear {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.title {
  margin: 2rem 0 1.5rem;
  font-size: 1.8rem;
  font-weight: bold;
}

.nav-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.btn {
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.notes {
  background-color: #4263eb;
  color: white;
}

.ai {
  background-color: #f1c40f;
  color: black;
}

.moodboard {
  background-color: #5dade2;
  color: white;
}

.notifications {
  background-color: #2f3640;
  color: white;
}

.logout {
  margin-top: auto;
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 1rem;
  width: 100%;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
}
</style>
