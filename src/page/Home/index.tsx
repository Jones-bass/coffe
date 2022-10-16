import {
  TextHome,
  MenuConatainer,
  MenuItens,
  LogoHome,
  HomeContainer,
  ContainerCard,
  ContainerCardMain,
} from './styles'
import img from '../../assets/Imagem.png'
import icon1 from '../../assets/Icon1.png'
import icon2 from '../../assets/Icon2.png'
import icon3 from '../../assets/Icon3.png'
import icon4 from '../../assets/Icon4.png'
import ProductsList from '../ListCoffe/components/product'
import { ListCoffe } from '../ListCoffe'

export function Home() {
  return (
    <>
      <HomeContainer>
        <TextHome>
          Encontre o café perfeito <br />
          para qualquer hora do dia
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <MenuConatainer>
            <MenuItens>
              <img src={icon1} alt="" />
              Compra simples e segursssa
            </MenuItens>
            <MenuItens>
              <img src={icon2} alt="" />
              Entrega rápida e rastreada
            </MenuItens>
            <MenuItens>
              <img src={icon3} alt="" />
              Embalagem mantém o café intacto
            </MenuItens>
            <MenuItens>
              <img src={icon4} alt="" />O café chega fresquinho até você
            </MenuItens>
          </MenuConatainer>
        </TextHome>
        <LogoHome>
          <img src={img} alt="" />
        </LogoHome>
      </HomeContainer>

      <ContainerCardMain>
        <p>Complete seu pedido</p>

        <ContainerCard>
          {ProductsList.map((item) => (
            <ListCoffe
              key={item.id}
              price={item.price}
              name={item.name_product}
              category={item.category}
              description={item.description}
              image={item.image}
            />
          ))}
        </ContainerCard>
      </ContainerCardMain>
    </>
  )
}
