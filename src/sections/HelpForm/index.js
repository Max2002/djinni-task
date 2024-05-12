import { useState } from "react";
import Title from "../../components/Title";
import FormData from "../FormData";
import TypeAssistance from "../../components/TypeAssistance";
import CardData from "../CardData";
import Card from "../../components/Card";
import {
  HandSvg,
  WalletSvg,
  ClothesSvg,
  HeartSvg,
  VisaSvg,
  TerminalSvg,
  WebMoneySvg,
  PayPalSvg,
  TriangleSvg
} from "../../assets/icons";
import './styles.css';

export default function HelpForm() {
  const [isPhysical, setIsPhysical] = useState(true);
  const [activeType, setActiveType] = useState("second");
  const [activeCard, setActiveCard] = useState("private");

  const objPositionTriangle = {
    first: "6%",
    second: "31%",
    three: "56%",
    four: "81%",
  };

  const handleSwitch = () => setIsPhysical(!isPhysical);

  return (
    <div className="wrapper">
      <Title>Заповніть форму</Title>
      <div className="switcher">
        <div className={isPhysical && "activeSwitch"} onClick={handleSwitch}>Фіз. особа</div>
        <div className={!isPhysical && "activeSwitch"} onClick={handleSwitch}>Юр. особа</div>
      </div>
      <FormData />
      <Title>Види допомоги</Title>
      <div className="subtitle">Ви можете змінити вид допомоги</div>
      <div className="switcherAssistance">
        <TypeAssistance
          icon={<HandSvg />}
          title='Зробити'
          isActive={activeType === 'first'}
          onClick={()=> setActiveType('first')} />
        <TypeAssistance
          icon={<WalletSvg />}
          title='Фінансова допомога'
          isActive={activeType === 'second'}
          onClick={()=> setActiveType('second')} />
        <TypeAssistance
          icon={<ClothesSvg />}
          title='Матеріальна допомога'
          isActive={activeType === 'three'}
          onClick={()=> setActiveType('three')} />
        <TypeAssistance
          icon={<HeartSvg />}
          title='Волонтерство'
          isActive={activeType === 'four'}
          onClick={()=> setActiveType('four')} />
      </div>
      <div className="wrapperPayment">
        <TriangleSvg className="triangle" style={{left: objPositionTriangle[activeType]}} />
        <div className="typeCards">
          <div className="titlePayment">Спосіб оплати</div>
          <div className="cards">
            <Card icon={<VisaSvg />} title="Карта Visa/MasteCard"
                  isActive={activeCard === 'visa'}
                  onClick={() => setActiveCard('visa')}
            />
            <Card icon={<div className="private">Приват24</div>} title="Приват24"
                  isActive={activeCard === 'private'}
                  onClick={() => setActiveCard('private')}
            />
            <Card icon={<TerminalSvg />} title="Термінали України"
                  isActive={activeCard === 'terminal'}
                  onClick={() => setActiveCard('terminal')}
            />
            <Card icon={<WebMoneySvg />} title="WebMoney"
                  isActive={activeCard === 'webMoney'}
                  onClick={() => setActiveCard('webMoney')}
            />
            <Card icon={<PayPalSvg />} title="PayPal"
                  isActive={activeCard === 'payPal'}
                  onClick={() => setActiveCard('payPal')}
            />
          </div>
        </div>
        <div className="formCard">
          <div className="titlePayment">Введіть наступні дані</div>
          <CardData />
        </div>
      </div>
      <button type="submit" className="btn_submit">Допомогти</button>
    </div>
  );
}