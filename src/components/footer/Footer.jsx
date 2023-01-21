import React from 'react';
import '../footer/Footer.css'
import AdbIcon from '@mui/icons-material/Adb';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';




const Footer = () => {
	return (
		
		<div className='footer'>

<div className='footer-h2'>
				<BoltOutlinedIcon/>
				<h2>NurExpress</h2>
				</div>
				<div className="footer-links">
					<div >
						<ul>
							<li className='main-li'><a href="">Main</a></li>
							<li><a href="/games">Library</a></li>
							<li><a href="/list">Products</a></li>
							<li><a href="/about">About Us</a></li>
						</ul>
					</div>
					<div>
						<ul>
							
						<li className='main-li'><a href="">Support</a></li>
							<li><a href="">Contacts</a></li>
							<li><a href="">Tech-Support</a></li>
							<li><a href="">Reports</a></li>
						</ul>
					</div>
					<div>
						<ul>
							
						<li className='main-li'><a href="">Social Medias</a></li>
							<li><a href=""><InstagramIcon/>Instagram</a></li>
							<li><a href=""><TwitterIcon/>Twitter</a></li>
							<li><a href=""><TelegramIcon/>Telegram</a></li>
						</ul>
					</div>
				</div>
				</div>

	
	
	);
};

export default Footer;