import Home from '../PortfolioConteiner/Home/Home';
import AboutMe from '../PortfolioConteiner/AboutMe/AboutMe';


export const TOTAL_SCREENS = [
    {
        screen_name: 'Home',
        component: Home
    },
    {
        screen_name: 'AboutMe',
        component: AboutMe
    }


]

export const GET_SCREEN_INDEX = (screen_name:any) => {
    if(!screen_name) return -1
    for (let i= 0; i <TOTAL_SCREENS.length; i++) {
        if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
    return -1
}