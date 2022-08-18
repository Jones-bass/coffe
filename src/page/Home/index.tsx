import {
  TextHome,
  MenuConatainer,
  ItensHome,
  LogoHome,
  HomeContainer,
} from './styles'
import img from '../../assets/Imagem.png'
import icon1 from '../../assets/Icon1.png'
import icon2 from '../../assets/Icon2.png'
import icon3 from '../../assets/Icon3.png'
import icon4 from '../../assets/Icon4.png'

export function Home() {
  return (
    <HomeContainer>
      <TextHome>
        Encontre o café perfeito <br />
        para qualquer hora do dia
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <MenuConatainer>
          <ItensHome>
            <img src={icon1} alt="" />
            Compra simples e segursssa
          </ItensHome>
          <ItensHome>
            <img src={icon2} alt="" />
            Entrega rápida e rastreada
          </ItensHome>
          <ItensHome>
            <img src={icon3} alt="" />
            Embalagem mantém o café intacto
          </ItensHome>
          <ItensHome>
            <img src={icon4} alt="" />O café chega fresquinho até você
          </ItensHome>
        </MenuConatainer>
      </TextHome>
      <LogoHome>
        <img src={img} alt="" />
      </LogoHome>
    </HomeContainer>
  )
}
