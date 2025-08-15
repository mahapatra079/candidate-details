import BrandLogoSection from "./BrandLogoSection";
import Search from "./Search";
import UserAction from "./UserAction";
import UserProfile from "./UserProfile";

const CRMInterface = () => {

  return (

      <header className="header">
        <Search/>       
        <BrandLogoSection />
        <div className="header-actions">
          <UserAction/>
          <UserProfile />
        </div>
      </header>
  );
};

export default CRMInterface;