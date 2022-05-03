/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import Card from '../components/Card'
import NextHead from '../components/Head'
import { Grid, Title, PageLayout } from '../styles/styledComponents'

export default function Home({ launches }) {
  return (
    <div className={styles.container}>

      <NextHead title="Spacex Launches" />

      <PageLayout>
        <Title>
         SpaceX Launches
        </Title>

        <Grid>
          { launches.map((launch) => {
            return (
              <Card key={launch.id} launch={launch} />
            )
          }) }
        </Grid>
      </PageLayout>
    </div>
  )
}

export async function getStaticProps() {

  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query GetLaunches {
        launchesPast(limit: 10) {
          id
          mission_name
          launch_date_local
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
            mission_patch
          }
          rocket {
            rocket_name
          }
        }
      }
    `
  });

  console.log('data', data);

  return {
    props: {
      launches: data.launchesPast
    }
  }
}
