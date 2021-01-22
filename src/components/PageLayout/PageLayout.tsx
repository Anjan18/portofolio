import React, { ReactNode } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import useLargerThanMD from 'hooks/useLargerThanMD'

import BottomNavigation from 'components/Navigation/BottomNavigation'
import AppHeader from 'components/AppHeader/AppHeader'
import LayoutImage from 'components/PageLayout/LayoutImage'

interface Props {
	children?: ReactNode
}

const useStyles = makeStyles(theme => ({
	paperWrapper: {
		maxHeight: '100vh',
		maxWidth: '100vw',
		overflow: 'hidden',
	},
	background1: {
		width: '60vw',
		flex: '1 1 auto',
		overflowY: 'auto',
		height: '100%',
		'-ms-overflow-style': 'none',
		scrollbarWidth: 'none',

		'& ::-webkit-scrollbar': {
			display: 'none',
		},
	},
	background2: {
		width: '40vw',
		display: 'grid',
		alignItems: 'end',
		justifyItems: 'center',
	},
	contentContainerStyle: {
		maxWidth: '100vw',
		position: 'relative',
		flex: '1 1 auto',
		height: '0%',
	},
	wholeGridContainer: {
		height: '100vh',
		flexDirection: 'column',
		maxWidth: '100vw',
	},
}))

const PageLayout = ({ children }: Props) => {
	const {
		background1,
		background2,
		contentContainerStyle,
		paperWrapper,
		wholeGridContainer,
	} = useStyles()

	const largerThanMD = useLargerThanMD()

	return (
		<>
			<Paper className={paperWrapper}>
				<Grid container className={wholeGridContainer}>
					<Grid item>
						<AppHeader />
					</Grid>

					<Grid item container className={contentContainerStyle}>
						<Grid item className={background1}>
							{children}
						</Grid>
						{largerThanMD && (
							<Grid item className={background2}>
								<LayoutImage />
							</Grid>
						)}
					</Grid>

					{largerThanMD && (
						<Grid item>
							<BottomNavigation />
						</Grid>
					)}
				</Grid>
			</Paper>
		</>
	)
}

export default PageLayout
