import React ,{useState,useCallback, useMemo}from 'react'
import {motion as Motion, useReducedMotion} from 'framer-motion'
import { icons } from '../../utils/icons'
import {contactData,budgets,topics} from '../../utils/contactPage'
import styles from './ContactPage.module.scss'

const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_MESSAGE = 1000

const ContactPage = () => {

    const IconMain=icons.mail
    const IconCopy =icons.copy
    const IconExternal = icons.external
    const IconGithub = icons.github
    const IconLinkedIn = icons.linkedIn
    const IconSend = icons.send
    const IconCheck = icons.check
    const IconBriefcase = icons.briefcase
    const IconLaptop = icons.laptop
    const IconGlobe = icons.globe
    
    
const contactCards = [
    {
      key: 'email',
      icon: IconMail,
      label: 'Email',
      value: contactData.email,
      action: 'copy',
    },
    {
      key: 'linkedin',
      icon: IconLinkedIn,
      label: 'LinkedIn',
      value: contactData.linkedinLabel,
      href: contactData.linkedin,
    },
    {
      key: 'github',
      icon: IconGithub,
      label: 'GitHub',
      value: contactData.githubLabel,
      href: contactData.github,
    },
  ]
 

  return (
    <div>ContactPage</div>
  )
}

export default ContactPage