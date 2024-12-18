import { useDispatch, useSelector } from "react-redux"
import { ButtonWrap, Half, InfoIcon, InfoPart,  MoreInfoWrap,  OpenIcon,  SectionWrap,  Wrap } from "../styles/Menu/Menu.style"
import { useColors } from "../variables/Colors"
import { RootState } from "../store"
import lightMenu from '../assets/AboutMe/buttons/menu-light.png'
import darkMenu from '../assets/AboutMe/buttons/menu-dark.png'
import { setMenuState } from "../store/leftMenuReducer"
import info from '../assets/AboutMe/buttons/info.png'
import settings from '../assets/Header/drop down settings/settings.png'
import { useTranslation } from "react-i18next"
import InfoPartString from "../components/AboutMe/InfoPartString"
import { setMenuSelectedState } from "../store/menuSelectedReducer"
import { setMoreInfo } from "../store/modalReducer"
import Translate from "../components/Header/Translate"
import ThemeToggle from "../components/Header/ThemeToggle"


const Menu = () => {
    const { t } = useTranslation()
    const colors = useColors()
    const theme = useSelector((state: RootState) => state.theme.theme)
    const isOpen = useSelector((state: RootState) => state.menu.isOpen)
    const selected = useSelector((state: RootState) => state.menuSelected.selected)

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setMenuState(!isOpen))
        
    }

    const openIcon = theme == 'dark' ? darkMenu : lightMenu
    
  return (
    <Wrap colors={colors} isOpen={isOpen}>
      <Half>
        <SectionWrap isOpen={isOpen}>
          <ButtonWrap isOpen={isOpen} isMoreInfo={false} isInfo={true} onClick={() => selected == 1 ? dispatch(setMenuSelectedState(0)) : dispatch(setMenuSelectedState(1))} colors={colors}>
            <InfoIcon src={info}/>
          </ButtonWrap>
            <InfoPart isOpen={isOpen} colors={colors}>
              <InfoPartString title={t('AboutMe.titles.name')} text={t('AboutMe.content.name')}/>
              <InfoPartString title={t('AboutMe.titles.specialty')} text={t('AboutMe.content.specialty')}/>
              <InfoPartString title={t('AboutMe.titles.liveIn')} text={t('AboutMe.content.liveIn')}/>
              <InfoPartString title={t('AboutMe.titles.dateOfBirth')} text={t('AboutMe.content.dateOfBirth')}/>
              <MoreInfoWrap onClick={() => dispatch(setMoreInfo(true))} colors={colors}>
                More info
              </MoreInfoWrap>
              </InfoPart>
          </SectionWrap>
          
        </Half>
        <Half>
        <SectionWrap isOpen={isOpen}>
          <ButtonWrap isOpen={isOpen} isMoreInfo={false} isInfo={true} onClick={() => selected == 1 ? dispatch(setMenuSelectedState(0)) : dispatch(setMenuSelectedState(1))} colors={colors}>
            <InfoIcon src={settings}/>
          </ButtonWrap>
            <InfoPart isOpen={isOpen} colors={colors}>
              <Translate/>
              <ThemeToggle/>
              </InfoPart>
          </SectionWrap>
          <ButtonWrap isOpen={isOpen} isMoreInfo={false} isInfo={false} colors={colors} onClick={handleClick}>
            <OpenIcon isOpen={isOpen} src={openIcon}/>
          </ButtonWrap>
      </Half>
    </Wrap>
  )
}

export default Menu
