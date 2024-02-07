import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from 'components/Button';
import Input from 'components/Input';
 import { media } from 'utils/media';
 {/*import MailSentState from '../../components/MailSentState';
import Uploadfile from 'components/Uploadfile';

interface EmailPayload {
  name: string;
  lastname: string;
  phoneno: string;
  email: string;
  description: string;
}

export default function FormSection() {
  const [hasSuccessfullySentMail, setHasSuccessfullySentMail] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitSuccessful, isSubmitting, isSubmitted, errors } = formState;

  async function onSubmit(payload: EmailPayload) {
    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject: 'Email from contact form', ...payload }),
      });

      if (res.status !== 204) {
        setHasErrored(true);
      }
    } catch {
      setHasErrored(true);
      return;
    }

    setHasSuccessfullySentMail(true);
  }

  const isSent = isSubmitSuccessful && isSubmitted;
  const isDisabled = isSubmitting || isSent;
  const isSubmitDisabled = Object.keys(errors).length > 0 || isDisabled;

  if (hasSuccessfullySentMail) {
    return <MailSentState />;
  }

*/}

export default function FormSection() {
   const [firstname, setFirstName] = useState('');
   const [email, setEmail] = useState('');
   const [description, setDescription] = useState('');
  // const [image, setImage] = useState(null);
   const [image, setImage] = useState<File | null>(null);
   

   const [submitted, setSubmitted] = useState(false);

   function fileToBase64(File: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        if(reader.result){
          console.log(reader.result)
        resolve(reader.result); // Extract base64 data from Data URL
        } 
      };
  
      reader.onerror = () => {
        reject(new Error('Unable to read file'));
      };
  
      reader.readAsDataURL(File);
    });
  }
  console.log(image)
   const handleSubmit = async(e: any) => {
    e.preventDefault()
    console.log('Sending')

    
    const file = await fileToBase64(image)
  
    let data = {
     firstname,
     email,
     description,   
     fileName:image ? image.name : '',
     fileType:image ? image.type : '',
     encoding:'base64',
     file,
    }

    fetch('/api/contact',{
      method: 'POST',
      headers:{
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then ((res)=>{
      console.log('Response received')
      
    
      if(res.status === 200){
        console.log('Response succeeded')
       
        
        setSubmitted(true)
        setFirstName('')
        setEmail('')
        setDescription('')
            
        setImage(null);

        
      }
    })
   }

  return (
    <Wrapper>
      
      <h1>Submit your CV here</h1>
      <Form>
    
        
        <InputGroup>
          <InputStack>
         {/*   {errors.name && <ErrorMessage>Name is required</ErrorMessage>} */}
            <Input placeholder="First Name" name="firstname" onChange={(e)=>{setFirstName(e.target.value)}}  />
          </InputStack>
          <InputStack>
        {/*    {errors.email && <ErrorMessage>Last Name is required</ErrorMessage>} */}
           
            <Input placeholder=" Email" name="email" onChange={(e)=>{setEmail(e.target.value)}} />
          </InputStack>
        </InputGroup>
       
        <InputStack>
      {/*    {errors.description && <ErrorMessage>Description is required</ErrorMessage>} */}
          <Textarea
            as="textarea"
            placeholder="Enter Your Message..."
            name="description"
            onChange={(e)=>{setDescription(e.target.value)}}
       
          />
          <InputStack>
          
          {/*<Input type="file" required  name="image" onChange={(e)=>{setImage(e.target.files[0])}}/>*/}
          <Input type="file" required name="image" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setImage(e.target.files ? e.target.files[0] : null)}} />

          </InputStack>
      {/*  <Uploadfile/>*/}
            
         
        </InputStack>
        <Button as="button" type="submit" onClick={(e)=>{handleSubmit(e)}} >
          Submit
        </Button>
      </Form>
     
    </Wrapper>
  );
  
  }
const Wrapper = styled.div`
  flex: 2;
  text-align: center;
  margin:10px;
 
`;

const Form = styled.form`
  & > * {
    margin-bottom: 2rem;
    margin-top: 15px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 2rem;
  }

  & > * {
    flex: 1;
  }
 
  ${media('<=tablet')} {
    flex-direction: column;
    & > *:first-child {
      margin-right: 0rem;
      margin-bottom: 2rem;
    }
  }
`;

const InputStack = styled.div`
  display: flex;
  flex-direction: column;
  border:2px solid #185651;

  & > *:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

const ErrorMessage = styled.p`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
`;

const Textarea = styled(Input)`
  width: 100%;
  min-height: 20rem;
`;
