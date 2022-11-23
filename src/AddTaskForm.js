import React, { useState } from 'react';
import { FaPlus, FaExclamationTriangle } from 'react-icons/fa'
import TaskManager from './task-manager';
import { classNames } from './utils';

const AddTaskForm = ({
   onAddTask
}) =>
{
   let [taskName, setTaskName] = useState('');
   const [error, setError] = useState(false);

   function onSubmit(e) {
      e.preventDefault();
      taskName = taskName.trim();

      if (taskName === '') {
         setError(true);
      }
      else {
         setError(false);
         setTaskName('');
         onAddTask(TaskManager.createTask(taskName));
      }
   }

   return (
      <div className={classNames({
         'add-task-form': true,
         'add-task-form--error': error
      })}>
         <form action="" onSubmit={onSubmit}>
            <input type="text" placeholder="Enter task name..." value={taskName}
               onChange={(e) => setTaskName(e.target.value)}
               /* onBlur={(e) => setError(false)} */ />
            <button><FaPlus /></button>
         </form>
         <div className="add-task-form_msg"><FaExclamationTriangle /> Field can't be empty!</div>
      </div>
   );
}

export default AddTaskForm;