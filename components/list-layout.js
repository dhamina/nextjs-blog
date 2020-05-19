export const ListLayout = (props)=>{
    const {title}=props
    return(
        <div className="cn">
    <h1 className="title">{title}</h1>
    <div className="grid-container">
    <section className="grid-item">
     image
   </section>
   <section className="grid-item">
     image
   </section> 
   <section className="grid-item">
     image
   </section> 
   <section className="grid-item">
     image
   </section> 
   <section className="grid-item">
     image
   </section>
    <section className="grid-item">
     image
   </section>
   </div>
    <style>
        {
            `
            .cn{padding-left:40px}
            .title{text-align: center;}
            .grid-container {
                display: grid;
                grid-template-columns: auto auto auto;
                padding: 10px;
              }
              .grid-item {
                font-size: 30px;
                text-align: center;
                border-radius: 25px;
                background: white;
                color: black;
                padding: 1px;
                width: 209px;
                height: 150px;
                margin: 10px;
              }
          `
        }
    </style>
   </div>
    )
}