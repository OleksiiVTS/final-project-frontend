import AuthSection from 'components/AuthSection/AuthSection';
import Description from 'components/Description/Description';
import Slider from 'components/Slider/Slider';
import Footer from 'components/footer/Footer';
import { MainPageContainer, MainPageWrapper } from './MainPage.styled';
const MainPage = () => {
  return (
    <>
      <AuthSection />
      <MainPageWrapper>
        <MainPageContainer>
          <Description />
          {/* <Slider /> */}
          <Footer />
        </MainPageContainer>
      </MainPageWrapper>
    </>
  );
};

export default MainPage;
