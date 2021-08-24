import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import styled from "styled-components";
import applyStyleModifiers from "@modifiers/applyStyleModifiers";
import React from "react";

export const TEXT_MODIFIERS = {
  success: () => `
  color: #118D4E;
 `,
  warning: () => `
 color: #DBC72A;
 `,

  error: () => `
 color: #DB2A30;
 `,
};
type P = { modifier: string | string[]; children: string };
type S = React.Component<React.HTMLAttributes<{}> & P>;

export const Heading = styled.h2<S>`
  color: #28293d;
  font-weight: 600;
  ${applyStyleModifiers(TEXT_MODIFIERS)};
`;

type allPostsData = {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
};
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
        <Heading modifiers={"error"}>Hello Buddy!!</Heading>
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
