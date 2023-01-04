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
import { ListCoffe } from '../ListCoffe'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { Loading } from '../../components/Loading'
import { Product } from '../../@types/product'

export function Home() {
  const [loading, setLoading] = useState(true)
  const [dados, setDados] = useState<Product[]>([])

  useEffect(() => {
    async function loadDados() {
      setLoading(true)
      try {
        const response = await api.get('/coffees')
        const data = await response.data

        setDados(data)
      } catch (error) {
        toast.error('Erro ao exibir produtos, tente novamente mais tarde.')

        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    loadDados()
  }, [])

  if (loading) {
    return <Loading />
  }

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
          {dados.map((item) => (
            <ListCoffe key={item.id} product={item} />
          ))}
        </ContainerCard>
      </ContainerCardMain>
    </>
  )
}
