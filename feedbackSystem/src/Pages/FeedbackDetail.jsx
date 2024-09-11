import { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import { useParams } from 'react-router-dom';

const FeedbackDetail = () => {
  const { forms } = useContext(FormContext);
  const { id } = useParams();
  const form = forms.find((f) => f.id.toString() === id);

  return (
    <div className='feedback-detail'>
      <h2>{form.title}</h2>
      <p>{form.description}</p>
      {/* Display form fields and submissions */}
    </div>
  );
};

export default FeedbackDetail;
