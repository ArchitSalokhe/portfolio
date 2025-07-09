import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faAddressCard } from "@fortawesome/free-regular-svg-icons";
import "./sample.css";

const Sociallinks = () => {
	
	return (
		<div className="w-full h-auto   ">
			
			<div class="wrapper pt-10 ">
				<div class="button">
				    <a href="https://github.com/ArchitSalokhe">
					<div class="icon">
						<i>
							<FontAwesomeIcon icon={faGithub} />
						</i>
					</div>
					{/* <a href="https://github.com/ArchitSalokhe"> */}
					<span  id="2">GitHub</span></a>
				</div>
				<div class="button">
					<a href="https://www.linkedin.com/in/archit-salokhe-97533a246/">
					<div class="icon">
						<i>
							<FontAwesomeIcon icon={faLinkedin} />
						</i>
					</div>
					
					<span>Linkedin</span></a>
				</div>
				<div class="button">
					<a href="mailto:archit.salokhe@gmail.com" target="_blank">
					<div class="icon">
						<i>
							<FontAwesomeIcon icon={faEnvelope} />
						</i>
					</div>
					<span>Mail</span></a>
				</div>
				<div class="button">
					<a href="/Archit_Salokhe Resume.pdf" download={true}>	
					<div class="icon">
						<i>
							<FontAwesomeIcon icon={faAddressCard} />
						</i>
					</div>
					
					<span>Resume</span></a>
				</div>
				<div class="button">
				<a href="https://www.instagram.com/archit_salokhe/">

					<div class="icon">
						<i>
							<FontAwesomeIcon icon={faInstagram} />
						</i>
					</div>
					<span>Instagram</span></a>
				</div>
			</div>

		</div>
	);
};

export default Sociallinks;



