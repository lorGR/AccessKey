import { ReactComponent as AccessKeyLogo } from "./assets/svgs/AccessKeyLogo.svg";
import { ReactComponent as HelpIcon } from "./assets/svgs/HelpIcon.svg";
import { ReactComponent as ContactIcon } from "./assets/svgs/ContactIcon.svg";
import { ReactComponent as ProfileDownArrowIcon } from "./assets/svgs/ProfileDownArrowIcon.svg";

const Navbar = () => {
    return (
        <nav>
            <div className="information">
                <AccessKeyLogo />
                <HelpIcon />
                <ContactIcon />
            </div>
            <div className="user-informartion">
                <div className="user-information__profile-picture">
                    
                </div>
                <p className="user-infomation__username">Yan Levi</p>
                <ProfileDownArrowIcon />
            </div>
        </nav>
    );
}

export default Navbar;
