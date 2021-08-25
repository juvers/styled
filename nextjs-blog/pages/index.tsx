import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import styled, { StyledComponent, StyledInterface } from "styled-components";
import applyStyleModifiers from "@modifiers/applyStyleModifiers";
import React, {
  ReactElement,
  DetailedHTMLProps,
  HTMLAttributes,
  JSXElementConstructor,
} from "react";

export const TEXT_MODIFIERS = {
  success: () => `
  color: #118D4E;
  font-size: 30px;
 `,
  warning: () => `
 color: #DBC72A;
 `,
  blueLarge: () => `
  font-size: 70px;
  color: blue;`,
  error: () => `
 color: #DB2A30;
 `,
};

export const Heading: any = styled.h2`
  color: #28293d;
  font-weight: 600;
  ${applyStyleModifiers(TEXT_MODIFIERS)};
`;

export const BTN: any = styled.button`
  ${applyStyleModifiers(TEXT_MODIFIERS)}
`;
type allPostsData = {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
};

const x = "error";
export default function Home({ allPostsData }: allPostsData): JSX.Element {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <p>This is an idea</p>
        <Heading modifiers={["error"]}>Hello Buddy!!</Heading>
        <BTN
          onClick={() => alert("Get btn")}
          href={"https://www.google.com"}
          modifiers={["warning"]}
        >
          Inside button
        </BTN>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
