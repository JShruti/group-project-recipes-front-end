import { FormEvent } from 'react';

interface AddCommentsArgs {
  recipeID: string;
}

const AddComments = ({ recipeID }: AddCommentsArgs) => {
  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //console.log(event);
    const nameFromForm = event.currentTarget.nameField.value;
    const messageFromForm = event.currentTarget.message.value;
    const ratingFromForm = event.currentTarget.rating.value;

    const postResponse = await fetch('http://127.0.0.1:3002/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recipeId: parseInt(recipeID),
        name: nameFromForm,
        message: messageFromForm,
        rating: parseInt(ratingFromForm),
        created_at: new Date().toISOString(),
      }),
    });
    const postData = await postResponse.json();
  };
  return (
    <div>
      <h2>Add a Comment</h2>

      <form
        className="my-comment"
        onSubmit={handleForm}
      >
        <label htmlFor="nameField">name</label>
        <input
          id="nameField"
          type="text"
        ></input>
        <label htmlFor="message">Review</label>
        <input
          id="message"
          type="text"
        ></input>
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          type="number"
        ></input>
        <button>Save</button>
      </form>
    </div>
  );
};
export default AddComments;
