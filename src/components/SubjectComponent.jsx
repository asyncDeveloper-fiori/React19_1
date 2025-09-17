import { useContext } from 'react';
import { SubjectContext } from './ContextData';

const SubjectComponent = () => {
  const subject = useContext(SubjectContext);
  return (
    <>
      <h2>{subject}</h2>
    </>
  );
};

export default SubjectComponent;
