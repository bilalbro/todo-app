import React, { useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa'
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import TaskManager from './task-manager';
import {classNames} from './utils';

const UPDATE_TASKS_DELAY = 300;
const taskManager = new TaskManager();

function useTasks() {
   const [tasks, setTasks] = useState(taskManager.getTasks());
   return [
      tasks, 
      () => setTasks(taskManager.getTasks())
   ];
}

const App = () => {
   const [tasks, updateTasks] = useTasks();
   const removeIndex = useRef(Infinity);
   const addingTask = useRef(false);
   const clearingTasks = useRef(false);

   function onAddTask(task) {
      addingTask.current = true;
      taskManager.addTask(task);
      updateTasks();

      setTimeout(function() {
         addingTask.current = false;
         updateTasks();
      }, UPDATE_TASKS_DELAY);
   }

   function onRemoveTask(taskId) {
      if (tasks.length === 1) {
         onClearTasks();
         return;
      }

      if (removeIndex.current === Infinity) {
         removeIndex.current = taskManager.indexOfTask(taskId);

         setTimeout(function() {
            removeIndex.current = Infinity;
            taskManager.removeTask(taskId);
            updateTasks();
         }, UPDATE_TASKS_DELAY);

         updateTasks();
      }
   }
   
   function onUpdateTask(taskId, newTask) {
      taskManager.updateTask(taskId, newTask);
      updateTasks();
   }

   function onTaskCompletionToggle(taskId) {
      taskManager.toggleTaskCompletion(taskId);
      updateTasks();
   }

   function onClearTasks() {
      clearingTasks.current = true;
      updateTasks();

      setTimeout(function() {
         clearingTasks.current = false;
         taskManager.clearTasks();
         updateTasks();
      }, UPDATE_TASKS_DELAY);
   }

   return <>
      <h1>Let's Do To-do!</h1>
      <footer>Made by <a href="https://github.com/bilalbro">@bilalbro</a> using React, Vanilla CSS, and Rollup.js</footer>
      <AddTaskForm onAddTask={onAddTask} />

      <TaskList removeIndex={removeIndex.current} addingTask={addingTask.current}
         clearingTasks={clearingTasks.current} onRemoveTask={onRemoveTask}
         onTaskCompletionToggle={onTaskCompletionToggle} onUpdateTask={onUpdateTask}
         tasks={tasks} />
      {
      (!clearingTasks.current && tasks.length !== 0) &&
      <div className={classNames({
         'clear-btn': true,
         'bringing-up': removeIndex.current !== Infinity,
         'bringing-down': addingTask.current
      })}>
         <button onClick={onClearTasks}><FaTimes/> Clear all</button>
      </div>
      }
   </>;

}

export default App;