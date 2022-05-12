import Container from '../../components/Container/Container';
import TextGroup from '../../components/TextGroup/TextGroup';
import ContainerHeader from '../../components/ContianerHeader/ContainerHeader';
import './About.css';

const About = () => {
  return (
    <div className='about' style={{overflow: 'hidden', height: 'auto'}}>
      <ContainerHeader /> 
      <Container>
        <TextGroup heading='About This Project'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus eum animi, at facilis minus tenetur quam dignissimos in voluptas.</p>
        </TextGroup>
        <TextGroup heading='About Me'>
          <p>I am Ordan Gramatov, a guy with passion for web development. I am an entry level front end developer constantly expanding my knowledge on the web development field and looking forward into getting an intership.</p>
        </TextGroup>
        <TextGroup heading='Links'>
          <a href='https://www.linkedin.com/in/ordan-gramatov/' target='_blank'>LinkedIn</a> <br/>
          <a href='https://github.com/ordance0208' target='_blank'>GitHub Profile</a> <br/>
          <a href='https://github.com/ordance0208/note-taking-app' target='_blank'>GitHub Repository</a> 
        </TextGroup>
      </Container>     
    </div>
  );
};

export default About;
