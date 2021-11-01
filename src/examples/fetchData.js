import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
    query{
        site{
          info: siteMetadata{
            author
            description
            simpleData
            title
            complexData{
              age
              name
            }
            person{
              age
              name
            }
          }
        }
      }    
    ` 

const FetchData = () => { 
    const data = useStaticQuery(getData)
    return (
        <div>
            <h2>{data.site.info.person.name}</h2>
            <div>
                {data.site.info.complexData.map((item,index)=>{
                    return <p key={index}>
                        {item.name}:{item.age}
                    </p>
                })}
            </div>
        </div>
    )
}

export default FetchData
