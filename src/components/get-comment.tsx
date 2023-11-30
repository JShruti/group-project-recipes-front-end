import { useEffect, useState } from 'react';

interface Comment {
  id: number;
  recipeId: number;
  rating: number;
  name: String;
  message: String;
  created_at: String;
}

interface GetCommentsArgs {
  recipeID: string;
}

const GetComments = ({ recipeID }: GetCommentsArgs) => {
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          'http://127.0.0.1:3002/comment/' + recipeID
        );
        if (!response.ok) {
          throw new Error('Recipe not found');
        }
        const commentData = await response.json();

        if (!Array.isArray(commentData)) {
          throw new Error('Invalid response format');
        }

        setComments(commentData);
        console.log(commentData);
        setComments(commentData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
  }, [recipeID]);

  return (
    <div>
      <h2>Comments</h2>
      <section>
        {comments.toReversed().map((acomment: Comment) => {
          return (
            <div
              className="comment-wrapper"
              key={acomment.id}
            >
              <p>Name: {acomment.name}</p>
              <p>Date: {acomment.created_at}</p>
              <p> Message: {acomment.message}</p>
              <p>Rating: {acomment.rating}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default GetComments;
