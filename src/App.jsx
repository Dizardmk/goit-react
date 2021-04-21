import Container from './components/Container/Container';
// SocialProfile
import SocialProfile from './components/SocialProfile/SocialProfile';
import user from './json/user.json';
// Statistics
import Statistics from './components/Statistics/Statistics';
import statisticalData from './json/statistical-data.json';
// FriendList
import FriendList from './components/FriendList/FriendList';
import friends from './json/friends.json';
// TransactionHistory
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './json/transactions.json';

const App = () => (
  <Container>
    {/*  */}
    <SocialProfile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    {/*  */}
    <Statistics title="Upload Stats" stats={statisticalData} />
    {/*  */}
    <FriendList friends={friends} />
    {/*  */}
    <TransactionHistory transactions={transactions} />
    {/*  */}
  </Container>
);

export default App;
