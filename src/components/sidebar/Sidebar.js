// icons from MUI
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PermPhoneMsgRoundedIcon from '@mui/icons-material/PermPhoneMsgRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

// social icons from MUI
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

import './Sidebar.css';
import { IconButton } from '@mui/material';

const Sidebar = () => {
	return (
		<aside className="sidebar">
			<div className="sideTop">
				<span className="topBanner">
					<span className="appIcon">T</span> <h5>Name</h5>
				</span>
				<hr className="line" />
			</div>

			<ul className="pageLinks">
				<li className="active">
					<IconButton className="iconBtn sideIcon ">
						<HomeRoundedIcon />
					</IconButton>
					<p>Home</p>
				</li>
				<li>
					<IconButton className="iconBtn sideIcon">
						<AccountCircleIcon />
					</IconButton>
					<p>About</p>
				</li>
				<li>
					<IconButton className="iconBtn sideIcon">
						<IntegrationInstructionsIcon />
					</IconButton>
					<p>Projects</p>
				</li>
				<li>
					<IconButton className="iconBtn sideIcon">
						<SchoolIcon />
					</IconButton>
					<p>Skills</p>
				</li>
				<li>
					<IconButton className="iconBtn sideIcon">
						<PermPhoneMsgRoundedIcon />
					</IconButton>
					<p>Contacts</p>
				</li>
			</ul>

			{/* <ul className="otherLinks">extra links</ul> */}

			<div className="sideBottom">
				<hr className="line" />
				<span className="endBanner">
					<IconButton className="socialIcon sideIcon">
						<EmailIcon />
					</IconButton>

					<IconButton className="socialIcon sideIcon">
						<LinkedInIcon />
					</IconButton>

					<IconButton className="socialIcon sideIcon">
						<GitHubIcon />
					</IconButton>

					<IconButton className="socialIcon sideIcon">
						<XIcon />
					</IconButton>
				</span>
			</div>
		</aside>
	);
};

export default Sidebar;
