import { ButtonsPart, Content, InfoPart, MainImg, MainImgWrap, Wrap } from "../styles/AboutMe.style"
import mainImg from "../assets/AboutMe/bat.png"
import discord from "../assets/AboutMe/buttons/discord.png"
import vk from "../assets/AboutMe/buttons/vk.png"
import telegram from "../assets/AboutMe/buttons/telegram.png"
import github from "../assets/AboutMe/buttons/github.png"
import InfoString from "../components/AboutMe/InfoString"
import Socials from "../components/AboutMe/Socials"
import LetsWorkButton from "../components/AboutMe/LetsWorkButton"
import { useColors } from "../variables/Colors"

const AboutMe = () => {
  const colors = useColors()
  return (
    <Wrap colors={colors}>
      <Content>
        <InfoPart>
        <MainImgWrap>
          <MainImg src={mainImg}/>
        </MainImgWrap>
          <InfoString title="name" text="Nazdar Bolloev"/>
          <InfoString title="specialty" text="React developer"/>
          <InfoString title="date of birth" text="16.11.2004"/>
          <InfoString title="live in" text="Tula, Russia"/>
          <Socials title="socials" image={[github, vk, discord, telegram]}/>
        </InfoPart>
        <ButtonsPart>
          <LetsWorkButton text="Let's work together"/>
        </ButtonsPart>
        </Content>
    </Wrap>
  )
}

export default AboutMe
