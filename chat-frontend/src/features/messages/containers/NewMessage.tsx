import Form from '../../../components/Form/Form.tsx';
import { ChatMessageMutation } from '../../../types';
import { useAppDispatch } from '../../../app/hooks.ts';
import { addMessagesThunk, fetchMessagesThunk } from '../messagesThunk.ts';

const NewMessage = () => {
  const dispatch = useAppDispatch();

  const onSubmit = async (message: ChatMessageMutation) => {
    await dispatch(addMessagesThunk(message));
    await dispatch(fetchMessagesThunk());
  }

  return (
    <>
      <Form onSubmit={onSubmit}/>
    </>
  );
};

export default NewMessage;