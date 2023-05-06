import React from 'react'
import fb_logo from '../../assets/Perfil/facebook.png'
import twitter_logo from '../../assets/Perfil/twitter.png'
import ig_logo from '../../assets/Perfil/instagram.png'
import linkedin_logo from '../../assets/Perfil/linkedin.png'
import github_logo from '../../assets/Perfil/github.png'
import web_logo from '../../assets/Perfil/web.png'
import whatsapp_logo from '../../assets/Perfil/whatsapp.png'

const SocialIcons = () => {
    const redes = {
        "instagram": ig_logo,
        "twitter": twitter_logo,
        "facebook": fb_logo,
        "linkedin": linkedin_logo,
        "github": github_logo,
        "web": web_logo,
        "whatsapp": whatsapp_logo
      }
  return {
    redes
  }
}
export default SocialIcons
