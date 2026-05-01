import React, { useState } from 'react';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input }]);
    setInput('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="todo-container" style={{ maxWidth: '400px', margin: '20px auto', padding: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>Todo List</h2>

      {/* Input Row */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task..."
          maxLength={100}
          style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button
          onClick={addTask}
          style={{ width: '100px', backgroundColor: '#7c3aed', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer>
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px', width: '100%' }}>

            {/* The Text Box - Set to grow exactly like the input above */}
            <div style={{
              flex: 1,
              textAlign: 'left',
              padding: '10px',
              backgroundColor: '#f1f5f9',
              borderRadius: '4px',
              overflowWrap: 'anywhere',
              wordBreak: 'break-all'
            }}>
              {task.text}
            </div>

            {/* The Delete Button - Fixed width matching the Add button */}
            <button
              onClick={() => deleteTask(task.id)}
              style={{
                width: '100px',
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '10px 0',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && <p style={{ textAlign: 'center', color: '#888' }}>No tasks yet!</p>}
    </div>
  );
}

export default Todo;
        
