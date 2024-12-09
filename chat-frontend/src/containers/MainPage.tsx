import Messages from '../features/messages/Messages.tsx';
import NewMessage from '../features/messages/containers/NewMessage.tsx';

const MainPage = () => {
  return (
    <div>
      <NewMessage/>
      <Messages/>
    </div>
  );
};

export default MainPage;