import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { Container, SearchForm, GithubLogo } from './styles';
import { ThemeName } from '../../styles/themes';

interface Props{
  themeName: ThemeName,
  onChangeTheme: (theme: ThemeName) => void
}

const Header: React.FC<Props> = ({
  themeName,
  onChangeTheme
}) => {
  const [search, setTerm] = useState('')
  const navigate = useNavigate()
  function handleSubmit(event: React.FormEvent){
    event?.preventDefault()
    navigate(`/${search.toLowerCase().trim()}`)
  }

  function toggleTheme(){
    onChangeTheme(themeName === 'light' ? 'dark': 'light')
  }

  return (<Container>
    <GithubLogo onClick={toggleTheme}/>
    <SearchForm onSubmit={handleSubmit}>
      <input placeholder="Enter Username or Repo..." value={search} onChange={ (e) => setTerm(e.currentTarget.value)} />
    </SearchForm>
  </Container>);
}

export default Header;