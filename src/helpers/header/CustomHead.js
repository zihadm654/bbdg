import Head from "next/head";

function CustomHead({ title = "", keywords, description }) {
  const capatalise= (a)=>{
    a=a.toLowerCase().replace(/(^\w|\s\w)/g, m => m.toUpperCase())
    return a;
  }
  return (
    <Head>
      {/* <meta charset="UTF-8" /> */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
        crossorigin="anonymous"
      >
      </link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Antonio:wght@300;400&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap"
      />
      <title>{capatalise(title)} | BBDG</title>
      
      <script type="text/javascript" src="/typed.js"></script>
    </Head>
  );
}

export default CustomHead;
