import sprite from '../../Pictures/sprite.svg';
import StarApp from '../StarRating/StarApp';
import {Feedbackcontainer, Ratingwrapper, Ratingtitle, FormFeedback, StyledFeedbackToolbar} from './FeedbackModal.styled'




const FeedbackModal = () => {

    const isActiv = true;

  return (

    <Feedbackcontainer>
       <Ratingwrapper>
        <Ratingtitle>
        Rating
        </Ratingtitle>
        <div className='stars'>
       <StarApp/>
        </div>
     </Ratingwrapper> 
     < FormFeedback>
     <div className="toolbar">
        <div>
     <p className='head'>
    Review
    </p>
    </div>
    { isActiv &&
    <StyledFeedbackToolbar>
       <div className="controlsWrapper">
          <button className='btnEdit'aria-label="edit feedback" type="button">
          <svg>
            <use href={sprite + '#icon-pencil'}></use>
          </svg>
        </button>
        <button className='btnDel' aria-label="delete feedback" type="button">
          <svg>
            <use href={sprite + '#icon-trash'}></use>
          </svg>
        </button>
      </div>
       </StyledFeedbackToolbar>}
</div>
  <textarea name='user_message' placeholder='Enter text' className='text_content'>
    </textarea>
    { isActiv &&
    <div className='buttonfoot'>
<button type="submit" className='btn-sumbit save'>
Save
</button>
<button type="button" className='btn-sumbit cencel'>
Cancel
</button>
</div> }
</FormFeedback>
    </Feedbackcontainer>

  
    

  
    
)

  }


export default FeedbackModal;