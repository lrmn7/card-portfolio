import * as React from 'react'
import {
	Box,
	Text,
	Heading,
	Flex,
	Avatar,
	Link,
	VStack,
	IconButton,
	Divider,
	Fade,
} from '@chakra-ui/react'
import siteConfig from '../configs/site-config'
import { motion } from 'framer-motion'

const iconProps = {
	variant: 'ghost',
	size: 'lg',
	isRound: true,
}

const MainScreen = () => {
	return (
		<VStack spacing={5}>
			<motion.div whileHover={{ y: -5, scale: 1.1 }}>
				<Box boxShadow={'xl'} _hover={{ boxShadow: 'lg' }} borderRadius='full'>
					<Avatar
						_groupHover={{ width: '5rem', height: '5rem' }}
						size={'xl'}
						src={'https://avatars.githubusercontent.com/u/97253349?v=4'}
					/>
				</Box>
			</motion.div>
			<Heading
				fontSize={'xl'}
				fontFamily={'body'}
				textTransform='capitalize'
				noOfLines={2}
			>
				Taing Menghai
			</Heading>
			<Text
				color={'gray.500'}
				fontSize='lg'
				noOfLines={{ base: 3, md: 4 }}
				_groupHover={{ display: 'none' }}
				display='block'
			>
				CS Student
			</Text>
			<Fade in>
				<Text
					color={'gray.500'}
					fontSize='lg'
					noOfLines={{ base: 3, md: 4 }}
					_groupHover={{ display: 'block' }}
					display='none'
				>
					Hi, My name is L RMN. A software <i>edgy</i>neer who love cats. Love to explore anything about technology, but focused more on web technologies.
				</Text>
			</Fade>
			<Divider />
			<Flex alignItems='center' justify='center' w='100%'>
				<Box textAlign='center'>
					{siteConfig.author.accounts.map((sc, index) => (
						<IconButton
							key={index}
							as={Link}
							isExternal
							href={sc.url}
							aria-label={sc.label}
							size='lg'
							colorScheme={sc.type}
							icon={sc.icon}
							{...iconProps}
						/>
					))}
				</Box>
			</Flex>
		</VStack>
	)
}

export default MainScreen
