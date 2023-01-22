import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUser";
// import { comments } from "../../models";
// import { data } from "jquery";


const ShowComments = () => {


    // const { currentUser } = useContext(CurrentUserContext);

    // let deleteButton = null;

    // const loggedInDetails = currentUser ? (
    //     <>
    //     {comment}
    //     </>
    //     ) : (
    //     <>
    //     <h3>No comments yet!</h3>
    //     </>    
    //     )
    

    // if (currentUser?user._id === comment.authorId) {
    //     deleteButton = (
    //         <button className="btn btn-danger" onClick={onDelete} >
    //             Delete Comment
    //         </button>
    //     )
    // } 
    // let comments = (
    //     <h3 className="inactive">
    //         No comments yet!
    //     </h3>
    // )

    // if (data.blogs.comments.length) {
    //     comments = data.blogs.comments.map (c => {
    //         return (
    //             <h4>{comments}</h4>
    //         )
    //     })}
    
    return ( 
        <div>
            {/* {comment}
            {/* <h4>{comment.content}</h4> */}
            {/* {deleteButton} */}
        </div> 
    )
 }

export default ShowComments;