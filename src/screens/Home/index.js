import { HomeList, ScreenScrollContainer, Hero } from '../../components'

const FAKE_DATA_CHARACTERES = [
  {
    id: 0,
    image_url:
      'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
    title: 'Darth Vader',
    subtitle: 'Anakin Skywalker',
    description:
      'Darth Vader (anteriormente chamado Anakin Skywalker) é um dos personagens centrais da série de filmes Star Wars (Guerra nas Estrelas), tendo sido um dos protagonistas, juntamente com Obi-Wan Kenobi, da trilogia prequel (mas se tornando o vilão secundário no terceiro filme após a morte do General Grievous), um dos antagonistas principais da trilogia original ao lado do Imperador Palpatine (porém acaba se redimindo no final), e um anti-herói póstumo na trilogia de sequência, sendo que suas ações ainda afetam o universo de Star Wars, sendo para o bem ou para o mal, principalmente quando se trata de seu neto, Ben Solo, o Kylo Ren, que tem por Vader uma admiração cega, e deseja mais do que tudo ser como ele (e até superá-lo).',
  },
  {
    id: 1,
    image_url:
      'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2020/02/desafio-jedi-de-mestre-yoda-consertar-as-frases-consegue-vocecc82.jpg?quality=100&strip=info',
  },
]

export const Home = () => {
  return (
    <ScreenScrollContainer>
      <Hero 
        item={{
          title: 'Episódio I',
          subtitle: 'A Ameaça Fantasma',
          type: 'Filme',
          image_url: 'https://static.wikia.nocookie.net/dublagempedia/images/7/7d/Pedro_el_malo.jpg/revision/latest?cb=20200620052955&path-prefix=pt-br',
        }}
      />
      <HomeList title="Filmes" data={FAKE_DATA_CHARACTERES} />
      <HomeList title="Personagens" data={FAKE_DATA_CHARACTERES} />
    </ScreenScrollContainer>
  )
}
