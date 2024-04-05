import React from 'react'
import { useParams } from 'react-router-dom'


function Post() {
    let {title} = useParams()
  return (
    <div className="Home">
        <div className="container">
            <h1>Post first {title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque non amet unde sunt iusto aperiam nobis nostrum eius laudantium libero doloremque quis iste, recusandae mollitia dolorum possimus reiciendis iure molestias!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, cupiditate.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, obcaecati voluptatum! Nemo, accusamus. Ullam obcaecati optio voluptatibus eaque totam quidem, tempora delectus eveniet nemo, quis reiciendis velit dolorem voluptas enim. Neque repellendus ullam voluptate atque qui corrupti veritatis? Optio enim a cupiditate qui, harum veritatis adipisci animi, fugit dicta ab soluta minus odit. Quo officia, officiis et in error voluptatem. Possimus rem sequi non quas, soluta ut laboriosam ea at quibusdam voluptate cumque eum temporibus facere incidunt similique quidem maiores fuga nam. Laborum, expedita veritatis voluptate unde neque tempora, excepturi doloribus sapiente asperiores itaque labore ipsum repellendus eos ipsam exercitationem corporis possimus, maiores incidunt! Eum est sit minus ad voluptatem tenetur quia rem sed vel?</p>
        </div>
    </div>
  )
}

export default Post