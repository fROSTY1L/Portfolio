import { ButtonsPart, Content, InfoPart, MainImg, MainImgWrap, Wrap } from "../styles/AboutMe.style"
import mainImg from "../assets/AboutMe/Person=Mattew, Skin Tone=White, Posture=27 Sh!.png"
import InfoString from "../components/AboutMe/InfoString"
import Socials from "../components/AboutMe/Socials"
import LetsWorkButton from "../components/AboutMe/LetsWorkButton"
import { useColors } from "../variables/Colors"
import { useTranslation } from "react-i18next"

const AboutMe = () => {
  const colors = useColors()

  const { t } = useTranslation();
  
  return (
    <Wrap colors={colors}>
      <Content>
        <InfoPart>
        <MainImgWrap>
          <MainImg src={mainImg}/>
        </MainImgWrap>
          <InfoString title={t('AboutMe.titles.name')} text={t('AboutMe.content.name')}/>
          <InfoString title={t('AboutMe.titles.specialty')} text={t('AboutMe.content.specialty')}/>
          <InfoString title={t('AboutMe.titles.dateOfBirth')} text={t('AboutMe.content.dateOfBirth')}/>
          <InfoString title={t('AboutMe.titles.liveIn')} text={t('AboutMe.content.liveIn')}/>
          <Socials />
        </InfoPart>
        <ButtonsPart>
          <LetsWorkButton text={t('AboutMe.mainButton')}/>
        </ButtonsPart>
        </Content>
    </Wrap>
  )
}

export default AboutMe
