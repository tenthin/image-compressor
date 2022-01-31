import { useState } from "react";
import { Container, Grid, Image, Item, Button } from "semantic-ui-react";


function App() {
  const [origImage,setOrigImage] = useState('');
  const[origImageFile,setOrigImageFile] = useState('')
  const[compressedImage,setCompressedImage] = useState('');
  const[fileName,setFileName] = useState('')

  const handle = () => {
    
  }
  return (
    <div className="App">
      <Container>
        <Grid>
          <Grid.Column width={6}>
            <Item>
              <Image src = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80">
              </Image>
            </Item>
          </Grid.Column>
          <Grid.Column width={4}>
            <input type="file"
            accept="image/"
            className="mt-2 btn btn-dark w-75"
            onChange={(e) => handle(e)} />
            <Button>Compress Image</Button>
            <Button>Download Image</Button>
          </Grid.Column>
          <Grid.Column width={6}>
            <Item>
            <Image src = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80">
              </Image>
            </Item>
          </Grid.Column>

        </Grid>
      </Container>
    </div>
  );
}

export default App;
