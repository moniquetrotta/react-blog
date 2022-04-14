import Post from "../Post";

const Article = () => {


  return(
    <section className="container">
    <h3>articles</h3>
    <div className="mt-5 container-posts">
    <Post subtitle="HELP!" title="A solution to soften people's fear"> 

    This case study is part of my third project done for the Google course on UX Design Certificate, in which it was a free case study, but focused on Social Goods
    </Post>  
    <Post subtitle="PETIT COFFEE" title="Um projeto feito ao cursar o Google UXD"> 
    Um projeto feito ao cursar o Google UXD will be distracted by the readable content of a page when looking at its layout. 
    </Post>   
    <Post subtitle="Flowers" title="Comprar flores ficou mais fácil">
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
    </Post>  

    </div>

    </section>
  );
}

export default Article;