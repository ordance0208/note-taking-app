import Container from '../../components/Container/Container';
import TextGroup from '../../components/TextGroup/TextGroup';
import Header from '../../components/Header/Header';
import './About.css';

const About = () => {
  return (
    <div className='about' style={{overflow: 'hidden', height: 'auto'}}>
      <Header /> 
      <Container>
        <TextGroup heading='About This Project'>
          <p>A simple note taking application with a text editor that enables text formatting and inserting images. This is a project that I did for my web development portfolio. The project utilizes the TipTap text editor, for more info see the link below.</p>
        </TextGroup>
        <TextGroup heading='About Me'>
          <p>I am Ordan Gramatov, a guy with passion for web development. I am an entry level front end developer constantly expanding my knowledge on the web development field and looking forward into getting an intership.</p>
        </TextGroup>
        <TextGroup heading='Links'>
          <a href='https://www.linkedin.com/in/ordan-gramatov/' target='_blank'>LinkedIn</a> <br/>
          <a href='https://github.com/ordance0208' target='_blank'>GitHub Profile</a> <br/>
          <a href='https://github.com/ordance0208/note-taking-app' target='_blank'>GitHub Repository</a>  <br/>
          <a href='https://tiptap.dev/' target='_blank'>TipTap Editor</a>
        </TextGroup>
      </Container>     
    </div>
  );
};

export default About;
