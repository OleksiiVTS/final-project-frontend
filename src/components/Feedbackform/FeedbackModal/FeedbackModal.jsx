import sprite from '../../Pictures/sprite.svg';
import StarApp from '../StarRating/StarApp';
import {Feedbackcontainer, Ratingwrapper, Ratingtitle, FormFeedback, StyledFeedbackToolbar} from './FeedbackModal.styled'


const FeedbackModal = () => {

const isActiv = true;
const isEdit = true;

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
     <span className='head'>
    Review
    </span>
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
            <use href={sprite + '#icon-trash-review'}></use>
          </svg>
        </button>
      </div>
       </StyledFeedbackToolbar>}
</div>
  <textarea name='user_message' placeholder='Enter text' className='text_content'>
    </textarea>
    { isActiv &&
    <div className='buttonfoot'>
<button type="submit" className='btn-foot'>
{ isEdit ? 'Save': 'Edit'}
</button>
<button type="cencel" className='btn-foot'>
Cancel
</button>
</div> }
</FormFeedback>
</Feedbackcontainer>

  

  
    
)

  }


export default FeedbackModal;