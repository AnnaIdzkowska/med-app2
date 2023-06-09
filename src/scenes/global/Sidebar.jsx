import { useState } from "react";
import  {ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { ReactComponent as HeartIcon } from "../../assets/icons88.svg";

const Item = ({title, to, icon, selected, setSelected}) => {
const theme = useTheme();
const colors = tokens(theme.palette.mode);
return (
	<MenuItem active={selected === title} style={{color: colors.grey[100]}} onClick={()=>setSelected(title)} icon={icon}>
	<Typography>{title}</Typography>
	<Link to={to}/>
	</MenuItem>
)
}

const Sidebar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, setSelected] = useState("Dashboard");

	return (
		<Box
			sx={{
				"& .pro-sidebar-inner": {
					background: `${colors.primary[400]} !important`,
				},
				"& .pro-icon-wrapper": {
					backgroundColor: "transparent !important",
				},
				"& .pro-inner-item": {
					padding: "5px 35px 5px 20px !important",
				},
				"& .pro-inner-item:hover": {
					color: `${colors.primary[100]} !important`,
				},
				"& .pro-menu-item.active": {
					color: `${colors.primary[200]} !important`,
				},
			}}>
			<ProSidebar collapsed={isCollapsed}>
				<Menu iconShape='square'>
					{/* LOGO AND MENU ICON */}
					<MenuItem
						onClick={() => setIsCollapsed(!isCollapsed)}
						icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
						style={{
							margin: "10px 0 20px 0",
							color: colors.grey[100],
						}}>
						{!isCollapsed && (
							<Box
								display='flex'
								justifyContent='space-between'
								alignItems='center'
								ml='15px'>
								<Typography
									variant='h3'
									color={colors.grey[100]}>
									ADMINISTRACJA
								</Typography>
								<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
									<MenuOutlinedIcon />
								</IconButton>
							</Box>
						)}
					</MenuItem>
					{/* USER */}
					{!isCollapsed && (
						<Box mb='25px'>
							<Box
								display='flex'
								justifyContent='center'
								alignItems='center'>
								<HeartIcon
									alt='profile-user'
									width='100px'
									height='100px'
									style={{ fill: colors.grey[100] }}
								/>
							</Box>
							<Box textAlign='center'>
								<Typography
									variant='h2'
									color={colors.grey[100]}
									fontWeight='bold'
									sx={{ m: "10px 0 0 0" }}>
									Ośrodek medyczny
								</Typography>
								<Typography
									variant='h3'
									color={colors.redAccent[500]}>
									GOOD-MED
								</Typography>
							</Box>
						</Box>
					)}

					{/* MENU ITEMS */}
					<Box paddingLeft={isCollapsed ? undefined : "10%"}>
						<Item
							title='PODSUMOWANIE'
							to='/'
							icon={<HomeOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title='Wykres pacjentów'
							to='/patientsChart'
							icon={<BarChartOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title='Wykres projektów'
							to='/projectsChart'
							icon={<BarChartOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title='Wykres badań'
							to='/researchChart'
							icon={<PieChartOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Typography
							variant='h6'
							color={colors.grey[300]}
							sx={{ m: "15px 0 5px 20px" }}>
							Pacjenci
						</Typography>
						<Item
							title='PACJENCI'
							to='/patient'
							icon={<PeopleOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title='PACJENCI - PROJEKTY'
							to='/connections'
							icon={<ContactsOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>

						<Typography
							variant='h6'
							color={colors.grey[300]}
							sx={{ m: "15px 0 5px 20px" }}>
							Projekty
						</Typography>
						<Item
							title='PROJEKTY'
							to='/projects'
							icon={<ReceiptOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>

						<Typography
							variant='h6'
							color={colors.grey[300]}
							sx={{ m: "15px 0 5px 20px" }}>
							Badania
						</Typography>
						<Item
							title='ZLECENIA BADAŃ'
							to='/orders'
							icon={<CalendarTodayOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title='WYNIKI BADAŃ'
							to='/results'
							icon={<HelpOutlineOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
					</Box>
				</Menu>
			</ProSidebar>
		</Box>
	);
};

export default Sidebar;
