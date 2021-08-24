import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Navbar, NavbarLink } from "../styled/navbar";
import { Nav } from "../styled/nav";
import { Button } from "../styled/button";
import { Jumbotron } from "../styled/jumbotron";
import { Column, Row } from "../styled/grid";
import { P, Utilities } from "../styled/base";

import { useState } from "react";

// create your own component
const MyComponent = styled.div`
  ${Utilities};
`;

export default function Home() {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <Navbar bgPrimary expandSm>
        <Nav start={"true"}>
          <NavbarLink light brand href="#">
            <Image
              src={"/welcome-med.jpeg"}
              alt="Picture of the author"
              width={30}
              height={40}
            />
          </NavbarLink>
          <Nav end={"true"}>
            <Button
              primary
              outline
              toggleCollapse
              expandSm
              onClick={() => setHidden(!hidden)}
            >
              <span>&#9776;</span>
            </Button>
          </Nav>
        </Nav>
        <Nav start={"true"} collapse expandSm hidden={hidden}>
          <NavbarLink light active>
            Active
          </NavbarLink>
          <NavbarLink px={4} light href="https://www.google.com">
            Link
          </NavbarLink>
          <NavbarLink light href="/about">
            Link
          </NavbarLink>
          <NavbarLink light disabled href="/about">
            Disabled
          </NavbarLink>
        </Nav>
      </Navbar>
      <Jumbotron fluid>
        <h1>MMP Base design ideas</h1>
        <P textJustify>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sequi
          similique doloribus nostrum tempora at, dolores cupiditate quam
          corrupti pariatur magnam maxime aspernatur assumenda facilis quibusdam
          quos alias repellat temporibus. Optio labore assumenda iusto et iste
          nulla? Aliquid incidunt ab, ipsa dolore quasi quisquam, molestiae a
          quis nemo sint deleniti nisi nesciunt pariatur voluptate expedita modi
          minus officia corrupti facere. Natus inventore sed quia voluptates?
          Corrupti praesentium quod sunt et labore autem. Adipisci, doloribus. A
          dicta deserunt odit eveniet placeat. Et laborum ad doloribus
          repellendus enim quidem sit quasi iusto? Optio eum beatae cum nobis?
          Obcaecati similique voluptate quod voluptatem nihil ipsam omnis modi
          cum, doloribus iste, laboriosam voluptas? Eaque, ipsa sint. Nam culpa,
          a earum itaque error quia expedita!
        </P>
      </Jumbotron>
      <div>
        <Row>
          <Column xs={6}>{"xs={6}"}</Column>
          <Column xs={6}>{"xs={6}"}</Column>
        </Row>

        <Row>
          <Column>{"no props"}</Column>
          <Column>{"no props"}</Column>
          <Column>{"no props"}</Column>
        </Row>

        <Row>
          <Column xs={3}>{"xs={3}"}</Column>
          <Column xs={3}>{"xs={3}"}</Column>
          <Column xs={6}>{"xs={6}"}</Column>
        </Row>
      </div>

      <MyComponent textJustify p5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum
        maiores perspiciatis beatae delectus, totam asperiores quidem! Aperiam
        eligendi omnis provident expedita ea molestiae adipisci voluptate? Sit
        officiis aliquam quasi. Nemo culpa eum sint quisquam, doloremque quo
        recusandae sapiente nulla tempore eos facere laborum ipsa, itaque
        similique quia placeat. Repellendus sapiente est, repellat velit impedit
        iste architecto possimus perferendis provident!
      </MyComponent>
    </>
  );
}
