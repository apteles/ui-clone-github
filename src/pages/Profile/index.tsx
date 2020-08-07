import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import {APIUser,APIRepo} from '../../@types'
import { Container, Main, LeftSide, RightSide,Repos,CalendarHeading,RepoIcon,Tab } from './styles';
import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard'
import RandomCalendar from '../../components/RandomCalendar'

interface Data{
  user?: APIUser;
  repos?: APIRepo[];
  error?:string;
}

const Profile: React.FC = () => {

  const [data, setData] = useState<Data>()
  const {username = 'apteles'} = useParams()

  useEffect( () => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then( async (responses) => {
      const [userReponse, reposResponse] = responses

      if(userReponse.status === 404){
        setData({error: 'User not found!'})
      }

      const user = await userReponse.json()
      const repos = await reposResponse.json()

      setData({
        user,
        repos
      })

    })
  },[username])

  if(data?.error){
    return <h1>{data.error}</h1>
  }

  if(!data?.user || !data?.repos){
    return <h1>Loading...</h1>
  }


  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">{data.user?.public_repos}</span>
    </div>
  )

  return (<Container>

        <Tab className="desktop">
          <div className="wrapper">
            <span className="offset"></span>
            <TabContent />
          </div>

          <span className="line" />
        </Tab>

    <Main>
      <LeftSide>
        <ProfileData 
          username={data.user.login}
          name={data.user.name}
          avatarUrl={data.user.avatar_url}
          followers={data.user.followers}
          following={data.user.following}
          company={data.user.company}
          location={data.user.location}
          email={data.user.email}
          blog={data.user.blog}
        />
      </LeftSide>
      <RightSide>
        <Tab className="mobile">
          <TabContent />

          <span className="line" />
        </Tab>
        <Repos>
          <h2>Random repos</h2>

          <div>
            {[...data.repos.sort( _ => .50 - Math.random() )].slice(0,6).map( item => (
              <RepoCard 
                key={String(item.name)} 
                username={item.owner.login}
                reponame={item.name}
                description={item.description}
                language={item.language}
                stars={item.stargazers_count}
                forks={item.forks}
                />
            ))}
          </div>
        </Repos>
        <CalendarHeading>
          Calendário Randômico (Dados Fake)
        </CalendarHeading>
        <RandomCalendar />
      </RightSide>
    </Main>

  </Container>);
}

export default Profile;