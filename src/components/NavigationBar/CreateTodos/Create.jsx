import {useContext} from 'react';
import './Create.css';
import { useForm } from 'react-hook-form';
import { TodoContext } from '../../TodoContext/TodoContext';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Create = () => {
 
  const {
    register,
    setError,
    watch,
    handleSubmit,
    formState:{isSubmitting,errors},
    reset

  } = useForm()
  const {todos,setTodos} = useContext(TodoContext);
  const navigate = useNavigate();

  const onSubmit = (data)=>{
    console.log(data);

    const newTodo ={
      id : uuidv4(),
      heading:data.heading,
      description : data.description,
      duedate : data.date,
      completed:false,

    };
    setTodos([...todos,newTodo])
    reset();
    navigate('/alltodos')
  }

  return (
    <div className='createTodoContainer'>
      <div className='text-gray-400 text-2xl rounded-2xl pb-3 '><h2>CREATE YOUR TODO</h2></div>
      {/* my form */}
      <div className="form-container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <div className='form-group'>
              <label htmlFor="heading">Heading of your Todo</label>
              <input type="text"  {...register("heading",{required:{value:true,message:"This field is Mandatory"},minLength:{value:3,message:"Min len should be 3"}})}/>
            {errors.heading && <p className='text-red-800'>{errors.heading.message}</p> }      
          </div>

          <div className='form-group'>
              <label htmlFor="description">Description of your Todo</label>
              <textarea   {...register("description",{required:{value:true,message:"This field is Mandatory"},minLength:{value:3,message:"Min len should be 3"},rows:10,cols:50})}/>
               {errors.description && <p className='text-red-800'>{errors.description.message}</p> } 
          </div>

          <div className='form-group'>
              <label htmlFor="date">Due Date</label>
              <input type="date"  {...register("date",{required:{value:true,message:"This field is Mandatory"}})}/>
               {errors.date && <p className='text-red-800'>{errors.date.message}</p> } 
          </div>

          <button className='form-submit-btn' type='submit' disabled={isSubmitting}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
