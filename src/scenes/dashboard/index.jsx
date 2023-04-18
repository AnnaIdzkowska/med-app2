import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Header from "../../components/Header";
import ProjectsChart from "../../components/ProjectsChart";
import PatientsChart from "../../components/PatientsChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m='20px'>
			{/* HEADER */}
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='center'>
				<Header title='STATYSTYKI' />

				<Box>
					<Button
						sx={{
							backgroundColor: colors.redAccent[600],
							color: colors.grey[100],
							fontSize: "14px",
							fontWeight: "bold",
							padding: "10px 20px",
						}}>
						<DownloadOutlinedIcon sx={{ mr: "10px" }} />
						Download Reports
					</Button>
				</Box>
			</Box>

			{/* GRID & CHARTS */}
			<Box
				display='grid'
				gridTemplateColumns='repeat(12, 1fr)'
				gridAutoRows='140px'
				gap='20px'>
				{/* ROW 1 */}
				<Box
					gridColumn='span 3'
					backgroundColor={colors.primary[400]}
					display='flex'
					alignItems='center'
					justifyContent='center'>
					<StatBox
						title='361'
						subtitle='wybitnych specjalistów'
						progress='0.75'
						increase='+84%'
						icon={
							<MedicalServicesIcon
								sx={{ color: colors.blueAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn='span 3'
					backgroundColor={colors.primary[400]}
					display='flex'
					alignItems='center'
					justifyContent='center'>
					<StatBox
						title='1,225'
						subtitle='Zrobionych badań'
						progress='0.50'
						increase='+71%'
						icon={
							<MonitorHeartIcon
								sx={{ color: colors.blueAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn='span 3'
					backgroundColor={colors.primary[400]}
					display='flex'
					alignItems='center'
					justifyContent='center'>
					<StatBox
						title='1,441'
						subtitle='Nowych pacjentów'
						progress='0.30'
						increase='+5%'
						icon={
							<PersonAddIcon
								sx={{ color: colors.blueAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn='span 3'
					backgroundColor={colors.primary[400]}
					display='flex'
					alignItems='center'
					justifyContent='center'>
					<StatBox
						title='1,130'
						subtitle='Pozytywnych opinii'
						progress='0.80'
						increase='+83%'
						icon={
							<ThumbUpIcon
								sx={{ color: colors.blueAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>

				{/* ROW 2 */}
				<Box
					gridColumn='span 8'
					gridRow='span 2'
					backgroundColor={colors.primary[400]}>
					<Box
						mt='25px'
						p='0 30px'
						display='flex '
						justifyContent='space-between'
						alignItems='center'>
						<Box>
							<Typography
								variant='h5'
								fontWeight='600'
								color={colors.grey[100]}>
								Ilość projektów
							</Typography>
							<Typography
								variant='h3'
								fontWeight='bold'
								color={colors.blueAccent[500]}>
								na tle ubiegłych lat
							</Typography>
						</Box>
						<Box>
							<IconButton>
								<DownloadOutlinedIcon
									sx={{ fontSize: "26px", color: colors.blueAccent[500] }}
								/>
							</IconButton>
						</Box>
					</Box>
					<Box
						height='250px'
						m='-20px 0 0 0'>
						<ProjectsChart isDashboard={true} />
					</Box>
				</Box>

				{/* ROW 3 */}
				<Box
					gridColumn='span 4'
					gridRow='span 2'
					backgroundColor={colors.primary[400]}
					p='30px'>
					<Typography
						variant='h5'
						fontWeight='600'>
						Rozwój
					</Typography>
					<Box
						display='flex'
						flexDirection='column'
						alignItems='center'
						mt='25px'>
						<ProgressCircle size='125' />
						<Typography
							variant='h5'
							sx={{ mt: "15px" }}>
							PLN 500 000,00 usyskanego dofinansowania
						</Typography>
						<Typography color={colors.grey[300]}>
							na wsparcie kolejnych projektów
						</Typography>
					</Box>
				</Box>
				<Box
					gridColumn='span 6'
					gridRow='span 2'
					backgroundColor={colors.primary[400]}>
					<Typography
						variant='h5'
						fontWeight='600'
						sx={{ padding: "50px 30px 0 30px" }}>
						Ilość pacjentów
					</Typography>
					<Box
						height='250px'
						mt='-20px'>
						<PatientsChart isDashboard={true} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Dashboard;
