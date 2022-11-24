import React, { useEffect, useRef, useState } from 'react';
import { FaPencilAlt, FaTrash, FaCheck } from 'react-icons/fa'
import InputCheckbox from './InputCheckbox';
import {classNames} from './utils';

const Task = ({
   name,
   completed,
   id,
   onRemove,
   onUpdate,
   onCompletionToggle,

   bringingUp,
   hiding,
   bringingDown,
   showing
}) =>
{
   const [isUpdating, setIsUpdating] = useState(false);
   const [updatedName, setUpdatedName] = useState(name);
   const nameInputElement = useRef();
   const wasMouseDown = useRef(false);

   useEffect(function() {
      isUpdating && nameInputElement.current.focus();
   }, [isUpdating]);

   function onSubmit(e) {
      e.preventDefault();
      var taskName = e.target.elements['taskName'].value.trim();
      onUpdate(id, taskName);
      setUpdatedName(taskName);
      setIsUpdating(false);
   }

   function onDoneButtonFocus(e) {
      e.preventDefault();
      wasMouseDown.value = true;
   }

   function onNameInputBlur(e) {
      setIsUpdating(false);
      setUpdatedName(name);
   }

   return (
      <li className={classNames({
         'task': true,
         'task--completed': completed,
         'task--updating': isUpdating,
         'bringing-up': bringingUp,
         'hiding': hiding,
         'bringing-down': bringingDown,
         'showing': showing,
      })}>
         <form action="" onSubmit={onSubmit}>
            <InputCheckbox checked={completed} onChange={(e) => onCompletionToggle(id)} />

            <input className="task_name" type="text" value={updatedName} name="taskName"
               disabled={!isUpdating} ref={nameInputElement} onBlur={onNameInputBlur}
               onChange={(e) => setUpdatedName(e.target.value)} />

            {isUpdating
            ? <>
               <button className="task_btn task_btn--last" key={0} onMouseDown={onDoneButtonFocus}><FaCheck /></button>
            </>
            : <>
               <button className="task_btn task_btn--second-last" key={1}
                  onClick={() => setIsUpdating(true)} type="button"><FaPencilAlt /></button>
               <button className="task_btn task_btn--last" key={2}
                  onClick={() => onRemove(id)} type="button"><FaTrash /></button>
            </>}
         </form>
      </li>
   );
}

export default Task;