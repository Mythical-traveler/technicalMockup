<template>
    <div class="notes-container">
      <header class="notes-header">
        <button class="back-btn" @click="$router.push('/')">←</button>
        <h1>Notes</h1>
      </header>
  
      <div class="note-list">
        <div class="note-box">This is a sample note.</div>
        <div class="note-box">Here’s another example note.</div>
      </div>
  
      <button class="add-note-btn">+ Add Note</button>
    </div>
  </template>
  
  <style scoped>
  .notes-container {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    height: 100vh;
    font-family: sans-serif;
    background-color: #fdf6f6;
  }
  
  .notes-header {
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
    color: #4263eb;
  }
  
  h1 {
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0;
  }
  
  .note-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-grow: 1;
  }
  
  .note-box {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
  
  .add-note-btn {
    margin-top: auto;
    padding: 1rem;
    background-color: #4263eb;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  </style>
  