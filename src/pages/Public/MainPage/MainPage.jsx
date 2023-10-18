

import AuthSection from "components/AuthSection/AuthSection";
import Description from "components/Description/Description";
import Slider from "components/Slider/Slider";
import RaitingStars from "components/RaitingStars/RaitingStars";
import { MainPageContainer, MainPageWrapper } from "./MainPage.styled";

const MainPage = () => {
    return (
        <>
        <AuthSection/>
        <MainPageWrapper>
            <MainPageContainer>
                <Description />
                    <Slider />
                    <RaitingStars />
            </MainPageContainer>
        </MainPageWrapper>
        
        </>
        
    )
}

export default MainPage;

