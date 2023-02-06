import { HuddleClientProvider, getHuddleClient } from '@huddle01/huddle01-client';

const App = () => {
  const huddleClient = getHuddleClient('<Your-API-Key>')
  return (
    <HuddleClientProvider client = {huddleClient} >
      <YourApp>
        ...
      </YourApp>
    </HuddleClientProvider>
  );
};

huddleClient.join('roomId');
