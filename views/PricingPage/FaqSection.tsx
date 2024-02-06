import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="Does TechEmulsion team think out of the box for your solution?">
      Yes, Tech Emulsion team always goes an extra mile in resolving the business problems by thinking out of the box regarding diverse industries with the best possible IT services.
      </Accordion>
      <Accordion title="Why should you prefer TechEmulsion as a Software Development Company?">
      With over 4 years of expertise in IT services, Tech Emulsion marks its significance in various industries, with the best possible solutions and deliverables.
      </Accordion>
      <Accordion title="How is Tech Emulsion approach towards tackling challenging projects?">
      We follow a proactively dynamic approach while bringing you the best possible solutions with our IT services with active collaboration and meticulous focus.
      </Accordion>
      <Accordion title="How important is transparency in communication at Tech Emulsion">
      Transparency is one of the main pillars of our values and we believe in delivering all the IT services with honest and dignified communication skills thus bridging the gaps between businesses.
      </Accordion>
      <Accordion title="What must be considered by a business while selecting an IT service provider company?">
      It is a continuous improvement process of strong partnership with the right IT service provider company, depending upon its adaptability to new technologies and working with tenacity for a purpose broader than usual tech-horizons.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
