import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';
import BackgroundVideo from 'components/BackgroundVideo';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
   
    <HeroWrapper>
<BackgroundVideo/>
  
    
      <Contents>
        <CustomOverTitle>your partner in software development</CustomOverTitle>
        <Heading>Imagineering Digital Success for your Business</Heading>
        <Description>
        
         Tech Emulsion provides a tailored selection of outsourcing methods that can be adjusted to your present 
        requirements and expanded as your business expands. Regardless of whether you’re a newcomer to IT outsourcing or
         someone skilled in overseeing extensive software development groups.
        </Description>
       <CustomButtonGroup>
           <Button href="/contact" >
           Share your CV <span>&rarr;</span>
         </Button>
          
         
          <NextLink href="/contact" passHref>
            <Button transparent>
              Contact us <span>&rarr;</span>
            </Button>
          </NextLink>
  </CustomButtonGroup>
     </Contents>
      {/*<ImageContainer>
        <HeroIllustration />
  </ImageContainer>*/}
      
    </HeroWrapper>
    
    
  );
}

const HeroWrapper = styled.div`
  
  display: flex;
  padding-top: 5rem;
  padding-left: 10rem;
  padding-right:5rem;     
 

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }

  ${media('=largeDesktop')} {
    padding-bottom: 20rem;
  }
`;


const Contents = styled.div`
  flex: 1;
  max-width: 60rem;
  padding: 0 2rem;
  color: rgb(var(--textSecondary));
  ;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
  
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
 
  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;
  

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
font-size: 1rem;
  opacity: 0.8;
  line-height: 1.6;
`;

const Heading = styled.h1`


  font-size: 7rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  opacity: 0.8;
  color: #185651;
  
  

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
