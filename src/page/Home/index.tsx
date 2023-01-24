import { useEffect, useState } from 'react'

import {
  TextHome,
  MenuConatainer,
  LogoHome,
  HomeContainer,
  ContainerCard,
  ContainerCardMain,
} from './styles'
import { FaBox } from 'react-icons/fa'
import { MdWatchLater, MdShoppingCart, MdCoffee } from 'react-icons/md'

import img from '../../assets/Imagem.png'

import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { Loading } from '../../components/Loading'
import { Product } from '../../@types/product'
import { CardCoffee } from '../../components/cardCoffee'
import { IconMenu } from '../../components/IconMenu'

export interface ProductFormat extends Product {
  priceFormattd: string
}

export function Home() {
  const [loading, setLoading] = useState(true)
  const [dados, setDados] = useState<ProductFormat[]>([])

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
            <IconMenu
              text="Compra simples e segura"
              variant="yellowDark"
              Icon={<MdShoppingCart size={16} />}
            />
            <IconMenu
              text="Entrega rápida e rastreada"
              variant="yellow"
              Icon={<MdWatchLater size={16} />}
            />
            <IconMenu
              text="Embalagem mantém o café intacto"
              variant="gray"
              Icon={<FaBox size={12} />}
            />
            <IconMenu
              text="O café chega fresquinho até você"
              variant="purple"
              Icon={<MdCoffee size={16} />}
            />
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
            <CardCoffee key={item.id} product={item} />
          ))}
        </ContainerCard>
      </ContainerCardMain>
    </>
  )
}
