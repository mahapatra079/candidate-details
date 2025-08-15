import Head from 'next/head'
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import UserID from './components/UserID';
import UserDetails from './components/UserDetails';
import UserContact from './components/UserContact';
import CandidateInfo from './components/CandidateInfo';
import SocialMedia from './components/SocialMedia';
import UserNotes from './components/UserNotes';
import UserDetailsInfo from './components/UserDetailsInfo';

export default function Home() {
  return (
    <>
      <Head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <title>Your App</title>
      </Head>
      <div className={''}> 
        <Header/>
        <SideNav/>  
      </div>   

  {/* Left Column */}

    <div className={'column'}>
        <div className={'left-col'}>
          <UserID/>
          <UserDetails/>
          <UserContact/>
          <CandidateInfo />
          <UserDetailsInfo/>
        </div>
        <div className={'right-col'}>
          <SocialMedia />
          <UserNotes/>
        </div>
      </div>
    </>
  );
}