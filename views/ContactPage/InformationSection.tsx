import styled from 'styled-components';

export default function InformationSection() {
  return (
    <Wrapper>
      <h3>Contact Info</h3>
      <p>
        <span>Address:</span> Sheikh Yaseen Trade Center,University Road,Peshawar.

       
      </p>
      <p>
      <span>Email:</span> info@techemulsion.com
      
      </p>
      <p>
      <span>Phone:</span> +66 94 706 0139
      </p>



<h3> HR Info</h3>
<p>
     <span>Email:</span> info@techemulsion.com
      </p>
      <p>
      <span>Phone:</span> +66 94 706 0139
      </p>
    </Wrapper>

    
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    margin-top:2rem;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    color: rgba(var(--text), 0.7);
  }

  span {
    opacity: 1;
    color: rgba(var(--text), 1);
  }
`;
