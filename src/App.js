import { useState } from "react";
import { Container, Grid, Image, Item, Button } from "semantic-ui-react";
import imageCompression from "browser-image-compression";

function App() {
  const [origImage,setOrigImage] = useState('');
  const[origImageFile,setOrigImageFile] = useState('')
  const[compressedImage,setCompressedImage] = useState('');
  const[fileName,setFileName] = useState('')

  const handle = (e) => {
    const imageFile = e.target.files[0];
    setOrigImage(imageFile);
    setOrigImageFile(URL.createObjectURL(imageFile));
    setFileName(imageFile.name);
  }

  const handleCompressImage = (e) =>{
    e.preventDefault();

    const options = {
      maxSizeMB : 1,
      maxWidthOrHeight:500,
      useWebWorker:true
    }

    if(options.maxSizeMB >= origImage/1024){
      alert("Image is too small, can't be compressed");
      return 0;
    }

    let output;
    imageCompression(origImage,options).then((x)=>{
      output = x

      const downloadLink = URL.createObjectURL(output)
      setCompressedImage(downloadLink)
    })
 }  
  return (
    <div className="App">
      <h1></h1>
      <Container>
        <Grid>
          <Grid.Column width={6}>
            <Item>
              {origImageFile ? (
                <Image src={origImageFile}></Image>
              ) :(<Image src = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80"></Image>
              )}
            </Item>
          </Grid.Column>
          <Grid.Column width={4}>
            <input type="file"
            accept="image/"
            className="mt-2 btn btn-dark w-75"
            onChange={(e) => handle(e)} />
            <h1></h1>
            {origImageFile && <Button primary onClick={(e) => {handleCompressImage(e)}}>Compress Image</Button>}
            <h1></h1>
            {compressedImage && <Button primary>
              <a href={compressedImage} download={fileName}>
                {" "}
              Download Image
              </a>
              </Button>}
          </Grid.Column>
          <Grid.Column width={6}>
            <Item>
            {compressedImage ? (
                <Image src={compressedImage}></Image>
              ) :(<Image src = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80"></Image>
              )}            </Item>
          </Grid.Column>

        </Grid>
      </Container>
    </div>
  );
}

export default App;
