import axios from "axios";
import { useState } from "react";

function CreateContext() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState()
  const [date, setDate] = useState("")
  const [completed, setCompleted] = useState(false)
  const [important, setImportant] = useState(false)

  const handleChange = (name: string) => (e: any) => {
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "important":
        setImportant(e.target.checked);
        break;
      default:
        break;
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const tasks = {
      title,
      description,
      date,
      completed,
      important
    }

    try {
      const response = await axios.post("api/tasks", tasks)
    } catch (error) {

    }


  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Tasks</h1>
      <div className="form-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleChange("title")}
          placeholder="enter something"
        />
      </div>
      <div className="form-control">
        <label htmlFor="description">Description</label>
        <textarea
          rows={4}
          name="description"
          id="description"
          value={description}
          onChange={handleChange("description")}
          placeholder="enter something"
        ></textarea>
      </div>
      <div className="form-control">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={handleChange("date")}
          placeholder="enter something"
        />
      </div>
      <div className="form-control">
        <label htmlFor="completed">Toogle Completed</label>
        <input
          type="checkbox"
          name="completed"
          id="completed"
          value={completed.toString()}
          onChange={handleChange("completed")}
          placeholder="enter something"
        />
      </div>
      <div className="form-control">
        <label htmlFor="important">Toogle Important</label>
        <input
          type="checkbox"
          name="important"
          id="important"
          value={important.toString()}
          onChange={handleChange("important")}
          placeholder="enter something"
        />
      </div>
      <div className="submit-button">
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  )
}

export default CreateContext