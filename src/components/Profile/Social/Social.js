import React from 'react';
import './Social.scss';
import IcTwitter from '../../../images/icons/twitter.svg';
import IcFacebook from '../../../images/icons/facebook.svg';
import IcWeb from '../../../images/icons/web.svg';
import IcInstagram from '../../../images/icons/instagram.svg';
import IcLinkedin from '../../../images/icons/linkedin.svg';

export default function Social() {

    const SocialMedia = [
        {
            icon: <IcTwitter />,
            link: "https://twitter.com/luis171089"
        },
        {
            icon: <IcFacebook />,
            link: "https://www.facebook.com/luisjjberistain"
        },
        {
            icon: <IcWeb />,
            link: "https://twitter.com"
        },
        {
            icon: <IcInstagram />,
            link: "https://www.instagram.com/luis171089/?hl=es-la"
        },
        {
            icon: <IcLinkedin />,
            link: "https://www.linkedin.com/in/luis-javier-jimenez-beristain-251542169/"
        }
    ]

    return (
        <div className="social">
            {SocialMedia.map((social, index) => (
                <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    {social.icon}
                </a>

            ))}
        </div>
    )
}
