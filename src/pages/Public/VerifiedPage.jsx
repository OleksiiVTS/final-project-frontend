import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVerifiedUser } from 'redux/auth/authOperations';

const VerifiedPage = () => {
  const { token } = useParams();
  const dispatch = useDispatch();

  dispatch(getVerifiedUser(token));

  return null;
};

export default VerifiedPage;
