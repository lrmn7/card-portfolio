import React from 'react'
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
const siteConfig = {
	copyright: `Copyright © ${new Date().getFullYear()} Taing Menghai. All Rights Reserved.`,
	author: {
		name: 'Taing Menghai',
		accounts: [
			{
				url: 'https://github.com/LRMN7',
				label: 'Github Account',
				type: 'gray',
				icon: <FaGithub />,
			},
			{
				url: 'https://www.instagram.com/romanroman.nya',
				label: 'Instagram Account',
				type: 'Instagram',
				icon: <FaInstagram />,
			},
			{
				url: 'mailto:619cogitoergosum@gmail.com',
				label: 'Menghai',
				type: 'red',
				icon: <FiMail />,
			},
			{
				url: 'https://www.twitter.com/romanromannya',
				label: 'Twitter Account',
				type: 'twitter',
				icon: <FaTwitter />,
			},
		],
	},
}

export default siteConfig
