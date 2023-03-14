import { Container, Links, Content } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1>Introdução ao React</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nisi reprehenderit non. Atque debitis sint qui beatae iste commodi tempora vel reiciendis similique porro distinctio, quaerat accusantium ab ipsam non.
            Sunt aliquam perspiciatis laborum? Ullam odio totam quibusdam, perspiciatis, libero a, sapiente esse et iste alias aspernatur consequuntur molestias beatae? Ducimus vero beatae totam delectus quod neque inventore, harum aspernatur?
            Cupiditate aperiam veritatis deserunt accusamus optio, asperiores aliquam doloribus obcaecati temporibus debitis iure tempora, similique nisi dignissimos, veniam quis sequi facilis incidunt ea. Consequuntur nam voluptatem corporis ad et iusto!
            Sit ipsum officiis sed veritatis sunt quos similique voluptatum iure a inventore reprehenderit possimus delectus temporibus mollitia blanditiis quam voluptate id, eius laudantium fugit. Unde nihil facilis odit distinctio iusto!
            Voluptate cum nulla omnis sapiente quibusdam labore eveniet voluptatum? Distinctio mollitia ex beatae libero? Atque totam, quam, obcaecati ipsam ipsum, in pariatur veniam assumenda nostrum sunt fugit quo autem! Dolorum.
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
          </ Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </ Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}